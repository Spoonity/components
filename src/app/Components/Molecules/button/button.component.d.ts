import { OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
export declare class ButtonComponent implements OnInit {
    type: ButtonType;
    size: ButtonSize;
    leftIcon: string;
    rightIcon: string;
    text: string;
    disabled: boolean;
    color: string;
    iconColor: string;
    B: typeof ButtonType;
    S: typeof ButtonSize;
    constructor();
    ngOnInit(): void;
}
