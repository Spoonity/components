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
    textInput: [{ type: ViewChild, args: ['input',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFFLFNBQVMsRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFJM0csTUFBTSxPQUFnQixnQkFBZ0I7SUFnRHBDLFlBQ1UsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWhEOUIsK0VBQStFO1FBQ3RFLFNBQUksR0FBdUIsUUFBUSxDQUFDO1FBa0M3QyxXQUFXO1FBQ1gsVUFBSyxHQUFHLElBQUksQ0FBQztRQUtiLDhDQUE4QztRQUM5QyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLDhDQUE4QztRQUM5QyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBSzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztTQUNuQztJQUNILENBQUM7OztZQTVHRixTQUFTOzs7WUFIdUMsU0FBUzs7O21CQU12RCxLQUFLO29CQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7bUJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7a0JBR0wsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsU0FBUyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtRmllbGRNYW5hZ2VyIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XG4gIC8qIHNpemUgc3BlY2lmaWNhdGlvbiAobGFyZ2Ugb3IgbWVkaXVtKSAtLSBkZWZhdWx0IHRvIG1lZGl1bSBpZiBub3QgcHJvdmlkZWQgKi9cbiAgQElucHV0KCkgc2l6ZTogJ21lZGl1bScgfCAnbGFyZ2UnID0gJ21lZGl1bSc7XG5cbiAgLyogdGV4dCBmaWVsZCBsYWJlbCAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qIGVycm9yIG1lc3NhZ2UgKi9cbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IGxlZnQgaWNvbiAqL1xuICBASW5wdXQoKSBzdGFydEljb24/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHJpZ2h0IGljb24gKi9cbiAgQElucHV0KCkgZW5kSWNvbj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogaGludCBtZXNzYWdlICovXG4gIEBJbnB1dCgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ7XG5cbiAgLyogbWluaW11bSB2YWx1ZSAqL1xuICBASW5wdXQoKSBtaW4/O1xuXG4gIC8qIG1heGltdW0gdmFsdWUgKi9cbiAgQElucHV0KCkgbWF4PztcblxuICAvKiByZWFkb25seSAqL1xuICBASW5wdXQoKSByZWFkb25seT86IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSB0ZXh0SW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyogdmFsdWUgKi9cbiAgdmFsdWUgPSBudWxsO1xuXG4gIC8qIGRpcnR5IHN0YXRlICovXG4gIGlzRGlydHk6IGJvb2xlYW47XG5cbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3I6IG9uQ2hhbmdlIGZ1bmN0aW9uICoqL1xuICBvbkNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yOiBvblRvdWNoZWQgZnVuY3Rpb24gKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGNoYW5nZXMuaXNEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBvdmVycmlkZTogcmVnaXN0ZXJPbkNoYW5nZVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG92ZXJyaWRlOiByZWdpc3Rlck9uVG91Y2hlZFxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3Igb3ZlcnJpZGU6IHdyaXRlVmFsdWVcbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogb24gY2hhbmdlIGFjdGlvblxuICAgKi9cbiAgY2hhbmdlQWN0aW9uKCRldmVudCkge1xuICAgIHRoaXMub25DaGFuZ2UoJGV2ZW50KTtcbiAgICB0aGlzLmNoZWNrRGlydHkoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMudGV4dElucHV0KSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnRleHRJbnB1dC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgZGlydHlcbiAgICovXG4gIGNoZWNrRGlydHkoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnc3RyaW5nJyB8fCB0aGlzLnZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSAgdGhpcy52YWx1ZS50cmltKCkgIT09ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRGlydHkgPSB0aGlzLnZhbHVlICE9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==