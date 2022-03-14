import { EventEmitter, OnInit } from '@angular/core';
export declare class StepsComponent implements OnInit {
    constructor();
    current: number;
    steps: Array<ISteps>;
    type: string;
    direction: string;
    preventFutureSteps: boolean;
    onIndexChangeEvent: EventEmitter<number>;
    ngOnInit(): void;
    onIndexChange(event: number): void;
}
export interface ISteps {
    title: string;
    description: string;
    status?: 'wait' | 'process' | 'finish' | 'error';
}
