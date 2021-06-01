import { Input, Directive, ViewChild } from '@angular/core';
export class FormFieldManager {
    constructor() {
        /* size specification (large or medium) -- default to medium if not provided */
        this.size = 'medium';
        /* value */
        this.value = null;
        /* ControlValueAccessor: onChange function **/
        this.onChange = () => { };
        /* ControlValueAccessor: onTouched function */
        this.onTouched = () => { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXRFLE1BQU0sT0FBZ0IsZ0JBQWdCO0lBRHRDO1FBRUUsK0VBQStFO1FBQ3RFLFNBQUksR0FBdUIsUUFBUSxDQUFDO1FBa0M3QyxXQUFXO1FBQ1gsVUFBSyxHQUFHLElBQUksQ0FBQztRQUtiLDhDQUE4QztRQUM5QyxhQUFRLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLDhDQUE4QztRQUM5QyxjQUFTLEdBQVEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBZ0Q3QixDQUFDO0lBOUNDOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FBQyxHQUFRO1FBQ2pCLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsTUFBTTtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNSLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7O1lBOUZGLFNBQVM7OzttQkFHUCxLQUFLO29CQUdMLEtBQUs7b0JBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7bUJBR0wsS0FBSzswQkFHTCxLQUFLO3lCQUdMLEtBQUs7a0JBR0wsS0FBSztrQkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBRUwsU0FBUyxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lucHV0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1GaWVsZE1hbmFnZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qIHNpemUgc3BlY2lmaWNhdGlvbiAobGFyZ2Ugb3IgbWVkaXVtKSAtLSBkZWZhdWx0IHRvIG1lZGl1bSBpZiBub3QgcHJvdmlkZWQgKi9cbiAgQElucHV0KCkgc2l6ZTogJ21lZGl1bScgfCAnbGFyZ2UnID0gJ21lZGl1bSc7XG5cbiAgLyogdGV4dCBmaWVsZCBsYWJlbCAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qIGVycm9yIG1lc3NhZ2UgKi9cbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IGxlZnQgaWNvbiAqL1xuICBASW5wdXQoKSBzdGFydEljb24/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHJpZ2h0IGljb24gKi9cbiAgQElucHV0KCkgZW5kSWNvbj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogaGludCBtZXNzYWdlICovXG4gIEBJbnB1dCgpIGhpbnQ/OiBzdHJpbmc7XG5cbiAgLyogb3B0aW9uYWw6IHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ7XG5cbiAgLyogbWluaW11bSB2YWx1ZSAqL1xuICBASW5wdXQoKSBtaW4/O1xuXG4gIC8qIG1heGltdW0gdmFsdWUgKi9cbiAgQElucHV0KCkgbWF4PztcblxuICAvKiByZWFkb25seSAqL1xuICBASW5wdXQoKSByZWFkb25seT86IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSB0ZXh0SW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgLyogdmFsdWUgKi9cbiAgdmFsdWUgPSBudWxsO1xuXG4gIC8qIGRpcnR5IHN0YXRlICovXG4gIGlzRGlydHk6IGJvb2xlYW47XG5cbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3I6IG9uQ2hhbmdlIGZ1bmN0aW9uICoqL1xuICBvbkNoYW5nZTogYW55ID0gKCkgPT4geyB9O1xuXG4gIC8qIENvbnRyb2xWYWx1ZUFjY2Vzc29yOiBvblRvdWNoZWQgZnVuY3Rpb24gKi9cbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgLyoqXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG92ZXJyaWRlOiByZWdpc3Rlck9uQ2hhbmdlXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3Igb3ZlcnJpZGU6IHJlZ2lzdGVyT25Ub3VjaGVkXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBvdmVycmlkZTogd3JpdGVWYWx1ZVxuICAgKi9cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG9iajtcbiAgICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBjaGFuZ2UgYWN0aW9uXG4gICAqL1xuICBjaGFuZ2VBY3Rpb24oJGV2ZW50KSB7XG4gICAgdGhpcy5vbkNoYW5nZSgkZXZlbnQpO1xuICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBkaXJ0eVxuICAgKi9cbiAgY2hlY2tEaXJ0eSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnIHx8IHRoaXMudmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgIHRoaXMuaXNEaXJ0eSA9ICB0aGlzLnZhbHVlLnRyaW0oKSAhPT0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEaXJ0eSA9IHRoaXMudmFsdWUgIT0gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuIl19