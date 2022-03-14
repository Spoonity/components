import { OnInit } from '@angular/core';
import { AvatarSize } from '../../../utils/enums';
export declare class AvatarComponent implements OnInit {
    size: AvatarSize;
    text: string;
    color: string;
    backgroundColor: string;
    styles: {
        'background-color': string;
        color: string;
    };
    constructor();
    ngOnInit(): void;
}
