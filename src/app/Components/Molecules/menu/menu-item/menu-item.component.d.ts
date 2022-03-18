import { OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
export declare class MenuItemComponent implements OnInit {
    private _menuService;
    itemId: string;
    startIcon: string;
    preventClose: boolean;
    checkboxModel: boolean;
    unselectable: boolean;
    active: boolean;
    private menu;
    onClick(event: UIEvent): void;
    constructor(_menuService: MenuService);
    ngOnInit(): void;
    /**
     * set active status
     */
    setActiveStyles(): void;
    /**
     * set inactive status
     */
    setInactiveStyles(): void;
    /**
     * select menu item
     */
    selectItem(): void;
    /**
     * if multiple items can be selected
     */
    isMultiple(): boolean;
}
