import { Component, ContentChildren, forwardRef, Input, Renderer2, ViewChild } from '@angular/core';
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
        }
        else {
            this.keyManager.setActiveItem(option);
            this.single_selected = option.value;
            this.single_selectedOption = option;
            this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
            this.hideDropdown();
            this.input.nativeElement.blur();
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
                styles: [".dropdown-options-container{width:100%;max-height:200px;overflow:auto}.spt-input-container input:focus~.right-icon,.spt-input-container input~.right-icon{transition:all .2s ease,background-color .2s ease-in}.spt-input-container input:focus~.right-icon{transform:rotate(180deg) translateY(50%)}.spt-input-container input:focus~.right-icon svg path:last-child{fill:#f90}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: DropdownService },
    { type: Renderer2 }
];
DropdownComponent.propDecorators = {
    selectMultiple: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    dropdown: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [OptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBRWYsVUFBVSxFQUFFLEtBQUssRUFDTixTQUFTLEVBQ3BCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBZTdELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUErQnJELFlBQ1UsZ0JBQWlDLEVBQ3pDLFNBQW9CO1FBRXBCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUhULHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFWM0MsMERBQTBEO1FBQ25ELDZCQUF3QixHQUFzQixFQUFFLENBQUM7UUFFeEQsd0RBQXdEO1FBQ2pELHNCQUFpQixHQUFVLEVBQUUsQ0FBQztRQVVuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHTSxlQUFlO1FBQ3BCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQywwQkFBMEIs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U0FBUzs7OzZCQXlCbkIsS0FBSztvQkFHTCxTQUFTLFNBQUMsT0FBTzt1QkFHakIsU0FBUyxTQUFDLHdCQUF3QjtzQkFHbEMsZUFBZSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZiwgSW5wdXQsXG4gIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Zvcm1GaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtPdmVybGF5VGVtcGxhdGVDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9vdmVybGF5LXRlbXBsYXRlL292ZXJsYXktdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7T3B0aW9uQ29tcG9uZW50fSBmcm9tICcuL29wdGlvbi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7RHJvcGRvd25TZXJ2aWNlfSBmcm9tICcuL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHtBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQubGVzcycsICcuLi8uLi9zaGFyZWQvZm9ybS1maWVsZC5tYW5hZ2VyLmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRHJvcGRvd25TZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBGb3JtRmllbGRNYW5hZ2VyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qIGZsYWcgaWYgbXVsdGlwbGUgc2VsZWN0aW9uIGlzIGFsbG93ZWQgKi9cbiAgQElucHV0KCkgc2VsZWN0TXVsdGlwbGU6IGJvb2xlYW47XG5cblxuICBAVmlld0NoaWxkKCdpbnB1dCcpXG4gIHB1YmxpYyBpbnB1dDogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkKE92ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgcHVibGljIGRyb3Bkb3duOiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihPcHRpb25Db21wb25lbnQpXG4gIHB1YmxpYyBvcHRpb25zOiBRdWVyeUxpc3Q8T3B0aW9uQ29tcG9uZW50PjtcblxuXG4gIC8qIHNpbmdsZSBzZWxlY3Rpb246IHNlbGVjdGVkIE9wdGlvbkNvbXBvbmVudCAqL1xuICBwdWJsaWMgc2luZ2xlX3NlbGVjdGVkT3B0aW9uOiBPcHRpb25Db21wb25lbnQ7XG5cbiAgLyogc2luZ2xlIHNlbGVjdGlvbjogc2VsZWN0ZWQgb3B0aW9uIHZhbHVlICovXG4gIHB1YmxpYyBzaW5nbGVfc2VsZWN0ZWQ6IGFueTtcblxuXG4gIC8qIG11bHRpcGxlIHNlbGVjdGlvbjogbGlzdCBvZiBzZWxlY3RlZCBPcHRpb25Db21wb25lbnQgKi9cbiAgcHVibGljIG11bHRpcGxlX3NlbGVjdGVkT3B0aW9uczogT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcblxuICAvKiBtdWx0aXBsZSBzZWxlY3Rpb246IGxpc3Qgb2Ygc2VsZWN0ZWQgb3B0aW9uIHZhbHVlcyAqL1xuICBwdWJsaWMgbXVsdGlwbGVfc2VsZWN0ZWQ6IGFueVtdID0gW107XG5cbiAgLyoga2V5IG1hbmFnZXIgKi9cbiAgcHJpdmF0ZSBrZXlNYW5hZ2VyOiBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxPcHRpb25Db21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Ryb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKF9yZW5kZXJlcik7XG4gICAgdGhpcy5fZHJvcGRvd25TZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVZhbHVlT25NdWx0aXBsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVZhbHVlT25TaW5nbGUoKTtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyKHRoaXMub3B0aW9ucylcbiAgICAgICAgICAud2l0aEhvcml6b250YWxPcmllbnRhdGlvbignbHRyJylcbiAgICAgICAgICAud2l0aFZlcnRpY2FsT3JpZW50YXRpb24oKVxuICAgICAgICAgIC53aXRoV3JhcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxpemVWYWx1ZU9uTXVsdGlwbGUoKSB7XG4gICAgdGhpcy5vcHRpb25zLnRvQXJyYXkoKS5mb3JFYWNoKChvOiBPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlX3NlbGVjdGVkLmluY2x1ZGVzKG8udmFsdWUpKSB7XG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5pbmNsdWRlcyhvLnZhbHVlKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVfc2VsZWN0ZWQucHVzaChvLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMuZmluZCgobzE6IE9wdGlvbkNvbXBvbmVudCkgPT4gbzEudmFsdWUgPT09IG8udmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMucHVzaChvKTtcbiAgICAgICAgICBvLmNoZWNrYm94TW9kZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID9cbiAgICAgIEFycmF5LmZyb20odGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMsIChvOiBPcHRpb25Db21wb25lbnQpID0+IG8udGV4dCkuam9pbignLCAnKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxpemVWYWx1ZU9uU2luZ2xlKCkge1xuICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkT3B0aW9uID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKS5maW5kKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuc2luZ2xlX3NlbGVjdGVkKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gIH1cblxuICAvKipcbiAgICogIG92ZXJyaWRlOiBpbmhlcml0ZWQgd3JpdGVWYWx1ZVxuICAgKiAgY2FsbGVkIG9uIGZvcm0gY29udHJvbCBzZXRWYWx1ZSBhbmQgZm9ybSBpbml0aWFsaXplXG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RNdWx0aXBsZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZCA9IFsuLi5vYmpdO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVWYWx1ZU9uTXVsdGlwbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkID0gb2JqO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5faW5pdGlhbGl6ZVZhbHVlT25TaW5nbGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNob3cgZHJvcGRvd24gYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgc2hvd0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd24uc2hvdygpO1xuICAgIGlmICghdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBoaWdobGlnaHRlZCBpdGVtIG9ubHkgZm9yIHNpbmdsZSBzZWxlY3Rpb25cbiAgICAvLyAtLSBoaWdobGlnaHQgc2VsZWN0ZWQgaXRlbSBvciBmaXJzdCBpdGVtXG4gICAgaWYgKCF0aGlzLnNlbGVjdE11bHRpcGxlKSB7XG4gICAgICBpZiAodGhpcy5zaW5nbGVfc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0odGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIGRyb3Bkb3duIGFjdGlvblxuICAgKi9cbiAgcHVibGljIGhpZGVEcm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGFjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBjaGV2cm9uIGljb24gKG9uIHRoZSByaWdodClcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25Ecm9wTWVudUljb25DbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IG9wdGlvblxuICAgKiBAcGFyYW0gb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIC8vIGFscmVhZHkgc2VsZWN0ZWQgLS0gdW5zZWxlY3QgaXRlbVxuICAgICAgaWYgKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLmZpbmQoKG86IE9wdGlvbkNvbXBvbmVudCkgPT4gby52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKSkge1xuICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5maWx0ZXIoKG86IE9wdGlvbkNvbXBvbmVudCkgPT4gby52YWx1ZSAhPT0gb3B0aW9uLnZhbHVlKV07XG4gICAgICAgIHRoaXMubXVsdGlwbGVfc2VsZWN0ZWQgPSBbLi4udGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5maWx0ZXIoKHM6IHN0cmluZykgPT4gcyAhPT0gb3B0aW9uLnZhbHVlKV07XG4gICAgICAgIG9wdGlvbi5jaGVja2JveE1vZGVsID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3QgeWV0IHNlbGVjdGVkIC0tIHNlbGVjdCBpdGVtXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICBvcHRpb24uY2hlY2tib3hNb2RlbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggP1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLCAobzogT3B0aW9uQ29tcG9uZW50KSA9PiBvLnRleHQpLmpvaW4oJywgJylcbiAgICAgICAgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0ob3B0aW9uKTtcbiAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkID0gb3B0aW9uLnZhbHVlO1xuICAgICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0TXVsdGlwbGUgPyB0aGlzLm11bHRpcGxlX3NlbGVjdGVkIDogb3B0aW9uLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXlkb3duIGV2ZW50IChhcHBsaWVzIG9ubHkgdG8gc2luZ2xlIHNlbGVjdGlvbiBpdGVtcylcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoWydFbnRlcicsICcgJywgJ0Fycm93RG93bicsICdEb3duJywgJ0Fycm93VXAnLCAnVXAnXS5pbmRleE9mKGV2ZW50LmtleSkgPiAtMSkge1xuICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkT3B0aW9uID0gdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFsnQXJyb3dVcCcsICdVcCcsICdBcnJvd0Rvd24nLCAnRG93bicsICdBcnJvd1JpZ2h0JywgJ1JpZ2h0JywgJ0Fycm93TGVmdCcsICdMZWZ0J11cbiAgICAgIC5pbmRleE9mKGV2ZW50LmtleSkgPiAtMSkge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdQYWdlVXAnIHx8IGV2ZW50LmtleSA9PT0gJ1BhZ2VEb3duJyB8fCBldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5zaG93aW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=