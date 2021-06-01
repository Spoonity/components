import { OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
export declare class HeaderComponent implements OnInit {
    title: string;
    backTitle: string;
    breadcrumbs: string;
    btnTitle: string;
    search: boolean;
    action: () => {};
    constructor();
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    ngOnInit(): void;
}
