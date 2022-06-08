import { EventEmitter, OnInit } from '@angular/core';
export declare class TabComponent implements OnInit {
    tabs: {
        name: string;
        disabled?: boolean;
        icon?: string;
        tooltip?: string;
    }[];
    index: number;
    selectedIndexChange: EventEmitter<any>;
    orientation: 'vertical' | 'horizontal';
    TAB_POSITION: {
        [orientation: string]: 'top' | 'left';
    };
    constructor();
    ngOnInit(): void;
}
