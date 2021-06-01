import { Input, Directive } from '@angular/core';
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
    isDisabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJakQsTUFBTSxPQUFnQixnQkFBZ0I7SUFEdEM7UUFFRSwrRUFBK0U7UUFDdEUsU0FBSSxHQUF1QixRQUFRLENBQUM7UUF1QjdDLFdBQVc7UUFDWCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBS2IsOENBQThDO1FBQzlDLGFBQVEsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFMUIsOENBQThDO1FBQzlDLGNBQVMsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFnRDdCLENBQUM7SUE5Q0M7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxNQUFNO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUFuRkYsU0FBUzs7O21CQUdQLEtBQUs7b0JBR0wsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzttQkFHTCxLQUFLOzBCQUdMLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRm9ybUZpZWxkTWFuYWdlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyogc2l6ZSBzcGVjaWZpY2F0aW9uIChsYXJnZSBvciBtZWRpdW0pIC0tIGRlZmF1bHQgdG8gbWVkaXVtIGlmIG5vdCBwcm92aWRlZCAqL1xuICBASW5wdXQoKSBzaXplOiAnbWVkaXVtJyB8ICdsYXJnZScgPSAnbWVkaXVtJztcblxuICAvKiB0ZXh0IGZpZWxkIGxhYmVsICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyogZXJyb3IgbWVzc2FnZSAqL1xuICBASW5wdXQoKSBlcnJvcj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogbGVmdCBpY29uICovXG4gIEBJbnB1dCgpIHN0YXJ0SWNvbj86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogcmlnaHQgaWNvbiAqL1xuICBASW5wdXQoKSBlbmRJY29uPzogc3RyaW5nO1xuXG4gIC8qIG9wdGlvbmFsOiBoaW50IG1lc3NhZ2UgKi9cbiAgQElucHV0KCkgaGludD86IHN0cmluZztcblxuICAvKiBvcHRpb25hbDogcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyogaXMgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDtcblxuICAvKiB2YWx1ZSAqL1xuICB2YWx1ZSA9IG51bGw7XG5cbiAgLyogZGlydHkgc3RhdGUgKi9cbiAgaXNEaXJ0eTogYm9vbGVhbjtcblxuICAvKiBDb250cm9sVmFsdWVBY2Nlc3Nvcjogb25DaGFuZ2UgZnVuY3Rpb24gKiovXG4gIG9uQ2hhbmdlOiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3I6IG9uVG91Y2hlZCBmdW5jdGlvbiAqL1xuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHsgfTtcblxuICAvKipcbiAgICogQ29udHJvbFZhbHVlQWNjZXNzb3Igb3ZlcnJpZGU6IHJlZ2lzdGVyT25DaGFuZ2VcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvciBvdmVycmlkZTogcmVnaXN0ZXJPblRvdWNoZWRcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIG92ZXJyaWRlOiB3cml0ZVZhbHVlXG4gICAqL1xuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlID0gb2JqO1xuICAgICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG9uIGNoYW5nZSBhY3Rpb25cbiAgICovXG4gIGNoYW5nZUFjdGlvbigkZXZlbnQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKCRldmVudCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGRpcnR5XG4gICAqL1xuICBjaGVja0RpcnR5KCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ3N0cmluZycgfHwgdGhpcy52YWx1ZSBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgdGhpcy5pc0RpcnR5ID0gIHRoaXMudmFsdWUudHJpbSgpICE9PSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0RpcnR5ID0gdGhpcy52YWx1ZSAhPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=