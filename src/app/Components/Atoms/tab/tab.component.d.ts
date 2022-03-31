import { EventEmitter, OnInit } from '@angular/core';
export declare class TabComponent implements OnInit {
    tabs: {
        name: string;
        disabled?: boolean;
        icon?: string;
    }[];
    index: number;
    selectedIndexChange: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
