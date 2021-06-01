import { OnInit } from '@angular/core';
import { ProgressType } from '../../../utils/enums';
export declare class ProgressBarComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    percent: number;
    info: Boolean;
    type: ProgressType;
}
