import { OnInit } from '@angular/core';
import { SideNavigationType } from '../../../utils/enums';
export declare class SideNavigationComponent implements OnInit {
    icon: string;
    text: string;
    disabled: boolean;
    items: MenuItems[];
    type: SideNavigationType;
    constructor();
    ngOnInit(): void;
}
export interface MenuItems {
    icon: string;
    text: string;
    link: string;
}
