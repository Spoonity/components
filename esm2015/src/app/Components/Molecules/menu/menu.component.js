import { Component, ContentChildren, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuService } from './menu.service';
export class MenuComponent {
    constructor(_menuService) {
        this._menuService = _menuService;
        /* close menu when item is clicked */
        this.closeOnItemClick = true;
        /* toggle select all */
        this.toggleSelectAll = new EventEmitter();
        this.searchModelChange = new EventEmitter();
        /* selected items list (two-way binding) */
        this.selectedItems = [];
        this.selectedItemsChange = new EventEmitter();
        /* is the menu showing */
        this._menuShowing = false;
        this._menuService.register(this);
    }
    ngOnInit() {
    }
    /**
     * toggle show state of the menu items
     */
    toggleMenu() {
        this._menuShowing = !this.isShowing();
        if (this._menuShowing) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    }
    /**
     * show menu action
     */
    showMenu() {
        this.menu.show();
        if (this.search) {
            try {
                this.searchEl.nativeElement.focus();
            }
            catch (e) { }
        }
    }
    /**
     * hide menu action
     */
    hideMenu() {
        this.menu.hide();
        this.searchModel = '';
        this.searchModelChange.emit(this.searchModel);
    }
    /**
     * visibility state of the overlay template
     */
    isShowing() {
        return this.menu ? this.menu.showing : false;
    }
    /**
     * change model action
     */
    change() {
        this.searchModelChange.emit(this.searchModel);
    }
    /**
     * select menu item
     */
    selectMenuItem(item) {
        if (!this.selectedItems) {
            this.selectedItems = [];
        }
        this.selectedItem = item;
        if (!this.multiple) {
            if (this.closeOnItemClick) {
                this.hideMenu();
            }
        }
        else {
            if (item.unselectable) {
                this.hideMenu();
                return;
            }
            if (item.checkboxModel) {
                if (!this.selectedItems.includes(item.itemId)) {
                    this.selectedItems.push(item.itemId);
                }
            }
            else {
                this.selectedItems = Array.from(this.selectedItems.filter((s) => s !== item.itemId));
                if (this.selectAllOption) {
                    this.selectAll = false;
                }
            }
            this.selectedItemsChange.emit(this.selectedItems);
        }
    }
    /**
     * keydown event (escape is pressed)
     */
    onKeyDown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.menu.showing) {
                this.hideMenu();
            }
        }
    }
    /**
     * toggle select all
     */
    toggleSelectAllAction(fromCheckbox) {
        if (!fromCheckbox) {
            this.selectAll = !this.selectAll;
        }
        this.toggleSelectAll.emit(this.selectAll);
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-menu',
                template: "<div #menuReference class=\"menu-wrapper\" [ngClass]=\"{'show-menu': isShowing()}\">\n    <spt-overlay-template [reference]=\"menuReference\" #menuComp>\n        <div class=\"menu-container spt-elevation--5\">\n\n            <!---- search ---->\n            <div *ngIf=\"search\" class=\"search-container spt-spacing--1\">\n                <input #searchEl\n                       placeholder=\"Search\"\n                       [(ngModel)]=\"searchModel\"\n                       (ngModelChange)=\"change()\"\n                       (keydown)=\"onKeyDown($event)\"/>\n            </div>\n\n            <!---- select all ---->\n            <div *ngIf=\"multiple && selectAllOption\" class=\"menu-item spt-spacing--1 multiple-menu-item\" (click)=\"toggleSelectAllAction()\">\n                <div>\n                    <label nz-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggleSelectAllAction(true)\"></label>\n                </div>\n                <div class=\"label\">Select All</div>\n            </div>\n\n            <!-- options list -->\n            <ng-content select=\"spt-menu-item\"></ng-content>\n        </div>\n    </spt-overlay-template>\n</div>\n\n",
                providers: [MenuService],
                styles: [".options-container{display:block;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow:hidden}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}"]
            },] }
];
MenuComponent.ctorParameters = () => [
    { type: MenuService }
];
MenuComponent.propDecorators = {
    multiple: [{ type: Input }],
    closeOnItemClick: [{ type: Input }],
    search: [{ type: Input }],
    selectAllOption: [{ type: Input }],
    toggleSelectAll: [{ type: Output }],
    searchModel: [{ type: Input }],
    searchModelChange: [{ type: Output }],
    selectedItems: [{ type: Input }],
    selectedItemsChange: [{ type: Output }],
    searchEl: [{ type: ViewChild, args: ['searchEl',] }],
    menu: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    menuItems: [{ type: ContentChildren, args: [MenuItemComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL21lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sYUFBYTtJQThDeEIsWUFDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQTNDbkMscUNBQXFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVFqQyx1QkFBdUI7UUFDYixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTdELHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXpFLDJDQUEyQztRQUNsQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM1Qix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXFCM0UseUJBQXlCO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSTtnQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNyQztZQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7U0FDZjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWMsQ0FBQyxJQUF1QjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN0QzthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3RixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2lCQUN4QjthQUNGO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQixDQUFDLFlBQXNCO1FBQ2pELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBL0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsbXFDQUFvQztnQkFFcEMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOzthQUN6Qjs7O1lBUE8sV0FBVzs7O3VCQVVoQixLQUFLOytCQUdMLEtBQUs7cUJBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUdMLE1BQU07MEJBR04sS0FBSztnQ0FDTCxNQUFNOzRCQUdOLEtBQUs7a0NBQ0wsTUFBTTt1QkFHTixTQUFTLFNBQUMsVUFBVTttQkFJcEIsU0FBUyxTQUFDLHdCQUF3Qjt3QkFJbEMsZUFBZSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVTZXJ2aWNlfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogaWYgbXVsdGlwbGUgc2VsZWN0aW9uICoqL1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICAvKiBjbG9zZSBtZW51IHdoZW4gaXRlbSBpcyBjbGlja2VkICovXG4gIEBJbnB1dCgpIGNsb3NlT25JdGVtQ2xpY2sgPSB0cnVlO1xuXG4gIC8qIGluY2x1ZGUgc2VhcmNoIG9uIHRoZSBpdGVtcyAqL1xuICBASW5wdXQoKSBzZWFyY2g6IGJvb2xlYW47XG5cbiAgLyogaWYgYSBzZWxlY3QgYWxsIGl0ZW0gaXMgaW5jbHVkZWQgKiovXG4gIEBJbnB1dCgpIHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjtcblxuICAvKiB0b2dnbGUgc2VsZWN0IGFsbCAqL1xuICBAT3V0cHV0KCkgdG9nZ2xlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlYXJjaE1vZGVsICh0d28td2F5IGJpbmRpbmcpICovXG4gIEBJbnB1dCgpIHNlYXJjaE1vZGVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzZWFyY2hNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiBzZWxlY3RlZCBpdGVtcyBsaXN0ICh0d28td2F5IGJpbmRpbmcpICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlYXJjaCBpbnB1dCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEVsJylcbiAgcHVibGljIHNlYXJjaEVsOiBFbGVtZW50UmVmO1xuXG4gIC8qIG92ZXJsYXkgdGVtcGxhdGUgY29tcG9uZW50ICovXG4gIEBWaWV3Q2hpbGQoT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgbWVudTogT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIC8qIG1lbnUgaXRlbXMgY29tcG9uZW50ICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTWVudUl0ZW1Db21wb25lbnQpXG4gIHB1YmxpYyBtZW51SXRlbXM6IFF1ZXJ5TGlzdDxNZW51SXRlbUNvbXBvbmVudD47XG5cblxuICAvKiBzZWxlY3QgYWxsIGNoZWNrYm94IG1vZGVsICovXG4gIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW47XG5cbiAgLyogc2VsZWN0ZWQgTWVudSBpdGVtICovXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW06IE1lbnVJdGVtQ29tcG9uZW50O1xuXG4gIC8qIGlzIHRoZSBtZW51IHNob3dpbmcgKi9cbiAgcHJpdmF0ZSBfbWVudVNob3dpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tZW51U2VydmljZTogTWVudVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fbWVudVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGUgc2hvdyBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtc1xuICAgKi9cbiAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudVNob3dpbmcgPSAhdGhpcy5pc1Nob3dpbmcoKTtcbiAgICBpZiAodGhpcy5fbWVudVNob3dpbmcpIHtcbiAgICAgIHRoaXMuc2hvd01lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzaG93IG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgc2hvd01lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LnNob3coKTtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2VhcmNoRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogaGlkZSBtZW51IGFjdGlvblxuICAgKi9cbiAgcHVibGljIGhpZGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMubWVudS5oaWRlKCk7XG4gICAgdGhpcy5zZWFyY2hNb2RlbCA9ICcnO1xuICAgIHRoaXMuc2VhcmNoTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaE1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB2aXNpYmlsaXR5IHN0YXRlIG9mIHRoZSBvdmVybGF5IHRlbXBsYXRlXG4gICAqL1xuICBpc1Nob3dpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVudSA/IHRoaXMubWVudS5zaG93aW5nIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdlIG1vZGVsIGFjdGlvblxuICAgKi9cbiAgY2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnNlYXJjaE1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZWxlY3QgbWVudSBpdGVtXG4gICAqL1xuICBwdWJsaWMgc2VsZWN0TWVudUl0ZW0oaXRlbTogTWVudUl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgaWYgKHRoaXMuY2xvc2VPbkl0ZW1DbGljaykge1xuICAgICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpdGVtLnVuc2VsZWN0YWJsZSkge1xuICAgICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmNoZWNrYm94TW9kZWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5pdGVtSWQpKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbS5pdGVtSWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRJdGVtcy5maWx0ZXIoKHM6IHN0cmluZykgPT4gcyAhPT0gaXRlbS5pdGVtSWQpKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICoga2V5ZG93biBldmVudCAoZXNjYXBlIGlzIHByZXNzZWQpXG4gICAqL1xuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xuICAgICAgaWYgKHRoaXMubWVudS5zaG93aW5nKSB7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlIHNlbGVjdCBhbGxcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVTZWxlY3RBbGxBY3Rpb24oZnJvbUNoZWNrYm94PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZnJvbUNoZWNrYm94KSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9ICF0aGlzLnNlbGVjdEFsbDtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVTZWxlY3RBbGwuZW1pdCh0aGlzLnNlbGVjdEFsbCk7XG4gIH1cbn1cbiJdfQ==