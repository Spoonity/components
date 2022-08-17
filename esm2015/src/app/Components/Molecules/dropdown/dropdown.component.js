import { Component, ContentChildren, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { OptionComponent } from './option/option.component';
import { DropdownService } from './dropdown.service';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
export class DropdownComponent extends FormFieldManager {
    constructor(_dropdownService, _renderer) {
        super(_renderer);
        this._dropdownService = _dropdownService;
        /* dropdown selection has changed */
        this.dropdownChange = new EventEmitter();
        /* multiple selection: list of selected OptionComponent */
        this.multiple_selectedOptions = [];
        /* multiple selection: list of selected option values */
        this.multiple_selected = [];
        this._dropdownService.register(this);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.selectMultiple) {
                this._initializeValueOnMultiple();
            }
            else {
                this._initializeValueOnSingle();
                this.keyManager = new ActiveDescendantKeyManager(this.options)
                    .withHorizontalOrientation('ltr')
                    .withVerticalOrientation()
                    .withWrap();
            }
            this.checkDirty();
        }, 100);
    }
    _initializeValueOnMultiple() {
        this.options.toArray().forEach((o) => {
            if (this.multiple_selected.includes(o.value)) {
                if (!this.multiple_selected.includes(o.value)) {
                    this.multiple_selected.push(o.value);
                }
                if (!this.multiple_selectedOptions.find((o1) => o1.value === o.value)) {
                    this.multiple_selectedOptions.push(o);
                    o.checkboxModel = true;
                }
            }
        });
        this.value = this.multiple_selectedOptions.length ?
            Array.from(this.multiple_selectedOptions, (o) => o.text).join(', ')
            : '';
    }
    _initializeValueOnSingle() {
        this.single_selectedOption = this.options.toArray().find(option => option.value === this.single_selected);
        this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
    }
    /**
     *  override: inherited writeValue
     *  called on form control setValue and form initialize
     */
    writeValue(obj) {
        if (obj !== undefined) {
            if (this.selectMultiple) {
                if (Array.isArray(obj)) {
                    this.multiple_selected = [...obj];
                    if (this.options) {
                        this._initializeValueOnMultiple();
                    }
                }
            }
            else {
                this.single_selected = obj;
                if (this.options) {
                    this._initializeValueOnSingle();
                }
            }
            this.checkDirty();
        }
    }
    /**
     * show dropdown action
     */
    showDropdown() {
        this.dropdown.show();
        if (!this.options.length) {
            return;
        }
        // set highlighted item only for single selection
        // -- highlight selected item or first item
        if (!this.selectMultiple) {
            if (this.single_selected) {
                this.keyManager.setActiveItem(this.single_selectedOption);
            }
            else {
                this.keyManager.setFirstItemActive();
            }
        }
    }
    /**
     * hide dropdown action
     */
    hideDropdown() {
        this.dropdown.hide();
    }
    /**
     * action when clicking the chevron icon (on the right)
     * @param event
     */
    onDropMenuIconClick(event) {
        event.stopPropagation();
        setTimeout(() => {
            this.input.nativeElement.focus();
            this.input.nativeElement.click();
        }, 10);
    }
    /**
     * select option
     * @param option
     */
    selectOption(option) {
        if (this.selectMultiple) {
            // already selected -- unselect item
            if (this.multiple_selectedOptions.find((o) => o.value === option.value)) {
                this.multiple_selectedOptions = [...this.multiple_selectedOptions.filter((o) => o.value !== option.value)];
                this.multiple_selected = [...this.multiple_selected.filter((s) => s !== option.value)];
                option.checkboxModel = false;
            }
            else {
                // not yet selected -- select item
                if (!this.multiple_selected.includes(option.value)) {
                    this.multiple_selected.push(option.value);
                }
                this.multiple_selectedOptions.push(option);
                option.checkboxModel = true;
            }
            this.value = this.multiple_selectedOptions.length ?
                Array.from(this.multiple_selectedOptions, (o) => o.text).join(', ')
                : '';
            this.dropdownChange.emit(Array.from(this.multiple_selectedOptions, (o) => o.value));
        }
        else {
            this.keyManager.setActiveItem(option);
            this.single_selected = option.value;
            this.single_selectedOption = option;
            this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
            this.hideDropdown();
            this.input.nativeElement.blur();
            this.dropdownChange.emit(this.single_selected);
        }
        this.checkDirty();
        this.onChange(this.selectMultiple ? this.multiple_selected : option.value);
    }
    /**
     * keydown event (applies only to single selection items)
     * @param event
     */
    onKeyDown(event) {
        if (this.selectMultiple) {
            return;
        }
        if (['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up'].indexOf(event.key) > -1) {
            if (!this.dropdown.showing) {
                this.showDropdown();
                return;
            }
            if (!this.options.length) {
                event.preventDefault();
                return;
            }
        }
        if (event.key === 'Enter' || event.key === ' ') {
            this.single_selectedOption = this.keyManager.activeItem;
            this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
            this.hideDropdown();
            this.onChange();
            this.checkDirty();
        }
        else if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.dropdown.showing) {
                this.hideDropdown();
            }
        }
        else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
            .indexOf(event.key) > -1) {
            this.keyManager.onKeydown(event);
        }
        else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
            if (this.dropdown.showing) {
                event.preventDefault();
            }
        }
    }
    /**
     * on change action
     */
    changeAction_($event) {
        this.changeAction($event);
        this.dropdownChange.emit($event);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-dropdown',
                template: "<div #dropReference class=\"spt-input-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input #input [ngClass]=\"{'dirty': isDirty,\n                              'error': !!error,\n                              'has-left-icon': !!startIcon,\n                              'has-right-icon': !!endIcon,\n                              'has-length': !!max,\n                              'disabled-state': isDisabled,\n                              'show-placeholder': !label\n                            }\"\n           (click)=\"showDropdown()\"\n           [(ngModel)]=\"value\"\n           [style.background-color]=\"backgroundColor\"\n           (ngModelChange)=\"changeAction($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           placeholder=\"{{placeholder}}\"\n           class=\"{{size}} has-right-icon\"\n           [disabled]=\"!!isDisabled ? isDisabled : null\" readonly autocomplete=\"off\">\n\n    <!-- label -->\n    <label class=\"text-field-label label\" *ngIf=\"label\"\n           [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- right icon (arrow) -->\n    <div *ngIf=\"!error\" class=\"text-field-icon right-icon\" (click)=\"onDropMenuIconClick($event)\">\n        <svg-icon name=\"expand-more\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </div>\n\n    <spt-overlay-template [reference]=\"dropReference\" #dropdownComp>\n        <div class=\"dropdown-options-container spt-elevation--5\">\n            <ng-content select=\"spt-option\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    DropdownService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownComponent),
                        multi: true
                    }
                ],
                styles: [".dropdown-options-container{width:100%;max-height:200px;overflow:auto}.spt-input-container input:focus~.right-icon,.spt-input-container input~.right-icon{transition:all .2s ease,background-color .2s ease-in}.spt-input-container input:focus~.right-icon{transform:rotate(180deg) translateY(50%)}.spt-input-container input:focus~.right-icon svg path:last-child{fill:#f90}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: DropdownService },
    { type: Renderer2 }
];
DropdownComponent.propDecorators = {
    selectMultiple: [{ type: Input }],
    dropdownChange: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input',] }],
    dropdown: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [OptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ0gsWUFBWSxFQUN4QixVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDZCxTQUFTLEVBQ3BCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBZTdELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFnQ3JELFlBQ1UsZ0JBQWlDLEVBQ3pDLFNBQW9CO1FBRXBCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUhULHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUE3QjNDLG9DQUFvQztRQUMxQixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBa0J0RSwwREFBMEQ7UUFDbkQsNkJBQXdCLEdBQXNCLEVBQUUsQ0FBQztRQUV4RCx3REFBd0Q7UUFDakQsc0JBQWlCLEdBQVUsRUFBRSxDQUFDO1FBVW5DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdNLGVBQWU7UUFDcEIs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LEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLE1BQU07UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFqUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qixzd0VBQXdDO2dCQUV4QyxTQUFTLEVBQUU7b0JBQ1QsZUFBZTtvQkFDZjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3dCQUNoRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7O1lBZk8sZUFBZTtZQVBWLFNBQVM7Ozs2QkF5Qm5CLEtBQUs7NkJBR0wsTUFBTTtvQkFFTixTQUFTLFNBQUMsT0FBTzt1QkFHakIsU0FBUyxTQUFDLHdCQUF3QjtzQkFHbEMsZUFBZSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LFxuICBRdWVyeUxpc3QsIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGb3JtRmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvZm9ybS1maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7T3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvb3ZlcmxheS10ZW1wbGF0ZS9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge09wdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9vcHRpb24vb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0Ryb3Bkb3duU2VydmljZX0gZnJvbSAnLi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7QWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50Lmxlc3MnLCAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlci5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIERyb3Bkb3duU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgRm9ybUZpZWxkTWFuYWdlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvKiBmbGFnIGlmIG11bHRpcGxlIHNlbGVjdGlvbiBpcyBhbGxvd2VkICovXG4gIEBJbnB1dCgpIHNlbGVjdE11bHRpcGxlOiBib29sZWFuO1xuXG4gIC8qIGRyb3Bkb3duIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgZHJvcGRvd25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKVxuICBwdWJsaWMgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgQFZpZXdDaGlsZChPdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBkcm9wZG93bjogT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oT3B0aW9uQ29tcG9uZW50KVxuICBwdWJsaWMgb3B0aW9uczogUXVlcnlMaXN0PE9wdGlvbkNvbXBvbmVudD47XG5cblxuICAvKiBzaW5nbGUgc2VsZWN0aW9uOiBzZWxlY3RlZCBPcHRpb25Db21wb25lbnQgKi9cbiAgcHVibGljIHNpbmdsZV9zZWxlY3RlZE9wdGlvbjogT3B0aW9uQ29tcG9uZW50O1xuXG4gIC8qIHNpbmdsZSBzZWxlY3Rpb246IHNlbGVjdGVkIG9wdGlvbiB2YWx1ZSAqL1xuICBwdWJsaWMgc2luZ2xlX3NlbGVjdGVkOiBhbnk7XG5cbiAgLyogbXVsdGlwbGUgc2VsZWN0aW9uOiBsaXN0IG9mIHNlbGVjdGVkIE9wdGlvbkNvbXBvbmVudCAqL1xuICBwdWJsaWMgbXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zOiBPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuXG4gIC8qIG11bHRpcGxlIHNlbGVjdGlvbjogbGlzdCBvZiBzZWxlY3RlZCBvcHRpb24gdmFsdWVzICovXG4gIHB1YmxpYyBtdWx0aXBsZV9zZWxlY3RlZDogYW55W10gPSBbXTtcblxuICAvKiBrZXkgbWFuYWdlciAqL1xuICBwcml2YXRlIGtleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE9wdGlvbkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZHJvcGRvd25TZXJ2aWNlOiBEcm9wZG93blNlcnZpY2UsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX3JlbmRlcmVyKTtcbiAgICB0aGlzLl9kcm9wZG93blNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplVmFsdWVPbk11bHRpcGxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplVmFsdWVPblNpbmdsZSgpO1xuICAgICAgICB0aGlzLmtleU1hbmFnZXIgPSBuZXcgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIodGhpcy5vcHRpb25zKVxuICAgICAgICAgIC53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKCdsdHInKVxuICAgICAgICAgIC53aXRoVmVydGljYWxPcmllbnRhdGlvbigpXG4gICAgICAgICAgLndpdGhXcmFwKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVZhbHVlT25NdWx0aXBsZSgpIHtcbiAgICB0aGlzLm9wdGlvbnMudG9BcnJheSgpLmZvckVhY2goKG86IE9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWQuaW5jbHVkZXMoby52YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlX3NlbGVjdGVkLmluY2x1ZGVzKG8udmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5wdXNoKG8udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5maW5kKChvMTogT3B0aW9uQ29tcG9uZW50KSA9PiBvMS52YWx1ZSA9PT0gby52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5wdXNoKG8pO1xuICAgICAgICAgIG8uY2hlY2tib3hNb2RlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggP1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucywgKG86IE9wdGlvbkNvbXBvbmVudCkgPT4gby50ZXh0KS5qb2luKCcsICcpXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZVZhbHVlT25TaW5nbGUoKSB7XG4gICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zaW5nbGVfc2VsZWN0ZWQpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbiA/IHRoaXMuc2luZ2xlX3NlbGVjdGVkT3B0aW9uLnRleHQgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiAgb3ZlcnJpZGU6IGluaGVyaXRlZCB3cml0ZVZhbHVlXG4gICAqICBjYWxsZWQgb24gZm9ybSBjb250cm9sIHNldFZhbHVlIGFuZCBmb3JtIGluaXRpYWxpemVcbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdE11bHRpcGxlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkID0gWy4uLm9ial07XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVZhbHVlT25NdWx0aXBsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWQgPSBvYmo7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLl9pbml0aWFsaXplVmFsdWVPblNpbmdsZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2hvdyBkcm9wZG93biBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBzaG93RHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93bi5zaG93KCk7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGhpZ2hsaWdodGVkIGl0ZW0gb25seSBmb3Igc2luZ2xlIHNlbGVjdGlvblxuICAgIC8vIC0tIGhpZ2hsaWdodCBzZWxlY3RlZCBpdGVtIG9yIGZpcnN0IGl0ZW1cbiAgICBpZiAoIXRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIGlmICh0aGlzLnNpbmdsZV9zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmtleU1hbmFnZXIuc2V0QWN0aXZlSXRlbSh0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmtleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGhpZGUgZHJvcGRvd24gYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZURyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd24uaGlkZSgpO1xuICB9XG5cblxuICAvKipcbiAgICogYWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIGNoZXZyb24gaWNvbiAob24gdGhlIHJpZ2h0KVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvbkRyb3BNZW51SWNvbkNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3Qgb3B0aW9uXG4gICAqIEBwYXJhbSBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb25Db21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RNdWx0aXBsZSkge1xuICAgICAgLy8gYWxyZWFkeSBzZWxlY3RlZCAtLSB1bnNlbGVjdCBpdGVtXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMuZmluZCgobzogT3B0aW9uQ29tcG9uZW50KSA9PiBvLnZhbHVlID09PSBvcHRpb24udmFsdWUpKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zID0gWy4uLnRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLmZpbHRlcigobzogT3B0aW9uQ29tcG9uZW50KSA9PiBvLnZhbHVlICE9PSBvcHRpb24udmFsdWUpXTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZCA9IFsuLi50aGlzLm11bHRpcGxlX3NlbGVjdGVkLmZpbHRlcigoczogc3RyaW5nKSA9PiBzICE9PSBvcHRpb24udmFsdWUpXTtcbiAgICAgICAgb3B0aW9uLmNoZWNrYm94TW9kZWwgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdCB5ZXQgc2VsZWN0ZWQgLS0gc2VsZWN0IGl0ZW1cbiAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlX3NlbGVjdGVkLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkLnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbi5jaGVja2JveE1vZGVsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA/XG4gICAgICAgIEFycmF5LmZyb20odGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMsIChvOiBPcHRpb25Db21wb25lbnQpID0+IG8udGV4dCkuam9pbignLCAnKVxuICAgICAgICA6ICcnO1xuICAgICAgdGhpcy5kcm9wZG93bkNoYW5nZS5lbWl0KEFycmF5LmZyb20odGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMsIChvOiBPcHRpb25Db21wb25lbnQpID0+IG8udmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0ob3B0aW9uKTtcbiAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkID0gb3B0aW9uLnZhbHVlO1xuICAgICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIHRoaXMuZHJvcGRvd25DaGFuZ2UuZW1pdCh0aGlzLnNpbmdsZV9zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnNlbGVjdE11bHRpcGxlID8gdGhpcy5tdWx0aXBsZV9zZWxlY3RlZCA6IG9wdGlvbi52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICoga2V5ZG93biBldmVudCAoYXBwbGllcyBvbmx5IHRvIHNpbmdsZSBzZWxlY3Rpb24gaXRlbXMpXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLnNlbGVjdE11bHRpcGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFsnRW50ZXInLCAnICcsICdBcnJvd0Rvd24nLCAnRG93bicsICdBcnJvd1VwJywgJ1VwJ10uaW5kZXhPZihldmVudC5rZXkpID4gLTEpIHtcbiAgICAgIGlmICghdGhpcy5kcm9wZG93bi5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbiA9IHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuc2luZ2xlX3NlbGVjdGVkT3B0aW9uID8gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24udGV4dCA6ICcnO1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbJ0Fycm93VXAnLCAnVXAnLCAnQXJyb3dEb3duJywgJ0Rvd24nLCAnQXJyb3dSaWdodCcsICdSaWdodCcsICdBcnJvd0xlZnQnLCAnTGVmdCddXG4gICAgICAuaW5kZXhPZihldmVudC5rZXkpID4gLTEpIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnUGFnZVVwJyB8fCBldmVudC5rZXkgPT09ICdQYWdlRG93bicgfHwgZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24uc2hvd2luZykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBjaGFuZ2UgYWN0aW9uXG4gICAqL1xuICBjaGFuZ2VBY3Rpb25fKCRldmVudCkge1xuICAgIHRoaXMuY2hhbmdlQWN0aW9uKCRldmVudCk7XG4gICAgdGhpcy5kcm9wZG93bkNoYW5nZS5lbWl0KCRldmVudCk7XG4gIH1cbn1cbiJdfQ==