import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare abstract class FormFieldManager implements ControlValueAccessor {
    size: 'medium' | 'large';
    label: string;
    error?: string;
    startIcon?: string;
    endIcon?: string;
    hint?: string;
    placeholder?: string;
    isDisabled: any;
    min?: any;
    max?: any;
    readonly?: boolean;
    textInput: ElementRef;
    value: any;
    isDirty: boolean;
    onChange: any;
    onTouched: any;
    /**
     * ControlValueAccessor override: registerOnChange
     */
    registerOnChange(fn: any): void;
    /**
     * ControlValueAccessor override: registerOnTouched
     */
    registerOnTouched(fn: any): void;
    /**
     * ControlValueAccessor override: writeValue
     */
    writeValue(obj: any): void;
    /**
     * on change action
     */
    changeAction($event: any): void;
    setDisabledState(isDisabled: boolean): void;
    /**
     * check dirty
     */
    checkDirty(): void;
}
