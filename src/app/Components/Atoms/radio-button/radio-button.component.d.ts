import { OnInit } from '@angular/core';
export declare class RadioButtonComponent implements OnInit {
    constructor();
    radioButtons: {
        radioName: string;
        disable: boolean;
    }[];
    model: string;
    ngOnInit(): void;
}
