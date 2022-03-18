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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL21lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sYUFBYTtJQThDeEIsWUFDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQTNDbkMscUNBQXFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVFqQyx1QkFBdUI7UUFDYixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTdELHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXpFLDJDQUEyQztRQUNsQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQUM1Qix3QkFBbUIsR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQXFCckYseUJBQXlCO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JC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QUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQS9KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLG1xQ0FBb0M7Z0JBRXBDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7YUFDekI7OztZQVBPLFdBQVc7Ozt1QkFVaEIsS0FBSzsrQkFHTCxLQUFLO3FCQUdMLEtBQUs7OEJBR0wsS0FBSzs4QkFHTCxNQUFNOzBCQUdOLEtBQUs7Z0NBQ0wsTUFBTTs0QkFHTixLQUFLO2tDQUNMLE1BQU07dUJBR04sU0FBUyxTQUFDLFVBQVU7bUJBSXBCLFNBQVMsU0FBQyx3QkFBd0I7d0JBSWxDLGVBQWUsU0FBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPdmVybGF5VGVtcGxhdGVDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9vdmVybGF5LXRlbXBsYXRlL292ZXJsYXktdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7TWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51U2VydmljZX0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtNZW51U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qIGlmIG11bHRpcGxlIHNlbGVjdGlvbiAqKi9cbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG5cbiAgLyogY2xvc2UgbWVudSB3aGVuIGl0ZW0gaXMgY2xpY2tlZCAqL1xuICBASW5wdXQoKSBjbG9zZU9uSXRlbUNsaWNrID0gdHJ1ZTtcblxuICAvKiBpbmNsdWRlIHNlYXJjaCBvbiB0aGUgaXRlbXMgKi9cbiAgQElucHV0KCkgc2VhcmNoOiBib29sZWFuO1xuXG4gIC8qIGlmIGEgc2VsZWN0IGFsbCBpdGVtIGlzIGluY2x1ZGVkICoqL1xuICBASW5wdXQoKSBzZWxlY3RBbGxPcHRpb246IGJvb2xlYW47XG5cbiAgLyogdG9nZ2xlIHNlbGVjdCBhbGwgKi9cbiAgQE91dHB1dCgpIHRvZ2dsZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiBzZWFyY2hNb2RlbCAodHdvLXdheSBiaW5kaW5nKSAqL1xuICBASW5wdXQoKSBzZWFyY2hNb2RlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgc2VhcmNoTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogc2VsZWN0ZWQgaXRlbXMgbGlzdCAodHdvLXdheSBiaW5kaW5nKSAqL1xuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgLyogc2VhcmNoIGlucHV0IGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnc2VhcmNoRWwnKVxuICBwdWJsaWMgc2VhcmNoRWw6IEVsZW1lbnRSZWY7XG5cbiAgLyogb3ZlcmxheSB0ZW1wbGF0ZSBjb21wb25lbnQgKi9cbiAgQFZpZXdDaGlsZChPdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBtZW51OiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgLyogbWVudSBpdGVtcyBjb21wb25lbnQgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihNZW51SXRlbUNvbXBvbmVudClcbiAgcHVibGljIG1lbnVJdGVtczogUXVlcnlMaXN0PE1lbnVJdGVtQ29tcG9uZW50PjtcblxuXG4gIC8qIHNlbGVjdCBhbGwgY2hlY2tib3ggbW9kZWwgKi9cbiAgcHVibGljIHNlbGVjdEFsbDogYm9vbGVhbjtcblxuICAvKiBzZWxlY3RlZCBNZW51IGl0ZW0gKi9cbiAgcHVibGljIHNlbGVjdGVkSXRlbTogTWVudUl0ZW1Db21wb25lbnQ7XG5cbiAgLyogaXMgdGhlIG1lbnUgc2hvd2luZyAqL1xuICBwcml2YXRlIF9tZW51U2hvd2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21lbnVTZXJ2aWNlOiBNZW51U2VydmljZVxuICApIHtcbiAgICB0aGlzLl9tZW51U2VydmljZS5yZWdpc3Rlcih0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZSBzaG93IHN0YXRlIG9mIHRoZSBtZW51IGl0ZW1zXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZW51U2hvd2luZyA9ICF0aGlzLmlzU2hvd2luZygpO1xuICAgIGlmICh0aGlzLl9tZW51U2hvd2luZykge1xuICAgICAgdGhpcy5zaG93TWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHNob3cgbWVudSBhY3Rpb25cbiAgICovXG4gIHB1YmxpYyBzaG93TWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnUuc2hvdygpO1xuICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zZWFyY2hFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gJyc7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHZpc2liaWxpdHkgc3RhdGUgb2YgdGhlIG92ZXJsYXkgdGVtcGxhdGVcbiAgICovXG4gIGlzU2hvd2luZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW51ID8gdGhpcy5tZW51LnNob3dpbmcgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2UgbW9kZWwgYWN0aW9uXG4gICAqL1xuICBjaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCBtZW51IGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzZWxlY3RNZW51SXRlbShpdGVtOiBNZW51SXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICBpZiAodGhpcy5jbG9zZU9uSXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW0udW5zZWxlY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaXNDaGVja2VkKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0uaXRlbUlkLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbS5pdGVtSWQudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zZWxlY3RlZEl0ZW1zLmZpbHRlcihzID0+IHMudG9TdHJpbmcoKSAhPT0gaXRlbS5pdGVtSWQudG9TdHJpbmcoKSkpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkSXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBrZXlkb3duIGV2ZW50IChlc2NhcGUgaXMgcHJlc3NlZClcbiAgICovXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgICBpZiAodGhpcy5tZW51LnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGUgc2VsZWN0IGFsbFxuICAgKi9cbiAgcHVibGljIHRvZ2dsZVNlbGVjdEFsbEFjdGlvbihmcm9tQ2hlY2tib3g/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFmcm9tQ2hlY2tib3gpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlbGVjdEFsbC5lbWl0KHRoaXMuc2VsZWN0QWxsKTtcbiAgfVxufVxuIl19