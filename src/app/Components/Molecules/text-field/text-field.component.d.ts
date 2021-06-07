import { OnInit, Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
export declare class TextFieldComponent extends FormFieldManager implements OnInit {
    constructor(_renderer: Renderer2);
    type: string;
    step: string;
    maxlength: number;
    ngOnInit(): void;
    /**
     * get current value length
     */
    getLength(): number;
}
