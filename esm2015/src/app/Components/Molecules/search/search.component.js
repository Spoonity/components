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
        /* filter action */
        this.filter = new EventEmitter();
        /* item selected action */
        this.itemSelected = new EventEmitter();
        /* item removed action */
        this.itemRemoved = new EventEmitter();
        /* search overlay closed */
        this.overlayStatusChange = new EventEmitter();
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
            this.filterAction();
        }
        else {
            this.hideDropdown();
        }
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
        this.overlayStatusChange.emit(true);
    }
    /**
     * hide options action
     */
    hideDropdown() {
        this.search.hide();
        this.overlayStatusChange.emit(false);
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
     */
    onClose(selection) {
        this.itemRemoved.emit(selection);
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-search',
                template: "<div #searchReference class=\"spt-input-container search-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n    <div class=\"search-wrapper {{size}} \" [ngClass]=\"{'item-focus': focus}\">\n        <!-- search icon -->\n        <div class=\"search-icon left-icon\">\n            <svg-icon name=\"search\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n\n        <!-- selected items (chips) -->\n        <div class=\"selected-items spt-spacing-x--1\" *ngIf=\"selectedItems.length\">\n            <div class=\"selected-item\" *ngFor=\"let s of selectedItems\">\n                <spt-chip [text]=\"s.text\"\n                         [icon]=\"s.icon\" mode=\"closeable\"\n                         [color]=\"s.color\"\n                         (onCloseEvent)=\"onClose(s)\"></spt-chip>\n            </div>\n        </div>\n        <input #input *ngIf=\"maximumSelection ? selectedItems.length < maximumSelection : true\"\n               (focus)=\"focusAction()\" (blur)=\"blurAction()\"\n               [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'disabled-state': isDisabled}\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"changeAction($event)\"\n               (keydown)=\"onKeyDown($event)\"\n               placeholder=\"{{placeholder}}\" autocomplete=\"off\" [readonly]=\"readonly\">\n    </div>\n\n    <spt-overlay-template [reference]=\"searchReference\" #searchComp>\n        <div class=\"search-options-container spt-elevation--5\">\n            <ng-content select=\"sp-search-option\"></ng-content>\n            <ng-content select=\"div.search-override\"></ng-content>\n            <ng-content select=\"sp-search-option\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    SearchService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchComponent),
                        multi: true
                    }
                ],
                styles: [".spt-input-container input::-moz-placeholder{visibility:visible!important}.spt-input-container input::placeholder{visibility:visible!important}.search-options-container{width:100%;max-height:200px;overflow:auto}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label,.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:12px 10px}.spt-input-container input.large+label,.spt-input-container nz-date-picker.large+label{top:12px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:8px 10px}.spt-input-container input.medium+label,.spt-input-container nz-date-picker.medium+label{top:8px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:6px 10px}.spt-input-container input.small+label,.spt-input-container nz-date-picker.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label,.spt-input-container nz-date-picker.has-left-icon+label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label,.spt-input-container input.item-focus+label,.spt-input-container input:focus+label,.spt-input-container nz-date-picker.ant-picker-focused+label,.spt-input-container nz-date-picker.item-focus+label,.spt-input-container nz-date-picker:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input[disabled],.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label,.spt-input-container nz-date-picker.dirty:hover+label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label,.spt-input-container input.dirty:focus+label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label,.spt-input-container nz-date-picker.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label,.spt-input-container nz-date-picker+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path,.spt-input-container .right-icon svg path{fill:#706f6e}.spt-input-container .error-icon svg path{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label,.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover,.search-wrapper nz-date-picker,.search-wrapper nz-date-picker:focus,.search-wrapper nz-date-picker:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
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
    filter: [{ type: Output }],
    itemSelected: [{ type: Output }],
    itemRemoved: [{ type: Output }],
    overlayStatusChange: [{ type: Output }],
    search: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [SearchOptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxlQUFlLEVBQzFCLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDSyxTQUFTLEVBQ3BCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFnQjlFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQTBDbkQsWUFDVSxjQUE2QixFQUNyQyxTQUFvQjtRQUVwQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFIVCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQXRDdkMsNEJBQTRCO1FBQ25CLGtCQUFhLEdBQWdFLEVBQUUsQ0FBQztRQVF6RixtQkFBbUI7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsMEJBQTBCO1FBQ2hCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEUseUJBQXlCO1FBQ2YsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVuRSwyQkFBMkI7UUFDakIsd0JBQW1CLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUF1QmpGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxlQUFlO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLE1BQU07UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxTQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLFNBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBbkpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNHVEQUFzQztnQkFFdEMsU0FBUyxFQUFFO29CQUNULGFBQWE7b0JBQ2I7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7WUFqQk8sYUFBYTtZQUxSLFNBQVM7OzswQkEwQm5CLEtBQUs7NEJBR0wsS0FBSzsrQkFHTCxLQUFLOzRCQUdMLEtBQUs7cUJBR0wsTUFBTTsyQkFHTixNQUFNOzBCQUdOLE1BQU07a0NBR04sTUFBTTtxQkFHTixTQUFTLFNBQUMsd0JBQXdCO3NCQUlsQyxlQUFlLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LCBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlcic7XG5pbXBvcnQge092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2VhcmNoT3B0aW9uQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC1vcHRpb24vc2VhcmNoLW9wdGlvbi5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5sZXNzJywgJy4uLy4uL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICBTZWFyY2hTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VhcmNoQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIEZvcm1GaWVsZE1hbmFnZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAvKiBQbGFjZWhvbGRlciB0ZXh0ICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyO1xuXG4gIC8qIHNlbGVjdGVkIGl0ZW1zIChjaGlwcykgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtczoge2lkOiBzdHJpbmc7IGljb24/OiBzdHJpbmc7IGNvbG9yPzogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10gPSBbXTtcblxuICAvKiBvcHRpb25hbCBtYXhpbXVtIHNlbGVjdGVkIGl0ZW1zICovXG4gIEBJbnB1dCgpIG1heGltdW1TZWxlY3Rpb24/OiBudW1iZXI7XG5cbiAgLyogb3B0aW9uYWw6IGlmIHRoZSBvdmVybGF5IHNob3VsZCBsYXVuY2ggd2hlbiB0aGUgaW5wdXQgaXMgaW4gZm9jdXMgKi9cbiAgQElucHV0KCkgbGF1bmNoT25Gb2N1cz86IGJvb2xlYW47XG5cbiAgLyogZmlsdGVyIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiBpdGVtIHNlbGVjdGVkIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIGl0ZW0gcmVtb3ZlZCBhY3Rpb24gKi9cbiAgQE91dHB1dCgpIGl0ZW1SZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlYXJjaCBvdmVybGF5IGNsb3NlZCAqL1xuICBAT3V0cHV0KCkgb3ZlcmxheVN0YXR1c0NoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qIG92ZXJsYXkgdGVtcGxhdGUgY29tcG9uZW50ICovXG4gIEBWaWV3Q2hpbGQoT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgc2VhcmNoOiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgLyogY2hpbGRyZW4gY29tcG9uZW50IGZvciBvcHRpb25zICovXG4gIEBDb250ZW50Q2hpbGRyZW4oU2VhcmNoT3B0aW9uQ29tcG9uZW50KVxuICBwdWJsaWMgb3B0aW9uczogUXVlcnlMaXN0PFNlYXJjaE9wdGlvbkNvbXBvbmVudD47XG5cblxuICAvKiBzZWxlY3RlZCBvcHRpb24gKi9cbiAgcHVibGljIHNlbGVjdGVkOiBTZWFyY2hPcHRpb25Db21wb25lbnQ7XG5cbiAgLyogZm9jdXMgc3RhdGUgKi9cbiAgZm9jdXM6IGJvb2xlYW47XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKF9yZW5kZXJlcik7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZTogb24gY2hhbmdlIGFjdGlvblxuICAgKi9cbiAgY2hhbmdlQWN0aW9uKCRldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UoJGV2ZW50KTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghdGhpcy5zZWFyY2guc2hvd2luZykge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJBY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZm9jdXMgYWN0aW9uXG4gICAqL1xuICBmb2N1c0FjdGlvbigpIHtcbiAgICBpZiAodGhpcy5sYXVuY2hPbkZvY3VzKSB7XG4gICAgICB0aGlzLnNlYXJjaC5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGJsdXIgYWN0aW9uXG4gICAqL1xuICBibHVyQWN0aW9uKCkge1xuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzaG93IG9wdGlvbnMgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgc2hvd0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoLnNob3coKTtcbiAgICB0aGlzLm92ZXJsYXlTdGF0dXNDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIG9wdGlvbnMgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZURyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoLmhpZGUoKTtcbiAgICB0aGlzLm92ZXJsYXlTdGF0dXNDaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICoga2V5ZG93biBldmVudFxuICAgKi9cbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaC5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIHNlbGVjdCBpdGVtXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0KHNlbGVjdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChzZWxlY3Rpb24pO1xuICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogb24gZmlsdGVyIGFjdGlvblxuICAgKi9cbiAgcHVibGljIGZpbHRlckFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlci5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogb24gY2xvc2UgaXRlbVxuICAgKi9cbiAgcHVibGljIG9uQ2xvc2Uoc2VsZWN0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1SZW1vdmVkLmVtaXQoc2VsZWN0aW9uKTtcbiAgfVxufVxuIl19