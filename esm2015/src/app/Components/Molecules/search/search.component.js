import { Component, ContentChildren, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { SearchService } from './search.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchOptionComponent } from './search-option/search-option.component';
export class SearchComponent extends FormFieldManager {
    constructor(_searchService, _renderer) {
        super(_renderer);
        this._searchService = _searchService;
        /* selected items (chips) */
        this.selectedItems = [];
        /* overlay height (default: 200) */
        this.overlayHeight = 200;
        /* filter action */
        this.filter = new EventEmitter();
        /* item selected action */
        this.itemSelected = new EventEmitter();
        /* item removed action */
        this.itemRemoved = new EventEmitter();
        /* chip clicked */
        this.chipClicked = new EventEmitter();
        this._searchService.register(this);
    }
    ngAfterViewInit() {
    }
    /**
     * override: on change action
     */
    changeAction($event) {
        this.onChange($event);
        this.checkDirty();
        if (this.value.length > 0) {
            if (!this.search.showing) {
                this.showDropdown();
            }
        }
        else {
            this.hideDropdown();
        }
        this.filterAction();
    }
    /**
     * focus action
     */
    focusAction() {
        if (this.launchOnFocus) {
            this.search.show();
        }
        this.focus = true;
    }
    /**
     * blur action
     */
    blurAction() {
        this.focus = false;
    }
    /**
     * show options action
     */
    showDropdown() {
        this.search.show();
    }
    /**
     * hide options action
     */
    hideDropdown() {
        if (!this.alwaysShowOverlay) {
            this.search.hide();
            this.focus = false;
        }
    }
    /**
     * keydown event
     */
    onKeyDown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.search.showing) {
                this.hideDropdown();
            }
        }
    }
    /**
     * on select item
     */
    select(selection) {
        this.itemSelected.emit(selection);
        this.hideDropdown();
    }
    /**
     * on filter action
     */
    filterAction() {
        this.filter.emit();
    }
    /**
     * on close item
     * @param selection
     */
    onClose(selection) {
        this.itemRemoved.emit(selection);
    }
    /**
     * chip item clicked
     * @param selection
     */
    onChipSelected(selection) {
        this.chipClicked.emit(selection);
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-search',
                template: "<div #searchReference class=\"spt-input-container search-container\" [ngClass]=\"{'disabled-container': isDisabled}\" (click)=\"launchOnFocus ? focusAction() : null\">\n    <div class=\"search-wrapper {{size}} \" [ngClass]=\"{'item-focus': focus}\"\n         [style.background-color]=\"backgroundColor\">\n        <!-- search icon -->\n        <div class=\"search-icon left-icon\" *ngIf=\"!hideSearchIcon\">\n            <svg-icon name=\"search\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n\n        <!-- selected items (chips) -->\n        <div class=\"selected-items spt-spacing-x--1\" *ngIf=\"selectedItems.length\">\n            <div class=\"selected-item\" *ngFor=\"let s of selectedItems\">\n                <spt-tooltip [title]=\"s.tooltip\">\n                    <spt-chip [text]=\"s.text\"\n                              [icon]=\"s.icon\" mode=\"closeable\"\n                              [color]=\"s.color\"\n                              (click)=\"onChipSelected(s)\"\n                              (onCloseEvent)=\"onClose(s)\"></spt-chip>\n                </spt-tooltip>\n            </div>\n        </div>\n        <input #input *ngIf=\"(maximumSelection ? selectedItems.length < maximumSelection : true) && !readonly\"\n               (focus)=\"focusAction()\" (blur)=\"blurAction()\"\n               [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'disabled-state': isDisabled}\"\n               [style.background-color]=\"backgroundColor\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"changeAction($event)\"\n               (keydown)=\"onKeyDown($event)\"\n               placeholder=\"{{placeholder}}\" autocomplete=\"off\" [readonly]=\"readonly\">\n\n        <!-- because input is hidden on readonly mode display the placeholder separately -->\n        <p class=\"font-60\" *ngIf=\"readonly\" style=\"margin: 0; cursor: default\">{{placeholder}}</p>\n    </div>\n\n    <spt-overlay-template [reference]=\"searchReference\" [alwaysOn]=\"alwaysShowOverlay\" #searchComp>\n        <div class=\"search-options-container spt-elevation--5\" [style.max-height.px]=\"overlayHeight\">\n            <ng-content select=\"spt-search-option\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n            <ng-content select=\"div.search-override\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    SearchService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchComponent),
                        multi: true
                    }
                ],
                styles: [".spt-input-container input::-moz-placeholder{visibility:visible!important;color:#909090!important}.spt-input-container input::placeholder{visibility:visible!important;color:#909090!important}.search-options-container{width:100%;overflow:auto}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
SearchComponent.ctorParameters = () => [
    { type: SearchService },
    { type: Renderer2 }
];
SearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    selectedItems: [{ type: Input }],
    maximumSelection: [{ type: Input }],
    launchOnFocus: [{ type: Input }],
    alwaysShowOverlay: [{ type: Input }],
    hideSearchIcon: [{ type: Input }],
    overlayHeight: [{ type: Input }],
    filter: [{ type: Output }],
    itemSelected: [{ type: Output }],
    itemRemoved: [{ type: Output }],
    chipClicked: [{ type: Output }],
    search: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [SearchOptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxlQUFlLEVBQzFCLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDSyxTQUFTLEVBQ3BCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUF3QjlFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQW1EbkQsWUFDVSxjQUE2QixFQUNyQyxTQUFvQjtRQUVwQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFIVCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQS9DdkMsNEJBQTRCO1FBQ25CLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQWMzQyxtQ0FBbUM7UUFDMUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFFckMsbUJBQW1CO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELDBCQUEwQjtRQUNoQixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXBFLHlCQUF5QjtRQUNmLGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFbkYsa0JBQWtCO1FBQ1IsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZ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LFNBQUMsd0JBQXdCO3NCQUlsQyxlQUFlLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LCBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlcic7XG5pbXBvcnQge092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VhcmNoT3B0aW9uQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC1vcHRpb24vc2VhcmNoLW9wdGlvbi5jb21wb25lbnQnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlYXJjaENoaXAge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC5jb21wb25lbnQubGVzcycsICcuLi8uLi9zaGFyZWQvZm9ybS1maWVsZC5tYW5hZ2VyLmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2VhcmNoU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlYXJjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBGb3JtRmllbGRNYW5hZ2VyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyogUGxhY2Vob2xkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjtcblxuICAvKiBzZWxlY3RlZCBpdGVtcyAoY2hpcHMpICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXM6IElTZWFyY2hDaGlwW10gPSBbXTtcblxuICAvKiBvcHRpb25hbCBtYXhpbXVtIHNlbGVjdGVkIGl0ZW1zICovXG4gIEBJbnB1dCgpIG1heGltdW1TZWxlY3Rpb24/OiBudW1iZXI7XG5cbiAgLyogb3B0aW9uYWw6IGlmIHRoZSBvdmVybGF5IHNob3VsZCBsYXVuY2ggd2hlbiB0aGUgaW5wdXQgaXMgaW4gZm9jdXMgKi9cbiAgQElucHV0KCkgbGF1bmNoT25Gb2N1cz86IGJvb2xlYW47XG5cbiAgLyogaWYgdGhlIG92ZXJsYXkgaXMgc2V0IHRvIFwiYWx3YXlzIHNob3dcIiAqL1xuICBASW5wdXQoKSBhbHdheXNTaG93T3ZlcmxheTogYm9vbGVhbjtcblxuICAvKiBpZiB0aGUgc2VhcmNoIGljb24gb24gdGhlIGxlZnQgc2hvdWxkIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBoaWRlU2VhcmNoSWNvbjogYm9vbGVhbjtcblxuICAvKiBvdmVybGF5IGhlaWdodCAoZGVmYXVsdDogMjAwKSAqL1xuICBASW5wdXQoKSBvdmVybGF5SGVpZ2h0OiBudW1iZXIgPSAyMDA7XG5cbiAgLyogZmlsdGVyIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiBpdGVtIHNlbGVjdGVkIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIGl0ZW0gcmVtb3ZlZCBhY3Rpb24gKi9cbiAgQE91dHB1dCgpIGl0ZW1SZW1vdmVkOiBFdmVudEVtaXR0ZXI8SVNlYXJjaENoaXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU2VhcmNoQ2hpcD4oKTtcblxuICAvKiBjaGlwIGNsaWNrZWQgKi9cbiAgQE91dHB1dCgpIGNoaXBDbGlja2VkOiBFdmVudEVtaXR0ZXI8SVNlYXJjaENoaXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxJU2VhcmNoQ2hpcD4oKTtcblxuICAvKiBvdmVybGF5IHRlbXBsYXRlIGNvbXBvbmVudCAqL1xuICBAVmlld0NoaWxkKE92ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudClcbiAgcHVibGljIHNlYXJjaDogT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIC8qIGNoaWxkcmVuIGNvbXBvbmVudCBmb3Igb3B0aW9ucyAqL1xuICBAQ29udGVudENoaWxkcmVuKFNlYXJjaE9wdGlvbkNvbXBvbmVudClcbiAgcHVibGljIG9wdGlvbnM6IFF1ZXJ5TGlzdDxTZWFyY2hPcHRpb25Db21wb25lbnQ+O1xuXG5cbiAgLyogc2VsZWN0ZWQgb3B0aW9uICovXG4gIHB1YmxpYyBzZWxlY3RlZDogU2VhcmNoT3B0aW9uQ29tcG9uZW50O1xuXG4gIC8qIGZvY3VzIHN0YXRlICovXG4gIGZvY3VzOiBib29sZWFuO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSxcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcihfcmVuZGVyZXIpO1xuICAgIHRoaXMuX3NlYXJjaFNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGU6IG9uIGNoYW5nZSBhY3Rpb25cbiAgICovXG4gIGNoYW5nZUFjdGlvbigkZXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKCRldmVudCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlckFjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIGZvY3VzIGFjdGlvblxuICAgKi9cbiAgZm9jdXNBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubGF1bmNoT25Gb2N1cykge1xuICAgICAgdGhpcy5zZWFyY2guc2hvdygpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBibHVyIGFjdGlvblxuICAgKi9cbiAgYmx1ckFjdGlvbigpIHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogc2hvdyBvcHRpb25zIGFjdGlvblxuICAgKi9cbiAgcHVibGljIHNob3dEcm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaC5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBvcHRpb25zIGFjdGlvblxuICAgKi9cbiAgcHVibGljIGhpZGVEcm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWx3YXlzU2hvd092ZXJsYXkpIHtcbiAgICAgIHRoaXMuc2VhcmNoLmhpZGUoKTtcbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICoga2V5ZG93biBldmVudFxuICAgKi9cbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaC5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIHNlbGVjdCBpdGVtXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0KHNlbGVjdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24pO1xuICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogb24gZmlsdGVyIGFjdGlvblxuICAgKi9cbiAgcHVibGljIGZpbHRlckFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogb24gY2xvc2UgaXRlbVxuICAgKiBAcGFyYW0gc2VsZWN0aW9uXG4gICAqL1xuICBwdWJsaWMgb25DbG9zZShzZWxlY3Rpb246IElTZWFyY2hDaGlwKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtUmVtb3ZlZC5lbWl0KHNlbGVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogY2hpcCBpdGVtIGNsaWNrZWRcbiAgICogQHBhcmFtIHNlbGVjdGlvblxuICAgKi9cbiAgcHVibGljIG9uQ2hpcFNlbGVjdGVkKHNlbGVjdGlvbjogSVNlYXJjaENoaXApOiB2b2lkIHtcbiAgICB0aGlzLmNoaXBDbGlja2VkLmVtaXQoc2VsZWN0aW9uKTtcbiAgfVxufVxuIl19