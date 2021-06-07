import { EventEmitter, OnInit } from '@angular/core';
export declare class SwitchComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    on: boolean;
    onChanged: EventEmitter<boolean>;
    change(): void;
}
