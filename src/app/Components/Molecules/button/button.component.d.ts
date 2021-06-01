import { OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
export declare class ButtonComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    type: ButtonType;
    size: ButtonSize;
    leftIcon: string;
    rightIcon: string;
    text: string;
    disabled: boolean;
}
