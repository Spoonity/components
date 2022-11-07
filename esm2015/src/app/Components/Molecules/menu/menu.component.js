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
        /* searchModel change event (two-way binding) */
        this.searchModelChange = new EventEmitter();
        /* selected items list (two-way binding) */
        this.selectedItems = [];
        /* selected items list change event (two-way binding) */
        this.selectedItemsChange = new EventEmitter();
        /* on menu hide */
        this.onMenuHide = new EventEmitter();
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
        // TODO: scroll to the top
        setTimeout(() => {
            console.log('scrolling');
            this.menuContainer.nativeElement.scrollTop = 0;
        }, 100);
    }
    /**
     * hide menu action
     */
    hideMenu() {
        this.menu.hide();
        this.searchModel = '';
        this.searchModelChange.emit(this.searchModel);
        this.onMenuHide.emit();
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
            if (item.isChecked) {
                if (!this.selectedItems.includes(item.itemId.toString())) {
                    this.selectedItems.push(item.itemId.toString());
                }
            }
            else {
                this.selectedItems = Array.from(this.selectedItems.filter(s => s.toString() !== item.itemId.toString()));
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
                template: "<div #menuReference class=\"menu-wrapper\" [ngClass]=\"{'show-menu': isShowing()}\">\n    <spt-overlay-template [reference]=\"menuReference\" #menuComp>\n        <div class=\"menu-container spt-elevation--5\" #menuContainer>\n\n            <!---- search ---->\n            <div *ngIf=\"search\" class=\"search-container spt-spacing--1\">\n                <div class=\"search-input\">\n                    <input #searchEl\n                           placeholder=\"Search\"\n                           [(ngModel)]=\"searchModel\"\n                           (ngModelChange)=\"change()\"\n                           (keydown)=\"onKeyDown($event)\"/>\n                </div>\n            </div>\n\n            <!---- select all ---->\n            <div *ngIf=\"multiple && selectAllOption\" class=\"menu-item spt-spacing--1 multiple-menu-item\" (click)=\"toggleSelectAllAction()\">\n                <div>\n                    <label nz-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggleSelectAllAction(true)\"></label>\n                </div>\n                <div class=\"label\">Select All</div>\n            </div>\n\n            <!-- options list -->\n            <ng-content select=\"spt-menu-item\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n        </div>\n    </spt-overlay-template>\n</div>\n\n",
                providers: [MenuService],
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow-x:hidden;overflow-y:auto;max-height:500px}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}.search-input{margin-top:4px}"]
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
    onMenuHide: [{ type: Output }],
    searchEl: [{ type: ViewChild, args: ['searchEl',] }],
    menu: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    menuContainer: [{ type: ViewChild, args: ['menuContainer',] }],
    menuItems: [{ type: ContentChildren, args: [MenuItemComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL21lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sYUFBYTtJQXlEeEIsWUFDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQXREbkMscUNBQXFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVFqQyx1QkFBdUI7UUFDYixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBS3ZFLGdEQUFnRDtRQUN0QyxzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV6RSwyQ0FBMkM7UUFDbEMsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFdEMsd0RBQXdEO1FBQzlDLHdCQUFtQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBRXJGLGtCQUFrQjtRQUNSLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXlCcEUseUJBQXlCO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxZ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YSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsS0FBb0I7UUFDbkMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQixDQUFDLFlBQXNCO1FBQ2pELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBakxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMjBDQUFvQztnQkFFcEMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDOzthQUN6Qjs7O1lBUE8sV0FBVzs7O3VCQVVoQixLQUFLOytCQUdMLEtBQUs7cUJBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUdMLE1BQU07MEJBR04sS0FBSztnQ0FHTCxNQUFNOzRCQUdOLEtBQUs7a0NBR0wsTUFBTTt5QkFHTixNQUFNO3VCQUdOLFNBQVMsU0FBQyxVQUFVO21CQUlwQixTQUFTLFNBQUMsd0JBQXdCOzRCQUlsQyxTQUFTLFNBQUMsZUFBZTt3QkFJekIsZUFBZSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVTZXJ2aWNlfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW01lbnVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogaWYgbXVsdGlwbGUgc2VsZWN0aW9uICoqL1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICAvKiBjbG9zZSBtZW51IHdoZW4gaXRlbSBpcyBjbGlja2VkICovXG4gIEBJbnB1dCgpIGNsb3NlT25JdGVtQ2xpY2sgPSB0cnVlO1xuXG4gIC8qIGluY2x1ZGUgc2VhcmNoIG9uIHRoZSBpdGVtcyAqL1xuICBASW5wdXQoKSBzZWFyY2g6IGJvb2xlYW47XG5cbiAgLyogaWYgYSBzZWxlY3QgYWxsIGl0ZW0gaXMgaW5jbHVkZWQgKiovXG4gIEBJbnB1dCgpIHNlbGVjdEFsbE9wdGlvbjogYm9vbGVhbjtcblxuICAvKiB0b2dnbGUgc2VsZWN0IGFsbCAqL1xuICBAT3V0cHV0KCkgdG9nZ2xlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlYXJjaE1vZGVsICh0d28td2F5IGJpbmRpbmcpICovXG4gIEBJbnB1dCgpIHNlYXJjaE1vZGVsOiBzdHJpbmc7XG5cbiAgLyogc2VhcmNoTW9kZWwgY2hhbmdlIGV2ZW50ICh0d28td2F5IGJpbmRpbmcpICovXG4gIEBPdXRwdXQoKSBzZWFyY2hNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiBzZWxlY3RlZCBpdGVtcyBsaXN0ICh0d28td2F5IGJpbmRpbmcpICovXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyogc2VsZWN0ZWQgaXRlbXMgbGlzdCBjaGFuZ2UgZXZlbnQgKHR3by13YXkgYmluZGluZykgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIC8qIG9uIG1lbnUgaGlkZSAqL1xuICBAT3V0cHV0KCkgb25NZW51SGlkZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qIHNlYXJjaCBpbnB1dCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaEVsJylcbiAgcHVibGljIHNlYXJjaEVsOiBFbGVtZW50UmVmO1xuXG4gIC8qIG92ZXJsYXkgdGVtcGxhdGUgY29tcG9uZW50ICovXG4gIEBWaWV3Q2hpbGQoT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50KVxuICBwdWJsaWMgbWVudTogT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50O1xuXG4gIC8qIG1lbnUgY29udGFpbmVyICovXG4gIEBWaWV3Q2hpbGQoJ21lbnVDb250YWluZXInKVxuICBwdWJsaWMgbWVudUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiBtZW51IGl0ZW1zIGNvbXBvbmVudCAqL1xuICBAQ29udGVudENoaWxkcmVuKE1lbnVJdGVtQ29tcG9uZW50KVxuICBwdWJsaWMgbWVudUl0ZW1zOiBRdWVyeUxpc3Q8TWVudUl0ZW1Db21wb25lbnQ+O1xuXG5cbiAgLyogc2VsZWN0IGFsbCBjaGVja2JveCBtb2RlbCAqL1xuICBwdWJsaWMgc2VsZWN0QWxsOiBib29sZWFuO1xuXG4gIC8qIHNlbGVjdGVkIE1lbnUgaXRlbSAqL1xuICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBNZW51SXRlbUNvbXBvbmVudDtcblxuICAvKiBpcyB0aGUgbWVudSBzaG93aW5nICovXG4gIHByaXZhdGUgX21lbnVTaG93aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX21lbnVTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlIHNob3cgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbXNcbiAgICovXG4gIHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMuX21lbnVTaG93aW5nID0gIXRoaXMuaXNTaG93aW5nKCk7XG4gICAgaWYgKHRoaXMuX21lbnVTaG93aW5nKSB7XG4gICAgICB0aGlzLnNob3dNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogc2hvdyBtZW51IGFjdGlvblxuICAgKi9cbiAgcHVibGljIHNob3dNZW51KCk6IHZvaWQge1xuICAgIHRoaXMubWVudS5zaG93KCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNlYXJjaEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogc2Nyb2xsIHRvIHRoZSB0b3BcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxpbmcnKTtcbiAgICAgIHRoaXMubWVudUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gJyc7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICAgIHRoaXMub25NZW51SGlkZS5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogdmlzaWJpbGl0eSBzdGF0ZSBvZiB0aGUgb3ZlcmxheSB0ZW1wbGF0ZVxuICAgKi9cbiAgaXNTaG93aW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbnUgPyB0aGlzLm1lbnUuc2hvd2luZyA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZSBtb2RlbCBhY3Rpb25cbiAgICovXG4gIGNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hNb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IG1lbnUgaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06IE1lbnVJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlT25JdGVtQ2xpY2spIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS51bnNlbGVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5pdGVtSWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtLml0ZW1JZC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHMgPT4gcy50b1N0cmluZygpICE9PSBpdGVtLml0ZW1JZC50b1N0cmluZygpKSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGtleWRvd24gZXZlbnQgKGVzY2FwZSBpcyBwcmVzc2VkKVxuICAgKi9cbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLm1lbnUuc2hvd2luZykge1xuICAgICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZSBzZWxlY3QgYWxsXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlU2VsZWN0QWxsQWN0aW9uKGZyb21DaGVja2JveD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWZyb21DaGVja2JveCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSAhdGhpcy5zZWxlY3RBbGw7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlU2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGwpO1xuICB9XG59XG4iXX0=