import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class BackNavigationComponent implements OnInit {
    private _location;
    private _router;
    constructor(_location: Location, _router: Router);
    title: string;
    subTitle: string;
    route: string;
    ngOnInit(): void;
    onBack(route: any): void;
}
