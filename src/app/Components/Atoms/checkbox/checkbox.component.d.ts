import { EventEmitter, OnInit } from '@angular/core';
export declare class CheckboxComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    span: number;
    indeterminate: boolean;
    check: boolean;
    value: string;
    onChangeEvent: EventEmitter<any>;
    onChange(e: any): void;
}
