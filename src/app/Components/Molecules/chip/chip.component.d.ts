import { EventEmitter, OnInit } from '@angular/core';
export declare class ChipComponent implements OnInit {
    text: string;
    icon: string;
    mode: string;
    checked: boolean;
    disabled: boolean;
    onCloseEvent: EventEmitter<any>;
    onCheckEvent: EventEmitter<any>;
    styles: {
        'width.px': number;
        'height.px': number;
    };
    constructor();
    ngOnInit(): void;
    onClose(): void;
    checkChange(e: boolean): void;
}
