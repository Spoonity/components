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
    }
    /**
     * hide dropdown action
     */
    hideDropdown() {
        this.search.hide();
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
    search: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [SearchOptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxlQUFlLEVBQzFCLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDSyxTQUFTLEVBQ3BCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFnQjlFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQXVDbkQsWUFDVSxjQUE2QixFQUNyQyxTQUFvQjtRQUVwQixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFIVCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQW5DdkMsNEJBQTRCO1FBQ25CLGtCQUFhLEdBQWdFLEVBQUUsQ0FBQztRQVF6RixtQkFBbUI7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsMEJBQTBCO1FBQ2hCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEUseUJBQXlCO1FBQ2YsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXVCakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLEtBQW9CO1FBQ25DLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsU0FBYztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxTQUFjO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQTlJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDR1REFBc0M7Z0JBRXRDLFNBQVMsRUFBRTtvQkFDVCxhQUFhO29CQUNiO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjs7YUFDRjs7O1lBakJPLGFBQWE7WUFMUixTQUFTOzs7MEJBMEJuQixLQUFLOzRCQUdMLEtBQUs7K0JBR0wsS0FBSzs0QkFHTCxLQUFLO3FCQUdMLE1BQU07MkJBR04sTUFBTTswQkFHTixNQUFNO3FCQUdOLFNBQVMsU0FBQyx3QkFBd0I7c0JBSWxDLGVBQWUsU0FBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtRmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvZm9ybS1maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7T3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvb3ZlcmxheS10ZW1wbGF0ZS9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTZWFyY2hPcHRpb25Db21wb25lbnR9IGZyb20gJy4vc2VhcmNoLW9wdGlvbi9zZWFyY2gtb3B0aW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50Lmxlc3MnLCAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlci5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIFNlYXJjaFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgRm9ybUZpZWxkTWFuYWdlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIC8qIFBsYWNlaG9sZGVyIHRleHQgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI7XG5cbiAgLyogc2VsZWN0ZWQgaXRlbXMgKGNoaXBzKSAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zOiB7aWQ6IHN0cmluZzsgaWNvbj86IHN0cmluZzsgY29sb3I/OiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSA9IFtdO1xuXG4gIC8qIG9wdGlvbmFsIG1heGltdW0gc2VsZWN0ZWQgaXRlbXMgKi9cbiAgQElucHV0KCkgbWF4aW11bVNlbGVjdGlvbj86IG51bWJlcjtcblxuICAvKiBvcHRpb25hbDogaWYgdGhlIG92ZXJsYXkgc2hvdWxkIGxhdW5jaCB3aGVuIHRoZSBpbnB1dCBpcyBpbiBmb2N1cyAqL1xuICBASW5wdXQoKSBsYXVuY2hPbkZvY3VzPzogYm9vbGVhbjtcblxuICAvKiBmaWx0ZXIgYWN0aW9uICovXG4gIEBPdXRwdXQoKSBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qIGl0ZW0gc2VsZWN0ZWQgYWN0aW9uICovXG4gIEBPdXRwdXQoKSBpdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogaXRlbSByZW1vdmVkIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgaXRlbVJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogb3ZlcmxheSB0ZW1wbGF0ZSBjb21wb25lbnQgKi9cbiAgQFZpZXdDaGlsZChPdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBzZWFyY2g6IE92ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICAvKiBjaGlsZHJlbiBjb21wb25lbnQgZm9yIG9wdGlvbnMgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihTZWFyY2hPcHRpb25Db21wb25lbnQpXG4gIHB1YmxpYyBvcHRpb25zOiBRdWVyeUxpc3Q8U2VhcmNoT3B0aW9uQ29tcG9uZW50PjtcblxuXG4gIC8qIHNlbGVjdGVkIG9wdGlvbiAqL1xuICBwdWJsaWMgc2VsZWN0ZWQ6IFNlYXJjaE9wdGlvbkNvbXBvbmVudDtcblxuICAvKiBmb2N1cyBzdGF0ZSAqL1xuICBmb2N1czogYm9vbGVhbjtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIoX3JlbmRlcmVyKTtcbiAgICB0aGlzLl9zZWFyY2hTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlOiBvbiBjaGFuZ2UgYWN0aW9uXG4gICAqL1xuICBjaGFuZ2VBY3Rpb24oJGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSgkZXZlbnQpO1xuICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuXG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCF0aGlzLnNlYXJjaC5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlckFjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmb2N1cyBhY3Rpb25cbiAgICovXG4gIGZvY3VzQWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmxhdW5jaE9uRm9jdXMpIHtcbiAgICAgIHRoaXMuc2VhcmNoLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogYmx1ciBhY3Rpb25cbiAgICovXG4gIGJsdXJBY3Rpb24oKSB7XG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNob3cgb3B0aW9ucyBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBzaG93RHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2guc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhpZGUgZHJvcGRvd24gYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZURyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoLmhpZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXlkb3duIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogb24gc2VsZWN0IGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzZWxlY3Qoc2VsZWN0aW9uOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1TZWxlY3RlZC5lbWl0KHNlbGVjdGlvbik7XG4gICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBmaWx0ZXIgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBjbG9zZSBpdGVtXG4gICAqL1xuICBwdWJsaWMgb25DbG9zZShzZWxlY3Rpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaXRlbVJlbW92ZWQuZW1pdChzZWxlY3Rpb24pO1xuICB9XG59XG4iXX0=