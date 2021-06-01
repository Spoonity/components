import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { SearchService } from '../search.service';
export class SearchOptionComponent {
    constructor(_searchService) {
        this._searchService = _searchService;
        /* bind class.active */
        this.active = false;
        this.search = this._searchService.getSearch();
    }
    /* bind class.selected */
    get selected() {
        return this.search.selected === this;
    }
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.search.select(this.value);
    }
    ngOnInit() {
    }
    /**
     * set active status
     */
    setActiveStyles() {
        this.active = true;
    }
    /**
     * set inactive status
     */
    setInactiveStyles() {
        this.active = false;
    }
}
SearchOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-search-option',
                template: "<div class=\"search-option-container\">\n    <ng-content></ng-content>\n</div>\n",
                styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.search-option-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3}}"]
            },] }
];
SearchOptionComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchOptionComponent.propDecorators = {
    value: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL3NlYXJjaC9zZWFyY2gtb3B0aW9uL3NlYXJjaC1vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBT2hELE1BQU0sT0FBTyxxQkFBcUI7SUF3QmhDLFlBQ1UsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFidkMsdUJBQXVCO1FBRWhCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFhcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUF0QkQseUJBQXlCO0lBQ3pCLElBQ1csUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBTUQsMEJBQTBCO0lBRW5CLE9BQU8sQ0FBQyxLQUFjO1FBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFRRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw0RkFBNkM7O2FBRTlDOzs7WUFOTyxhQUFhOzs7b0JBU2xCLEtBQUs7dUJBS0wsV0FBVyxTQUFDLGdCQUFnQjtxQkFNNUIsV0FBVyxTQUFDLGNBQWM7c0JBSTFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gJy4uL3NlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNlYXJjaC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1vcHRpb24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlO1xuXG4gIHByaXZhdGUgc2VhcmNoOiBTZWFyY2hDb21wb25lbnQ7XG5cbiAgLyogYmluZCBjbGFzcy5zZWxlY3RlZCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgcHVibGljIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2guc2VsZWN0ZWQgPT09IHRoaXM7XG4gIH1cblxuICAvKiBiaW5kIGNsYXNzLmFjdGl2ZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBhY3RpdmUgPSBmYWxzZTtcblxuICAvKiBjbGljayBldmVudCBsaXN0ZW5lciAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBVSUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNlYXJjaC5zZWxlY3QodGhpcy52YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zZWFyY2hTZXJ2aWNlOiBTZWFyY2hTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5fc2VhcmNoU2VydmljZS5nZXRTZWFyY2goKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBhY3RpdmUgc3RhdHVzXG4gICAqL1xuICBwdWJsaWMgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgaW5hY3RpdmUgc3RhdHVzXG4gICAqL1xuICBwdWJsaWMgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuIl19