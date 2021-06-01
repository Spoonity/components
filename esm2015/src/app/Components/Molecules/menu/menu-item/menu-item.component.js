import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { MenuService } from '../menu.service';
export class MenuItemComponent {
    constructor(_menuService) {
        this._menuService = _menuService;
        /* bind class.active */
        this.active = false;
        this.menu = this._menuService.getMenu();
    }
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.checkboxModel = !this.checkboxModel;
        this.menu.selectMenuItem(this);
    }
    ngOnInit() {
        // verify input
        if (this.menu.multiple) {
            if (this.itemId == null) {
                throw new Error('spt-menu-item: missing attribute: itemId for multiple selection');
            }
        }
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
    /**
     * select menu item
     */
    selectItem() {
        this.menu.selectMenuItem(this);
    }
    /**
     * if multiple items can be selected
     */
    isMultiple() {
        return this.menu.multiple;
    }
}
MenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-menu-item',
                template: "<div class=\"menu-item\" [ngClass]=\"{'multiple-menu-item': isMultiple(), 'single-menu-item': !isMultiple(), 'selected-item': isMultiple() && checkboxModel}\">\n\n    <!---- start icon ---->\n    <div class=\"menu-icon\" *ngIf=\"!!startIcon\">\n        <svg-icon *ngIf=\"!!startIcon\" nz-icon [name]=\"startIcon\" [svgStyle]=\"{ 'width.px':20, 'height.px':20 }\"></svg-icon>\n    </div>\n\n    <!---- left checkbox (if there is no start icon) ---->\n    <div *ngIf=\"isMultiple() && !startIcon\">\n        <label nz-checkbox nzValue=\"{{checkboxModel}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n\n    <!---- label ---->\n    <div [ngClass]=\"{'label': !!startIcon || isMultiple()}\"><ng-content></ng-content></div>\n\n    <!---- right checkbox (if there is a start icon) ---->\n    <div *ngIf=\"isMultiple() && !!startIcon\" class=\"right-checkbox\">\n        <label nz-checkbox nzValue=\"{{checkboxModel}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n</div>\n",
                styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}"]
            },] }
];
MenuItemComponent.ctorParameters = () => [
    { type: MenuService }
];
MenuItemComponent.propDecorators = {
    itemId: [{ type: Input }],
    startIcon: [{ type: Input }],
    preventClose: [{ type: Input }],
    checkboxModel: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFnQixXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTVDLE1BQU0sT0FBTyxpQkFBaUI7SUE2QjVCLFlBQ1UsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFqQm5DLHVCQUF1QjtRQUVoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBaUJwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWJELDBCQUEwQjtJQUVuQixPQUFPLENBQUMsS0FBYztRQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFRRCxRQUFRO1FBQ04sZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsbWlDQUF5Qzs7YUFFMUM7OztZQVBPLFdBQVc7OztxQkFVaEIsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7NEJBR0wsS0FBSztxQkFHTCxXQUFXLFNBQUMsY0FBYztzQkFPMUIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4uL21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7TWVudVNlcnZpY2V9IGZyb20gJy4uL21lbnUuc2VydmljZSc7XG5pbXBvcnQge2Vycm9yfSBmcm9tICd1dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LWl0ZW0uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qIGl0ZW0gaWQgKi9cbiAgQElucHV0KCkgcHVibGljIGl0ZW1JZDogc3RyaW5nO1xuXG4gIC8qIHN0YXJ0IGljb24gKi9cbiAgQElucHV0KCkgcHVibGljIHN0YXJ0SWNvbjogc3RyaW5nO1xuXG4gIC8qIHByZXZlbnQgY2xvc2luZyB0aGUgbWVudSB3aGVuIHRoaXMgaXRlbSBpcyBjbGlja2VkICovXG4gIEBJbnB1dCgpIHB1YmxpYyBwcmV2ZW50Q2xvc2U6IGJvb2xlYW47XG5cbiAgLyogY2hlY2tib3ggbW9kZWwgKGZvciBtdWx0aXBsZSBzZWxlY3Rpb25zKSAqL1xuICBASW5wdXQoKSBwdWJsaWMgY2hlY2tib3hNb2RlbDogYm9vbGVhbjtcblxuICAvKiBiaW5kIGNsYXNzLmFjdGl2ZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIHB1YmxpYyBhY3RpdmUgPSBmYWxzZTtcblxuICAvKiBwYXJlbnQgY29tcG9uZW50IHJlZmVyZW5jZSAqL1xuICBwcml2YXRlIG1lbnU6IE1lbnVDb21wb25lbnQ7XG5cbiAgLyogY2xpY2sgZXZlbnQgbGlzdGVuZXIgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogVUlFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jaGVja2JveE1vZGVsID0gIXRoaXMuY2hlY2tib3hNb2RlbDtcbiAgICB0aGlzLm1lbnUuc2VsZWN0TWVudUl0ZW0odGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tZW51U2VydmljZTogTWVudVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5tZW51ID0gdGhpcy5fbWVudVNlcnZpY2UuZ2V0TWVudSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdmVyaWZ5IGlucHV0XG4gICAgaWYgKHRoaXMubWVudS5tdWx0aXBsZSkge1xuICAgICAgaWYgKHRoaXMuaXRlbUlkID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzcHQtbWVudS1pdGVtOiBtaXNzaW5nIGF0dHJpYnV0ZTogaXRlbUlkIGZvciBtdWx0aXBsZSBzZWxlY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2V0IGFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBpbmFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCBtZW51IGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RJdGVtKCkge1xuICAgIHRoaXMubWVudS5zZWxlY3RNZW51SXRlbSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpZiBtdWx0aXBsZSBpdGVtcyBjYW4gYmUgc2VsZWN0ZWRcbiAgICovXG4gIHB1YmxpYyBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbnUubXVsdGlwbGU7XG4gIH1cbn1cbiJdfQ==