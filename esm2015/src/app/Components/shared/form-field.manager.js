import { Input, Directive, ViewChild, Renderer2 } from '@angular/core';
export class FormFieldManager {
    constructor(_renderer) {
        this._renderer = _renderer;
        /* size specification (large or medium) -- default to medium if not provided */
        this.size = 'medium';
        /* value */
        this.value = null;
        /* ControlValueAccessor: onChange function **/
        this.onChange = () => { };
        /* ControlValueAccessor: onTouched function */
        this.onTouched = () => { };
    }
    ngOnChanges(changes) {
        if (changes.isDisabled) {
            this.setDisabledState(changes.isDisabled.currentValue);
        }
    }
    /**
     * ControlValueAccessor override: registerOnChange
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * ControlValueAccessor override: registerOnTouched
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * ControlValueAccessor override: writeValue
     */
    writeValue(obj) {
        if (obj !== undefined) {
            this.value = obj;
            this.checkDirty();
        }
    }
    /**
     * on change action
     */
    changeAction($event) {
        this.onChange($event);
        this.checkDirty();
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.textInput) {
            this._renderer.setProperty(this.textInput.nativeElement, 'disabled', isDisabled);
        }
    }
    /**
     * check dirty
     */
    checkDirty() {
        if (typeof this.value === 'string' || this.value instanceof String) {
            this.isDirty = this.value.trim() !== '';
        }
        else {
            this.isDirty = this.value != null;
        }
    }
}
FormFieldManager.decorators = [
    { type: Directive }
];
FormFieldManager.ctorParameters = () => [
    { type: Renderer2 }
];
FormFieldManager.propDecorators = {
    size: [{ type: Input }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    startIcon: [{ type: Input }],
    endIcon: [{ type: Input }],
    hint: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    readonly: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    textInput: [{ type: ViewChild, args: ['input',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFFLFNBQVMsRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFJM0csTUFBTSxPQUFnQixnQkFBZ0I7SUFtRHBDLFlBQ1UsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQW5EOUIsK0VBQStFO1FBQ3RFLFNBQUksR0FBaUMsUUFBUSxDQUFDO1FBcUN2RCxXQUFXO1FBQ1gsVUFBSyxHQUFHLElBQUksQ0FBQztRQUtiLDhDQUE4QztRQUM5QyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLDhDQUE4QztRQUM5QyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBSzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7OztZQS9HRixTQUFTOzs7WUFIdUMsU0FBUzs7O21CQU12RCxLQUFLO29CQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7bUJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7a0JBR0wsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7OEJBR0wsS0FBSzt3QkFFTCxTQUFTLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1GaWVsZE1hbmFnZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgLyogc2l6ZSBzcGVjaWZpY2F0aW9uIChsYXJnZSBvciBtZWRpdW0pIC0tIGRlZmF1bHQgdG8gbWVkaXVtIGlmIG5vdCBwcm92aWRlZCAqL1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnID0gJ21lZGl1bSc7XG5cbiAgLyogdGV4dCBmaWVsZCBsYWJlbCAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qIGVycm9yIG1lc3NhZ2UgKi9cbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IGxlZnQgaWNvbiAqL1xuICBASW5wdXQoKSBzdGFydEljb24/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHJpZ2h0IGljb24gKi9cbiAgQElucHV0KCkgZW5kSWNvbj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogaGludCBtZXNzYWdlICovXG4gIEBJbnB1dCgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ7XG5cbiAgLyogbWluaW11bSB2YWx1ZSAqL1xuICBASW5wdXQoKSBtaW4/O1xuXG4gIC8qIG1heGltdW0gdmFsdWUgKi9cbiAgQElucHV0KCkgbWF4PztcblxuICAvKiByZWFkb25seSAqL1xuICBASW5wdXQoKSByZWFkb25seT86IGJvb2xlYW47XG5cbiAgLyoqIGJhY2tncm91bmQgY29sb3IgKiovXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgdGV4dElucHV0OiBFbGVtZW50UmVmO1xuXG4gIC8qIHZhbHVlICovXG4gIHZhbHVlID0gbnVsbDtcblxuICAvKiBkaXJ0eSBzdGF0ZSAqL1xuICBpc0RpcnR5OiBib29sZWFuO1xuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yOiBvbkNoYW5nZSBmdW5jdGlvbiAqKi9cbiAgb25DaGFuZ2U6IGFueSA9ICgpID0+IHsgfTtcblxuICAvKiBDb250cm9sVmFsdWVBY2Nlc3Nvcjogb25Ub3VjaGVkIGZ1bmN0aW9uICovXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4geyB9O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShjaGFuZ2VzLmlzRGlzYWJsZWQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3Igb3ZlcnJpZGU6IHJlZ2lzdGVyT25DaGFuZ2VcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBvdmVycmlkZTogcmVnaXN0ZXJPblRvdWNoZWRcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG92ZXJyaWRlOiB3cml0ZVZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGNoYW5nZSBhY3Rpb25cbiAgICovXG4gIGNoYW5nZUFjdGlvbigkZXZlbnQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKCRldmVudCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIGlmICh0aGlzLnRleHRJbnB1dCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy50ZXh0SW5wdXQubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGRpcnR5XG4gICAqL1xuICBjaGVja0RpcnR5KCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3N0cmluZycgfHwgdGhpcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgdGhpcy5pc0RpcnR5ID0gIHRoaXMudmFsdWUudHJpbSgpICE9PSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RpcnR5ID0gdGhpcy52YWx1ZSAhPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=