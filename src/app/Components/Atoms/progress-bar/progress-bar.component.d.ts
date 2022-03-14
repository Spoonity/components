import { OnInit } from '@angular/core';
export declare class ProgressBarComponent implements OnInit {
    percent: number;
    info: boolean;
    type: 'line' | 'circle';
    constructor();
    ngOnInit(): void;
}
