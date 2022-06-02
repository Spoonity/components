import { EventEmitter, OnInit } from '@angular/core';
export declare class ChipComponent implements OnInit {
    text: string;
    color: string;
    icon: string;
    mode: 'default' | 'closeable' | 'checkable';
    checked: boolean;
    disabled: boolean;
    onCloseEvent: EventEmitter<any>;
    onCheckEvent: EventEmitter<any>;
    styles: {
        'width.px': number;
        'height.px': number;
        fill: string;
    };
    constructor();
    ngOnInit(): void;
    onClose(): void;
    checkChange(e: boolean): void;
}
