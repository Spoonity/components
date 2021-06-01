import { ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuService } from './menu.service';
export declare class MenuComponent implements OnInit {
    private _menuService;
    multiple: boolean;
    closeOnItemClick: boolean;
    search: boolean;
    selectAllOption: boolean;
    toggleSelectAll: EventEmitter<any>;
    searchModel: string;
    searchModelChange: EventEmitter<any>;
    selectedItems: string[];
    selectedItemsChange: EventEmitter<any>;
    searchEl: ElementRef;
    menu: OverlayTemplateComponent;
    menuItems: QueryList<MenuItemComponent>;
    selectAll: boolean;
    selectedItem: MenuItemComponent;
    private _menuShowing;
    constructor(_menuService: MenuService);
    ngOnInit(): void;
    /**
     * toggle show state of the menu items
     */
    toggleMenu(): void;
    /**
     * show menu action
     */
    showMenu(): void;
    /**
     * hide menu action
     */
    hideMenu(): void;
    /**
     * visibility state of the overlay template
     */
    isShowing(): boolean;
    /**
     * change model action
     */
    change(): void;
    /**
     * select menu item
     */
    selectMenuItem(item: MenuItemComponent): void;
    /**
     * keydown event (escape is pressed)
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * toggle select all
     */
    toggleSelectAllAction(fromCheckbox?: boolean): void;
}
