import { Component, ContentChildren, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { OptionComponent } from './option/option.component';
import { DropdownService } from './dropdown.service';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
export class DropdownComponent extends FormFieldManager {
    constructor(_dropdownService) {
        super();
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
                this.options.toArray().forEach((o) => {
                    if (this.multiple_selected.includes(o.value)) {
                        this.selectOption(o);
                    }
                });
                this.value = this.multiple_selectedOptions.length ?
                    Array.from(this.multiple_selectedOptions, (o) => o.text).join(', ')
                    : '';
            }
            else {
                this.single_selectedOption = this.options.toArray().find(option => option.value === this.single_selected);
                this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
                this.keyManager = new ActiveDescendantKeyManager(this.options)
                    .withHorizontalOrientation('ltr')
                    .withVerticalOrientation()
                    .withWrap();
            }
            this.checkDirty();
        }, 100);
    }
    /**
     *  override: inherited writeValue
     */
    writeValue(obj) {
        if (obj !== undefined) {
            if (this.selectMultiple) {
                if (Array.isArray(obj)) {
                    this.multiple_selected = obj;
                }
            }
            else {
                this.single_selected = obj;
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
                template: "<div #dropReference class=\"spt-input-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input #input [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'disabled-state': isDisabled}\"\n           (click)=\"showDropdown()\"\n           [(ngModel)]=\"value\"\n           (ngModelChange)=\"changeAction($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           class=\"{{size}} has-right-icon\"\n           [attr.disabled]=\"isDisabled\" readonly autocomplete=\"off\">\n\n    <!-- label -->\n    <label class=\"text-field-label label\">{{ label || placeholder }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- right icon (arrow) -->\n    <div *ngIf=\"!error\" class=\"text-field-icon right-icon\" (click)=\"onDropMenuIconClick($event)\">\n        <svg-icon name=\"expand-more\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </div>\n\n    <spt-overlay-template [reference]=\"dropReference\" #dropdownComp>\n        <div class=\"dropdown-options-container spt-elevation--5\">\n            <ng-content select=\"spt-option\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    DropdownService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownComponent),
                        multi: true
                    }
                ],
                styles: [".dropdown-options-container{width:100%;max-height:200px;overflow:auto}.spt-input-container input:focus~.right-icon,.spt-input-container input~.right-icon{transition:all .2s ease,background-color .2s ease-in}.spt-input-container input:focus~.right-icon{transform:rotate(180deg) translateY(50%)}.spt-input-container input:focus~.right-icon svg path{fill:#f90}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input:focus::placeholder{visibility:visible;opacity:1}.spt-input-container{margin:0;position:relative}.spt-input-container input{box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large{padding:12px 10px}.spt-input-container input.large+label{top:12px}.spt-input-container input.medium{padding:8px 10px}.spt-input-container input.medium+label{top:8px}.spt-input-container input.small{padding:6px 10px}.spt-input-container input.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon{padding-right:45px}.spt-input-container input.error{border:1px solid #ef5350!important}.spt-input-container input.error~label{color:#ef5350!important}.spt-input-container input.error:focus,.spt-input-container input.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label{left:45px}.spt-input-container input:hover{border:1px solid #000!important}.spt-input-container input.item-focus,.spt-input-container input:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.item-focus+label,.spt-input-container input:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input[disabled]~label{color:#b1b1b1!important}.spt-input-container input[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label{color:#000}.spt-input-container input.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path,.spt-input-container .right-icon svg path{fill:#706f6e}.spt-input-container .error-icon svg path{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: DropdownService }
];
DropdownComponent.propDecorators = {
    selectMultiple: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    dropdown: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [OptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBRWYsVUFBVSxFQUFFLEtBQUssRUFFakIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFlN0QsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQStCckQsWUFDVSxnQkFBaUM7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFGQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBVjNDLDBEQUEwRDtRQUNuRCw2QkFBd0IsR0FBc0IsRUFBRSxDQUFDO1FBRXhELHdEQUF3RDtRQUNqRCxzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFTbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR00sZUFBZTtRQUNwQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFD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QUFPLEVBQUU7Z0JBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7O1lBOU1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsa3VEQUF3QztnQkFFeEMsU0FBUyxFQUFFO29CQUNULGVBQWU7b0JBQ2Y7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzt3QkFDaEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7OztZQWZPLGVBQWU7Ozs2QkFrQnBCLEtBQUs7b0JBR0wsU0FBUyxTQUFDLE9BQU87dUJBR2pCLFNBQVMsU0FBQyx3QkFBd0I7c0JBR2xDLGVBQWUsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Rm9ybUZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlcic7XG5pbXBvcnQge092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtPcHRpb25Db21wb25lbnR9IGZyb20gJy4vb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtEcm9wZG93blNlcnZpY2V9IGZyb20gJy4vZHJvcGRvd24uc2VydmljZSc7XG5pbXBvcnQge0FjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5sZXNzJywgJy4uLy4uL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICBEcm9wZG93blNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEcm9wZG93bkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBleHRlbmRzIEZvcm1GaWVsZE1hbmFnZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLyogZmxhZyBpZiBtdWx0aXBsZSBzZWxlY3Rpb24gaXMgYWxsb3dlZCAqL1xuICBASW5wdXQoKSBzZWxlY3RNdWx0aXBsZTogYm9vbGVhbjtcblxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JylcbiAgcHVibGljIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGQoT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgZHJvcGRvd246IE92ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICBAQ29udGVudENoaWxkcmVuKE9wdGlvbkNvbXBvbmVudClcbiAgcHVibGljIG9wdGlvbnM6IFF1ZXJ5TGlzdDxPcHRpb25Db21wb25lbnQ+O1xuXG5cbiAgLyogc2luZ2xlIHNlbGVjdGlvbjogc2VsZWN0ZWQgT3B0aW9uQ29tcG9uZW50ICovXG4gIHB1YmxpYyBzaW5nbGVfc2VsZWN0ZWRPcHRpb246IE9wdGlvbkNvbXBvbmVudDtcblxuICAvKiBzaW5nbGUgc2VsZWN0aW9uOiBzZWxlY3RlZCBvcHRpb24gdmFsdWUgKi9cbiAgcHVibGljIHNpbmdsZV9zZWxlY3RlZDogYW55O1xuXG5cbiAgLyogbXVsdGlwbGUgc2VsZWN0aW9uOiBsaXN0IG9mIHNlbGVjdGVkIE9wdGlvbkNvbXBvbmVudCAqL1xuICBwdWJsaWMgbXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zOiBPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuXG4gIC8qIG11bHRpcGxlIHNlbGVjdGlvbjogbGlzdCBvZiBzZWxlY3RlZCBvcHRpb24gdmFsdWVzICovXG4gIHB1YmxpYyBtdWx0aXBsZV9zZWxlY3RlZDogYW55W10gPSBbXTtcblxuICAvKiBrZXkgbWFuYWdlciAqL1xuICBwcml2YXRlIGtleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE9wdGlvbkNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZHJvcGRvd25TZXJ2aWNlOiBEcm9wZG93blNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9kcm9wZG93blNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG9BcnJheSgpLmZvckVhY2goKG86IE9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlX3NlbGVjdGVkLmluY2x1ZGVzKG8udmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbihvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICBBcnJheS5mcm9tKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLCAobzogT3B0aW9uQ29tcG9uZW50KSA9PiBvLnRleHQpLmpvaW4oJywgJylcbiAgICAgICAgICA6ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpLmZpbmQob3B0aW9uID0+IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zaW5nbGVfc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICAgIHRoaXMua2V5TWFuYWdlciA9IG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcih0aGlzLm9wdGlvbnMpXG4gICAgICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24oJ2x0cicpXG4gICAgICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKClcbiAgICAgICAgICAud2l0aFdyYXAoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogIG92ZXJyaWRlOiBpbmhlcml0ZWQgd3JpdGVWYWx1ZVxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgIHRoaXMubXVsdGlwbGVfc2VsZWN0ZWQgPSBvYmo7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkID0gb2JqO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNob3cgZHJvcGRvd24gYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgc2hvd0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd24uc2hvdygpO1xuICAgIGlmICghdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBoaWdobGlnaHRlZCBpdGVtIG9ubHkgZm9yIHNpbmdsZSBzZWxlY3Rpb25cbiAgICAvLyAtLSBoaWdobGlnaHQgc2VsZWN0ZWQgaXRlbSBvciBmaXJzdCBpdGVtXG4gICAgaWYgKCF0aGlzLnNlbGVjdE11bHRpcGxlKSB7XG4gICAgICBpZiAodGhpcy5zaW5nbGVfc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0odGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIGRyb3Bkb3duIGFjdGlvblxuICAgKi9cbiAgcHVibGljIGhpZGVEcm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGFjdGlvbiB3aGVuIGNsaWNraW5nIHRoZSBjaGV2cm9uIGljb24gKG9uIHRoZSByaWdodClcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25Ecm9wTWVudUljb25DbGljayhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IG9wdGlvblxuICAgKiBAcGFyYW0gb3B0aW9uXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIC8vIGFscmVhZHkgc2VsZWN0ZWQgLS0gdW5zZWxlY3QgaXRlbVxuICAgICAgaWYgKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLmZpbmQoKG86IE9wdGlvbkNvbXBvbmVudCkgPT4gby52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKSkge1xuICAgICAgICB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucyA9IFsuLi50aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5maWx0ZXIoKG86IE9wdGlvbkNvbXBvbmVudCkgPT4gby52YWx1ZSAhPT0gb3B0aW9uLnZhbHVlKV07XG4gICAgICAgIHRoaXMubXVsdGlwbGVfc2VsZWN0ZWQgPSBbLi4udGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5maWx0ZXIoKHM6IHN0cmluZykgPT4gcyAhPT0gb3B0aW9uLnZhbHVlKV07XG4gICAgICAgIG9wdGlvbi5jaGVja2JveE1vZGVsID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub3QgeWV0IHNlbGVjdGVkIC0tIHNlbGVjdCBpdGVtXG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdWx0aXBsZV9zZWxlY3RlZE9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICBvcHRpb24uY2hlY2tib3hNb2RlbCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm11bHRpcGxlX3NlbGVjdGVkT3B0aW9ucy5sZW5ndGggP1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMubXVsdGlwbGVfc2VsZWN0ZWRPcHRpb25zLCAobzogT3B0aW9uQ29tcG9uZW50KSA9PiBvLnRleHQpLmpvaW4oJywgJylcbiAgICAgICAgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0ob3B0aW9uKTtcbiAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkID0gb3B0aW9uLnZhbHVlO1xuICAgICAgdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuc2VsZWN0TXVsdGlwbGUgPyB0aGlzLm11bHRpcGxlX3NlbGVjdGVkIDogb3B0aW9uLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXlkb3duIGV2ZW50IChhcHBsaWVzIG9ubHkgdG8gc2luZ2xlIHNlbGVjdGlvbiBpdGVtcylcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0TXVsdGlwbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoWydFbnRlcicsICcgJywgJ0Fycm93RG93bicsICdEb3duJywgJ0Fycm93VXAnLCAnVXAnXS5pbmRleE9mKGV2ZW50LmtleSkgPiAtMSkge1xuICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIHRoaXMuc2luZ2xlX3NlbGVjdGVkT3B0aW9uID0gdGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zaW5nbGVfc2VsZWN0ZWRPcHRpb24gPyB0aGlzLnNpbmdsZV9zZWxlY3RlZE9wdGlvbi50ZXh0IDogJyc7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFsnQXJyb3dVcCcsICdVcCcsICdBcnJvd0Rvd24nLCAnRG93bicsICdBcnJvd1JpZ2h0JywgJ1JpZ2h0JywgJ0Fycm93TGVmdCcsICdMZWZ0J11cbiAgICAgIC5pbmRleE9mKGV2ZW50LmtleSkgPiAtMSkge1xuICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdQYWdlVXAnIHx8IGV2ZW50LmtleSA9PT0gJ1BhZ2VEb3duJyB8fCBldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bi5zaG93aW5nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=