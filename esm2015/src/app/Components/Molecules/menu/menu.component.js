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
            try {
                this.menuContainer.nativeElement.scrollTop = 0;
            }
            catch (_a) { }
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
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;width:100%;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow-x:hidden;overflow-y:auto;max-height:500px}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}.search-input{margin-top:4px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL21lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxNQUFNLE9BQU8sYUFBYTtJQXlEeEIsWUFDVSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQXREbkMscUNBQXFDO1FBQzVCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQVFqQyx1QkFBdUI7UUFDYixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBS3ZFLGdEQUFnRDtRQUN0QyxzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV6RSwyQ0FBMkM7UUFDbEMsa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFdEMsd0RBQXdEO1FBQzlDLHdCQUFtQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBRXJGLGtCQUFrQjtRQUNSLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQXlCcEUseUJBQXlCO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxZ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QztTQUNuRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxLQUFvQjtRQUNuQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUJBQXFCLENBQUMsWUFBc0I7UUFDakQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFsTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwyMENBQW9DO2dCQUVwQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2FBQ3pCOzs7WUFQTyxXQUFXOzs7dUJBVWhCLEtBQUs7K0JBR0wsS0FBSztxQkFHTCxLQUFLOzhCQUdMLEtBQUs7OEJBR0wsTUFBTTswQkFHTixLQUFLO2dDQUdMLE1BQU07NEJBR04sS0FBSztrQ0FHTCxNQUFNO3lCQUdOLE1BQU07dUJBR04sU0FBUyxTQUFDLFVBQVU7bUJBSXBCLFNBQVMsU0FBQyx3QkFBd0I7NEJBSWxDLFNBQVMsU0FBQyxlQUFlO3dCQUl6QixlQUFlLFNBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvb3ZlcmxheS10ZW1wbGF0ZS9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge01lbnVJdGVtQ29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7TWVudVNlcnZpY2V9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbTWVudVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiBpZiBtdWx0aXBsZSBzZWxlY3Rpb24gKiovXG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuXG4gIC8qIGNsb3NlIG1lbnUgd2hlbiBpdGVtIGlzIGNsaWNrZWQgKi9cbiAgQElucHV0KCkgY2xvc2VPbkl0ZW1DbGljayA9IHRydWU7XG5cbiAgLyogaW5jbHVkZSBzZWFyY2ggb24gdGhlIGl0ZW1zICovXG4gIEBJbnB1dCgpIHNlYXJjaDogYm9vbGVhbjtcblxuICAvKiBpZiBhIHNlbGVjdCBhbGwgaXRlbSBpcyBpbmNsdWRlZCAqKi9cbiAgQElucHV0KCkgc2VsZWN0QWxsT3B0aW9uOiBib29sZWFuO1xuXG4gIC8qIHRvZ2dsZSBzZWxlY3QgYWxsICovXG4gIEBPdXRwdXQoKSB0b2dnbGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyogc2VhcmNoTW9kZWwgKHR3by13YXkgYmluZGluZykgKi9cbiAgQElucHV0KCkgc2VhcmNoTW9kZWw6IHN0cmluZztcblxuICAvKiBzZWFyY2hNb2RlbCBjaGFuZ2UgZXZlbnQgKHR3by13YXkgYmluZGluZykgKi9cbiAgQE91dHB1dCgpIHNlYXJjaE1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qIHNlbGVjdGVkIGl0ZW1zIGxpc3QgKHR3by13YXkgYmluZGluZykgKi9cbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtczogc3RyaW5nW10gPSBbXTtcblxuICAvKiBzZWxlY3RlZCBpdGVtcyBsaXN0IGNoYW5nZSBldmVudCAodHdvLXdheSBiaW5kaW5nKSAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRJdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgLyogb24gbWVudSBoaWRlICovXG4gIEBPdXRwdXQoKSBvbk1lbnVIaWRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyogc2VhcmNoIGlucHV0IGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnc2VhcmNoRWwnKVxuICBwdWJsaWMgc2VhcmNoRWw6IEVsZW1lbnRSZWY7XG5cbiAgLyogb3ZlcmxheSB0ZW1wbGF0ZSBjb21wb25lbnQgKi9cbiAgQFZpZXdDaGlsZChPdmVybGF5VGVtcGxhdGVDb21wb25lbnQpXG4gIHB1YmxpYyBtZW51OiBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQ7XG5cbiAgLyogbWVudSBjb250YWluZXIgKi9cbiAgQFZpZXdDaGlsZCgnbWVudUNvbnRhaW5lcicpXG4gIHB1YmxpYyBtZW51Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qIG1lbnUgaXRlbXMgY29tcG9uZW50ICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTWVudUl0ZW1Db21wb25lbnQpXG4gIHB1YmxpYyBtZW51SXRlbXM6IFF1ZXJ5TGlzdDxNZW51SXRlbUNvbXBvbmVudD47XG5cblxuICAvKiBzZWxlY3QgYWxsIGNoZWNrYm94IG1vZGVsICovXG4gIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW47XG5cbiAgLyogc2VsZWN0ZWQgTWVudSBpdGVtICovXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW06IE1lbnVJdGVtQ29tcG9uZW50O1xuXG4gIC8qIGlzIHRoZSBtZW51IHNob3dpbmcgKi9cbiAgcHJpdmF0ZSBfbWVudVNob3dpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tZW51U2VydmljZTogTWVudVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5fbWVudVNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGUgc2hvdyBzdGF0ZSBvZiB0aGUgbWVudSBpdGVtc1xuICAgKi9cbiAgcHVibGljIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudVNob3dpbmcgPSAhdGhpcy5pc1Nob3dpbmcoKTtcbiAgICBpZiAodGhpcy5fbWVudVNob3dpbmcpIHtcbiAgICAgIHRoaXMuc2hvd01lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzaG93IG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgc2hvd01lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LnNob3coKTtcbiAgICBpZiAodGhpcy5zZWFyY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2VhcmNoRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBzY3JvbGwgdG8gdGhlIHRvcFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tZW51Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0gY2F0Y2ggeyB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoaWRlIG1lbnUgYWN0aW9uXG4gICAqL1xuICBwdWJsaWMgaGlkZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51LmhpZGUoKTtcbiAgICB0aGlzLnNlYXJjaE1vZGVsID0gJyc7XG4gICAgdGhpcy5zZWFyY2hNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoTW9kZWwpO1xuICAgIHRoaXMub25NZW51SGlkZS5lbWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogdmlzaWJpbGl0eSBzdGF0ZSBvZiB0aGUgb3ZlcmxheSB0ZW1wbGF0ZVxuICAgKi9cbiAgaXNTaG93aW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lbnUgPyB0aGlzLm1lbnUuc2hvd2luZyA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoYW5nZSBtb2RlbCBhY3Rpb25cbiAgICovXG4gIGNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hNb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogc2VsZWN0IG1lbnUgaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdE1lbnVJdGVtKGl0ZW06IE1lbnVJdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGlmICh0aGlzLmNsb3NlT25JdGVtQ2xpY2spIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXRlbS51bnNlbGVjdGFibGUpIHtcbiAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbS5pdGVtSWQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtLml0ZW1JZC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkSXRlbXMuZmlsdGVyKHMgPT4gcy50b1N0cmluZygpICE9PSBpdGVtLml0ZW1JZC50b1N0cmluZygpKSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbE9wdGlvbikge1xuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGtleWRvd24gZXZlbnQgKGVzY2FwZSBpcyBwcmVzc2VkKVxuICAgKi9cbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgIGlmICh0aGlzLm1lbnUuc2hvd2luZykge1xuICAgICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZSBzZWxlY3QgYWxsXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlU2VsZWN0QWxsQWN0aW9uKGZyb21DaGVja2JveD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWZyb21DaGVja2JveCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSAhdGhpcy5zZWxlY3RBbGw7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlU2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGwpO1xuICB9XG59XG4iXX0=