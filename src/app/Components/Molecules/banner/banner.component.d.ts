import { EventEmitter } from '@angular/core';
interface IBanner {
    id: number;
    message: string;
    type: 'error' | 'warning' | 'info' | 'success';
}
export declare class BannerComponent {
    bannerList: IBanner[];
    closeCallback: EventEmitter<any>;
    icon: {
        [key: string]: string;
    };
    close: {
        [key: string]: boolean;
    };
    onCloseButtonClick(id: number): void;
    private _removeBanner;
}
export {};
