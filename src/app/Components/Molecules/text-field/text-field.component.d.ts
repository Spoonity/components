import { OnInit } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
export declare class TextFieldComponent extends FormFieldManager implements OnInit {
    constructor();
    type: string;
    max: number;
    ngOnInit(): void;
    /**
     * get current value length
     */
    getLength(): number;
}
