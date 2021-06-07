import { ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare abstract class FormFieldManager implements ControlValueAccessor, OnChanges {
    private _renderer;
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
    protected constructor(_renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
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
