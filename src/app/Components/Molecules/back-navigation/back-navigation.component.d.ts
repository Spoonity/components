import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
export declare class BackNavigationComponent {
    private _location;
    private _router;
    private _route;
    text: string;
    route: string;
    backAction: Function;
    constructor(_location: Location, _router: Router, _route: ActivatedRoute);
    onBack(): void;
}
