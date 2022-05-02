import { Location } from '@angular/common';
import { Router } from '@angular/router';
export declare class BackNavigationComponent {
    private _location;
    private _router;
    text: string;
    route: string;
    constructor(_location: Location, _router: Router);
    onBack(): void;
}
