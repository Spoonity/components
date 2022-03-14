import { EventEmitter, OnInit } from '@angular/core';
export declare class TabComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    tabs: {
        name: string;
        disabled: boolean;
    }[];
    index: number;
    selectedIndexChange: EventEmitter<any>;
}
