import { Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
export declare class RadioComponent extends FormFieldManager {
    direction: 'vertical' | 'horizontal';
    options: {
        value: string;
        text: string;
    }[];
    constructor(_renderer: Renderer2);
}
