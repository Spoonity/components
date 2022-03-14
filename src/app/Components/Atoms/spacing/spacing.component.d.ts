import { OnInit } from '@angular/core';
interface ISpacing {
    sectionName: string;
    sectionClassName: string;
    sections: {
        label: string;
        className: string;
    }[];
}
export declare class SpacingComponent implements OnInit {
    spacing: ISpacing[];
    constructor();
    ngOnInit(): void;
    getSpacing(): ISpacing[];
}
export {};
