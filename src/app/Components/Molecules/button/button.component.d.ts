import { OnInit } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    type: 'primary' | 'secondary' | 'link' | 'inverted' | 'default';
    size: 'large' | 'medium' | 'small';
    leftIcon: string;
    rightIcon: string;
    text: string;
    disabled: boolean;
    color: string;
    iconColor: string;
    constructor();
    ngOnInit(): void;
}
