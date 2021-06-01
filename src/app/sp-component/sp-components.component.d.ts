import { OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
export declare class SpComponentsComponent implements OnInit {
    private iconReg;
    constructor(iconReg: SvgIconRegistryService);
    ngOnInit(): void;
    registerIcons(iconReg: SvgIconRegistryService): void;
}
