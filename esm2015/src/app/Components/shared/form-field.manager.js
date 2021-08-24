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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFFLFNBQVMsRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFJM0csTUFBTSxPQUFnQixnQkFBZ0I7SUFtRHBDLFlBQ1UsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQW5EOUIsK0VBQStFO1FBQ3RFLFNBQUksR0FBdUIsUUFBUSxDQUFDO1FBcUM3QyxXQUFXO1FBQ1gsVUFBSyxHQUFHLElBQUksQ0FBQztRQUtiLDhDQUE4QztRQUM5QyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLDhDQUE4QztRQUM5QyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBSzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7OztZQS9HRixTQUFTOzs7WUFIdUMsU0FBUzs7O21CQU12RCxLQUFLO29CQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7bUJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7a0JBR0wsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7OEJBR0wsS0FBSzt3QkFFTCxTQUFTLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1GaWVsZE1hbmFnZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcbiAgLyogc2l6ZSBzcGVjaWZpY2F0aW9uIChsYXJnZSBvciBtZWRpdW0pIC0tIGRlZmF1bHQgdG8gbWVkaXVtIGlmIG5vdCBwcm92aWRlZCAqL1xuICBASW5wdXQoKSBzaXplOiAnbWVkaXVtJyB8ICdsYXJnZScgPSAnbWVkaXVtJztcblxuICAvKiB0ZXh0IGZpZWxkIGxhYmVsICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyogZXJyb3IgbWVzc2FnZSAqL1xuICBASW5wdXQoKSBlcnJvcj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogbGVmdCBpY29uICovXG4gIEBJbnB1dCgpIHN0YXJ0SWNvbj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogcmlnaHQgaWNvbiAqL1xuICBASW5wdXQoKSBlbmRJY29uPzogc3RyaW5nO1xuXG4gIC8qIG9wdGlvbmFsOiBoaW50IG1lc3NhZ2UgKi9cbiAgQElucHV0KCkgaGludD86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyogaXMgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDtcblxuICAvKiBtaW5pbXVtIHZhbHVlICovXG4gIEBJbnB1dCgpIG1pbj87XG5cbiAgLyogbWF4aW11bSB2YWx1ZSAqL1xuICBASW5wdXQoKSBtYXg/O1xuXG4gIC8qIHJlYWRvbmx5ICovXG4gIEBJbnB1dCgpIHJlYWRvbmx5PzogYm9vbGVhbjtcblxuICAvKiogYmFja2dyb3VuZCBjb2xvciAqKi9cbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSB0ZXh0SW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyogdmFsdWUgKi9cbiAgdmFsdWUgPSBudWxsO1xuXG4gIC8qIGRpcnR5IHN0YXRlICovXG4gIGlzRGlydHk6IGJvb2xlYW47XG5cbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3I6IG9uQ2hhbmdlIGZ1bmN0aW9uICoqL1xuICBvbkNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yOiBvblRvdWNoZWQgZnVuY3Rpb24gKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGNoYW5nZXMuaXNEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBvdmVycmlkZTogcmVnaXN0ZXJPbkNoYW5nZVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG92ZXJyaWRlOiByZWdpc3Rlck9uVG91Y2hlZFxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3Igb3ZlcnJpZGU6IHdyaXRlVmFsdWVcbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogb24gY2hhbmdlIGFjdGlvblxuICAgKi9cbiAgY2hhbmdlQWN0aW9uKCRldmVudCkge1xuICAgIHRoaXMub25DaGFuZ2UoJGV2ZW50KTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMudGV4dElucHV0KSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgZGlydHlcbiAgICovXG4gIGNoZWNrRGlydHkoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnc3RyaW5nJyB8fCB0aGlzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSAgdGhpcy52YWx1ZS50cmltKCkgIT09ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSB0aGlzLnZhbHVlICE9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==