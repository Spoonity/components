import { OnInit } from '@angular/core';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
export interface ICampaign {
    type: string;
    title: string;
    targetGroup: string;
    plataform: string;
    dateCreated: string;
    isSend: boolean;
    sendCount: number;
    openCount: number;
    visitCount: number;
    spendCount: number;
}
export interface ICustomer {
    type: string;
    name: string;
    dateCreated: string;
    isSelect: boolean;
    email: string;
    phone: string;
}
export interface IGiftManagement {
    type: string;
    id: string;
    name: string;
    dateCreated: string;
    deliverProcess: string;
    email: string;
    phone: string;
}
export declare class CardComponent implements OnInit {
    campaign: ICampaign;
    customer: ICustomer;
    giftManagement: IGiftManagement;
    option: () => {};
    cancel: () => {};
    goToGuest: () => {};
    sms: string;
    people: string;
    send: string;
    moreVert: string;
    email: string;
    smartphone: string;
    call: string;
    redeem: string;
    isSend: boolean;
    isMouseOver: boolean;
    white: string;
    red: string;
    green: string;
    avatarSize: AvatarSize;
    btnType: ButtonType;
    buttonSize: ButtonSize;
    constructor();
    ngOnInit(): void;
    toggleCard(): void;
}
