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
                styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow:hidden}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL21lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sYUFBYTtJQThDeEIsWUFDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQTNDbkMscUNBQXFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVFqQyx1QkFBdUI7UUFDYixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTdELHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXpFLDJDQUEyQztRQUNsQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM1Qix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXFCM0UseUJBQXlCO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JC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WUEzSkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixtcUNBQW9DO2dCQUVwQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2FBQ3pCOzs7WUFQTyxXQUFXOzs7dUJBVWhCLEtBQUs7K0JBR0wsS0FBSztxQkFHTCxLQUFLOzhCQUdMLEtBQUs7OEJBR0wsTUFBTTswQkFHTixLQUFLO2dDQUNMLE1BQU07NEJBR04sS0FBSztrQ0FDTCxNQUFNO3VCQUdOLFNBQVMsU0FBQyxVQUFVO21CQUlwQixTQUFTLFNBQUMsd0JBQXdCO3dCQUlsQyxlQUFlLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvb3ZlcmxheS10ZW1wbGF0ZS9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVJdGVtQ29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7TWVudVNlcnZpY2V9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbTWVudVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiBpZiBtdWx0aXBsZSBzZWxlY3Rpb24gKiovXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuXG4gIC8qIGNsb3NlIG1lbnUgd2hlbiBpdGVtIGlzIGNsaWNrZWQgKi9cbiAgQElucHV0KCkgY2xvc2VPbkl0ZW1DbGljayA9IHRydWU7XG5cbiAgLyogaW5jbHVkZSBzZWFyY2ggb24gdGhlIGl0ZW1zICovXG4gIEBJbnB1dCgpIHNlYXJjaDogYm9vbGVhbjtcblxuICAvKiBpZiBhIHNlbGVjdCBhbGwgaXRlbSBpcyBpbmNsdWRlZCAqKi9cbiAgQElucHV0KCkgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuXG4gIC8qIHRvZ2dsZSBzZWxlY3QgYWxsICovXG4gIEBPdXRwdXQoKSB0b2dnbGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogc2VhcmNoTW9kZWwgKHR3by13YXkgYmluZGluZykgKi9cbiAgQElucHV0KCkgc2VhcmNoTW9kZWw6IHN0cmluZztcbiAgQE91dHB1dCgpIHNlYXJjaE1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlbGVjdGVkIGl0ZW1zIGxpc3QgKHR3by13YXkgYmluZGluZykgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtczogc3RyaW5nW10gPSBbXTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogc2VhcmNoIGlucHV0IGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnc2VhcmNoRWwnKVxuICBwdWJsaWMgc2VhcmNoRWw6IEVsZW1lbnRSZWY7XG5cbiAgLyogb3ZlcmxheSB0ZW1wbGF0ZSBjb21wb25lbnQgKi9cbiAgQFZpZXdDaGlsZChPdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBtZW51OiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgLyogbWVudSBpdGVtcyBjb21wb25lbnQgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihNZW51SXRlbUNvbXBvbmVudClcbiAgcHVibGljIG1lbnVJdGVtczogUXVlcnlMaXN0PE1lbnVJdGVtQ29tcG9uZW50PjtcblxuXG4gIC8qIHNlbGVjdCBhbGwgY2hlY2tib3ggbW9kZWwgKi9cbiAgcHVibGljIHNlbGVjdEFsbDogYm9vbGVhbjtcblxuICAvKiBzZWxlY3RlZCBNZW51IGl0ZW0gKi9cbiAgcHVibGljIHNlbGVjdGVkSXRlbTogTWVudUl0ZW1Db21wb25lbnQ7XG5cbiAgLyogaXMgdGhlIG1lbnUgc2hvd2luZyAqL1xuICBwcml2YXRlIF9tZW51U2hvd2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21lbnVTZXJ2aWNlOiBNZW51U2VydmljZVxuICApIHtcbiAgICB0aGlzLl9tZW51U2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZSBzaG93IHN0YXRlIG9mIHRoZSBtZW51IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZW51U2hvd2luZyA9ICF0aGlzLmlzU2hvd2luZygpO1xuICAgIGlmICh0aGlzLl9tZW51U2hvd2luZykge1xuICAgICAgdGhpcy5zaG93TWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNob3cgbWVudSBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBzaG93TWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnUuc2hvdygpO1xuICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZWFyY2hFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gJyc7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIG92ZXJsYXkgdGVtcGxhdGVcbiAgICovXG4gIGlzU2hvd2luZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW51ID8gdGhpcy5tZW51LnNob3dpbmcgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2UgbW9kZWwgYWN0aW9uXG4gICAqL1xuICBjaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCBtZW51IGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOiBNZW51SXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICBpZiAodGhpcy5jbG9zZU9uSXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0uY2hlY2tib3hNb2RlbCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtLml0ZW1JZCkpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtLml0ZW1JZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcigoczogc3RyaW5nKSA9PiBzICE9PSBpdGVtLml0ZW1JZCkpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBrZXlkb3duIGV2ZW50IChlc2NhcGUgaXMgcHJlc3NlZClcbiAgICovXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgICBpZiAodGhpcy5tZW51LnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGUgc2VsZWN0IGFsbFxuICAgKi9cbiAgcHVibGljIHRvZ2dsZVNlbGVjdEFsbEFjdGlvbihmcm9tQ2hlY2tib3g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFmcm9tQ2hlY2tib3gpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbC5lbWl0KHRoaXMuc2VsZWN0QWxsKTtcbiAgfVxufVxuIl19