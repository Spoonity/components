import { Component, ContentChildren, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { SearchService } from './search.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SearchOptionComponent } from './search-option/search-option.component';
export class SearchComponent extends FormFieldManager {
    constructor(_searchService) {
        super();
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
                template: "<div #searchReference class=\"spt-input-container search-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n    <div class=\"search-wrapper {{size}} \" [ngClass]=\"{'item-focus': focus}\">\n        <!-- search icon -->\n        <div class=\"search-icon left-icon\">\n            <svg-icon name=\"search\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n\n        <!-- selected items (chips) -->\n        <div class=\"selected-items spt-spacing-x--1\" *ngIf=\"selectedItems.length\">\n            <div class=\"selected-item\" *ngFor=\"let s of selectedItems\">\n                <spt-chip [text]=\"s.text\"\n                         [icon]=\"s.icon\" mode=\"closeable\"\n                         (onCloseEvent)=\"onClose(s)\"></spt-chip>\n            </div>\n        </div>\n        <input #input *ngIf=\"maximumSelection ? selectedItems.length <= maximumSelection : true\"\n               (focus)=\"focus=true\" (blur)=\"focus=false\"\n               [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'disabled-state': isDisabled}\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"changeAction($event)\"\n               (keydown)=\"onKeyDown($event)\"\n               placeholder=\"{{placeholder}}\" autocomplete=\"off\">\n    </div>\n\n    <spt-overlay-template [reference]=\"searchReference\" #searchComp>\n        <div class=\"search-options-container spt-elevation--5\">\n            <ng-content select=\"spt-search-option\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    SearchService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchComponent),
                        multi: true
                    }
                ],
                styles: [".spt-input-container input::-moz-placeholder{visibility:visible!important}.spt-input-container input::placeholder{visibility:visible!important}.search-options-container{width:100%;max-height:200px;overflow:auto}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input:focus::placeholder{visibility:visible;opacity:1}.spt-input-container{margin:0;position:relative}.spt-input-container input{box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large{padding:12px 10px}.spt-input-container input.large+label{top:12px}.spt-input-container input.medium{padding:8px 10px}.spt-input-container input.medium+label{top:8px}.spt-input-container input.small{padding:6px 10px}.spt-input-container input.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon{padding-right:45px}.spt-input-container input.error{border:1px solid #ef5350!important}.spt-input-container input.error~label{color:#ef5350!important}.spt-input-container input.error:focus,.spt-input-container input.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label{left:45px}.spt-input-container input:hover{border:1px solid #000!important}.spt-input-container input.item-focus,.spt-input-container input:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.item-focus+label,.spt-input-container input:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input[disabled]~label{color:#b1b1b1!important}.spt-input-container input[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label{color:#000}.spt-input-container input.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path,.spt-input-container .right-icon svg path{fill:#706f6e}.spt-input-container .error-icon svg path{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}"]
            },] }
];
SearchComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    selectedItems: [{ type: Input }],
    maximumSelection: [{ type: Input }],
    filter: [{ type: Output }],
    itemSelected: [{ type: Output }],
    itemRemoved: [{ type: Output }],
    search: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [SearchOptionComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxlQUFlLEVBQzFCLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDbEcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBZ0I5RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7SUFvQ25ELFlBQ1UsY0FBNkI7UUFFckMsS0FBSyxFQUFFLENBQUM7UUFGQSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWhDdkMsNEJBQTRCO1FBQ25CLGtCQUFhLEdBQStDLEVBQUUsQ0FBQztRQUt4RSxtQkFBbUI7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsMEJBQTBCO1FBQ2hCLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFcEUseUJBQXlCO1FBQ2YsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXNCakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxTQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLFNBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMmhEQUFzQztnQkFFdEMsU0FBUyxFQUFFO29CQUNULGFBQWE7b0JBQ2I7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzlDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7WUFqQk8sYUFBYTs7OzBCQXFCbEIsS0FBSzs0QkFHTCxLQUFLOytCQUdMLEtBQUs7cUJBR0wsTUFBTTsyQkFHTixNQUFNOzBCQUdOLE1BQU07cUJBR04sU0FBUyxTQUFDLHdCQUF3QjtzQkFJbEMsZUFBZSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtRmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvZm9ybS1maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7T3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvb3ZlcmxheS10ZW1wbGF0ZS9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTZWFyY2hPcHRpb25Db21wb25lbnR9IGZyb20gJy4vc2VhcmNoLW9wdGlvbi9zZWFyY2gtb3B0aW9uLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2guY29tcG9uZW50Lmxlc3MnLCAnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlci5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIFNlYXJjaFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWFyY2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgRm9ybUZpZWxkTWFuYWdlciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIC8qIFBsYWNlaG9sZGVyIHRleHQgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI7XG5cbiAgLyogc2VsZWN0ZWQgaXRlbXMgKGNoaXBzKSAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zOiB7aWQ6IHN0cmluZzsgaWNvbjogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10gPSBbXTtcblxuICAvKiBvcHRpb25hbCBtYXhpbXVtIHNlbGVjdGVkIGl0ZW1zICovXG4gIEBJbnB1dCgpIG1heGltdW1TZWxlY3Rpb24/OiBudW1iZXI7XG5cbiAgLyogZmlsdGVyIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiBpdGVtIHNlbGVjdGVkIGFjdGlvbiAqL1xuICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIGl0ZW0gcmVtb3ZlZCBhY3Rpb24gKi9cbiAgQE91dHB1dCgpIGl0ZW1SZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIG92ZXJsYXkgdGVtcGxhdGUgY29tcG9uZW50ICovXG4gIEBWaWV3Q2hpbGQoT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgc2VhcmNoOiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgLyogY2hpbGRyZW4gY29tcG9uZW50IGZvciBvcHRpb25zICovXG4gIEBDb250ZW50Q2hpbGRyZW4oU2VhcmNoT3B0aW9uQ29tcG9uZW50KVxuICBwdWJsaWMgb3B0aW9uczogUXVlcnlMaXN0PFNlYXJjaE9wdGlvbkNvbXBvbmVudD47XG5cblxuICAvKiBzZWxlY3RlZCBvcHRpb24gKi9cbiAgcHVibGljIHNlbGVjdGVkOiBTZWFyY2hPcHRpb25Db21wb25lbnQ7XG5cbiAgLyogZm9jdXMgc3RhdGUgKi9cbiAgZm9jdXM6IGJvb2xlYW47XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZTogb24gY2hhbmdlIGFjdGlvblxuICAgKi9cbiAgY2hhbmdlQWN0aW9uKCRldmVudCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UoJGV2ZW50KTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcblxuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghdGhpcy5zZWFyY2guc2hvd2luZykge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bigpO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJBY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2hvdyBvcHRpb25zIGFjdGlvblxuICAgKi9cbiAgcHVibGljIHNob3dEcm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaC5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBkcm9wZG93biBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBoaWRlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2guaGlkZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGtleWRvd24gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2guc2hvd2luZykge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBzZWxlY3QgaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdChzZWxlY3Rpb246IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uKTtcbiAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGZpbHRlciBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXJBY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIuZW1pdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGNsb3NlIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBvbkNsb3NlKHNlbGVjdGlvbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtUmVtb3ZlZC5lbWl0KHNlbGVjdGlvbik7XG4gIH1cbn1cbiJdfQ==