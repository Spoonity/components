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
        this.isChecked = !this.isChecked;
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
                template: "<div class=\"menu-item\" [ngClass]=\"{'multiple-menu-item': isMultiple(), 'single-menu-item': !isMultiple(), 'selected-item': isMultiple() && isChecked && !unselectable}\">\n\n    <!---- start icon ---->\n    <div class=\"menu-icon\" *ngIf=\"!!startIcon\">\n        <svg-icon *ngIf=\"!!startIcon\" nz-icon [name]=\"startIcon\" [svgStyle]=\"{ 'width.px':20, 'height.px':20 }\"></svg-icon>\n    </div>\n\n    <!---- left checkbox (if there is no start icon) ---->\n    <div *ngIf=\"isMultiple() && !startIcon && !unselectable\">\n        <label nz-checkbox nzValue=\"{{isChecked}}\" [(ngModel)]=\"isChecked\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n\n    <!---- label ---->\n    <div [ngClass]=\"{'label': !!startIcon || isMultiple()}\"><ng-content></ng-content></div>\n\n    <!---- right checkbox (if there is a start icon) ---->\n    <div *ngIf=\"isMultiple() && !!startIcon && !unselectable\" class=\"right-checkbox\">\n        <label nz-checkbox nzValue=\"{{isChecked}}\" [(ngModel)]=\"isChecked\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n</div>\n",
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}"]
            },] }
];
MenuItemComponent.ctorParameters = () => [
    { type: MenuService }
];
MenuItemComponent.propDecorators = {
    itemId: [{ type: Input }],
    startIcon: [{ type: Input }],
    preventClose: [{ type: Input }],
    isChecked: [{ type: Input }],
    unselectable: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvbWVudS9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFnQixXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBUTVDLE1BQU0sT0FBTyxpQkFBaUI7SUFnQzVCLFlBQ1UsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFqQm5DLHVCQUF1QjtRQUVoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBaUJwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWJELDBCQUEwQjtJQUVuQixPQUFPLENBQUMsS0FBYztRQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFRRCxRQUFRO1FBQ04sZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUIsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsa2tDQUF5Qzs7YUFFMUM7OztZQVBPLFdBQVc7OztxQkFVaEIsS0FBSzt3QkFHTCxLQUFLOzJCQUdMLEtBQUs7d0JBR0wsS0FBSzsyQkFHTCxLQUFLO3FCQUdMLFdBQVcsU0FBQyxjQUFjO3NCQU8xQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSAnLi4vbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51U2VydmljZX0gZnJvbSAnLi4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7ZXJyb3J9IGZyb20gJ3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUtaXRlbS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogaXRlbSBpZCAqL1xuICBASW5wdXQoKSBwdWJsaWMgaXRlbUlkOiBzdHJpbmc7XG5cbiAgLyogc3RhcnQgaWNvbiAqL1xuICBASW5wdXQoKSBwdWJsaWMgc3RhcnRJY29uOiBzdHJpbmc7XG5cbiAgLyogcHJldmVudCBjbG9zaW5nIHRoZSBtZW51IHdoZW4gdGhpcyBpdGVtIGlzIGNsaWNrZWQgKi9cbiAgQElucHV0KCkgcHVibGljIHByZXZlbnRDbG9zZTogYm9vbGVhbjtcblxuICAvKiBjaGVja2JveCBtb2RlbCAoZm9yIG11bHRpcGxlIHNlbGVjdGlvbnMpICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpc0NoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyogZm9yIG11bHRpcGxlIHNlbGVjdGlvbjogYSBtZW51IGl0ZW0gdGhhdCBoYXMgbm8gY2hlY2tib3ggKiovXG4gIEBJbnB1dCgpIHB1YmxpYyB1bnNlbGVjdGFibGU6IGJvb2xlYW47XG5cbiAgLyogYmluZCBjbGFzcy5hY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlID0gZmFsc2U7XG5cbiAgLyogcGFyZW50IGNvbXBvbmVudCByZWZlcmVuY2UgKi9cbiAgcHJpdmF0ZSBtZW51OiBNZW51Q29tcG9uZW50O1xuXG4gIC8qIGNsaWNrIGV2ZW50IGxpc3RlbmVyICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IFVJRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgIHRoaXMubWVudS5zZWxlY3RNZW51SXRlbSh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21lbnVTZXJ2aWNlOiBNZW51U2VydmljZVxuICApIHtcbiAgICB0aGlzLm1lbnUgPSB0aGlzLl9tZW51U2VydmljZS5nZXRNZW51KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB2ZXJpZnkgaW5wdXRcbiAgICBpZiAodGhpcy5tZW51Lm11bHRpcGxlKSB7XG4gICAgICBpZiAodGhpcy5pdGVtSWQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NwdC1tZW51LWl0ZW06IG1pc3NpbmcgYXR0cmlidXRlOiBpdGVtSWQgZm9yIG11bHRpcGxlIHNlbGVjdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgYWN0aXZlIHN0YXR1c1xuICAgKi9cbiAgcHVibGljIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGluYWN0aXZlIHN0YXR1c1xuICAgKi9cbiAgcHVibGljIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IG1lbnUgaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdEl0ZW0oKSB7XG4gICAgdGhpcy5tZW51LnNlbGVjdE1lbnVJdGVtKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIGlmIG11bHRpcGxlIGl0ZW1zIGNhbiBiZSBzZWxlY3RlZFxuICAgKi9cbiAgcHVibGljIGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVudS5tdWx0aXBsZTtcbiAgfVxufVxuIl19