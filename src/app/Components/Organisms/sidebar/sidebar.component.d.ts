import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
import { OnInit } from '@angular/core';
export interface IUserData {
    name: string;
    id: string;
    email: string;
    title: string;
    company: string;
}
export interface ISidebar {
    users: IUserData[];
    logout: () => any;
}
export interface IMenuItems {
    title: string;
    icon: any;
    link: string;
    isActive: boolean;
}
export declare class SidebarComponent implements OnInit {
    sidebarData: ISidebar;
    optionsData: IMenuItems[];
    userDisplay: IUserData;
    otherAccounts: IUserData[];
    AccountsDisplay: IUserData[];
    multipleAccounts: boolean;
    avatarSize: AvatarSize;
    keyboarTab: string;
    expandLess: string;
    accountBox: string;
    logoutIcon: string;
    expandMore: string;
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    inputFilter: string;
    iconColor: string;
    isCollapse: boolean;
    onToggleLogout: boolean;
    multipleAccountsSelection: boolean;
    MenuWidht: string;
    MenuHeight: string;
    OptionWidht: string;
    lineRight: string;
    constructor();
    ngOnInit(): void;
    onCollapse(): void;
    onActive(option: IMenuItems): void;
    toggleLogout(): void;
    expandAccounts(): void;
    switchAccount(account: IUserData): void;
    filter(): void;
}
