import { OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
import { BackNavigationComponent } from '../../Molecules/back-navigation/back-navigation.component';
export declare class HeaderComponent implements OnInit {
    title: string;
    backTitle: string;
    breadcrumbs: string;
    btnTitle: string;
    search: boolean;
    action: () => {};
    backNavigationComponent: BackNavigationComponent;
    constructor();
    buttonType: ButtonType;
    buttonSize: ButtonSize;
    ngOnInit(): void;
}
