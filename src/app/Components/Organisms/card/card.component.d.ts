import { OnInit } from '@angular/core';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
export interface ICampaign {
    id: number;
    notification_template: any;
    notification_template_id: number;
    name: string;
    description?: any;
    error?: any;
    date_scheduled: number;
    date_sent?: any;
    date_created: number;
    date_updated: number;
    status: any;
    target_group_id: number;
    metrics: any;
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
export declare enum CAMPAIGN_STATUS {
    ACTIVE = 1,
    INACTIVE = 2,
    EXPIRED = 3,
    DELETED = 4,
    COMPLETE = 5
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
    CAMPAIGN_STATUS: typeof CAMPAIGN_STATUS;
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
    getStatus(id: any): "SENDING" | "DRAFT" | "EXPIRED" | "DELETED" | "SENT";
    getMetric(type: any, campaign: any): any;
}
