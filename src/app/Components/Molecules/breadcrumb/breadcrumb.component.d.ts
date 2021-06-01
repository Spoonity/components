import { OnInit } from '@angular/core';
export declare class BreadcrumbComponent implements OnInit {
    constructor();
    items: {
        label: string;
        route: string;
    }[];
    ngOnInit(): void;
}
export interface IBreadCrumbItem {
    label: string;
    route: string;
}
