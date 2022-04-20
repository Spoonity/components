import { Component, EventEmitter, Input, Output } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        /** emits the current boolean statys of the checkbox */
        this.onChangeEvent = new EventEmitter();
    }
    onChange(e) {
        this.onChangeEvent.emit(e);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-checkbox',
                template: "<div nz-col [nzSpan]=\"8\"><label nz-checkbox [nzIndeterminate]=\"indeterminate\" [ngModel]=\"check\" (ngModelChange)=\"onChange($event)\" [nzValue]=\"value || text\">{{value || text}}</label></div>\n",
                styles: [""]
            },] }
];
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    indeterminate: [{ type: Input }],
    check: [{ type: Input }],
    value: [{ type: Input }],
    text: [{ type: Input }],
    onChangeEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCO1FBSEEsdURBQXVEO1FBQzdDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVsQyxDQUFDO0lBRWpCLFFBQVEsQ0FBQyxDQUFNO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsb05BQXdDOzthQUV6Qzs7Ozs0QkFHRSxLQUFLO29CQUdMLEtBQUs7b0JBR0wsS0FBSzttQkFHTCxLQUFLOzRCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQge1xuICAvKiogaWYgdGhlIHN0YXR1cyBpcyAnaW5kZXRlcm1pbmF0ZScgKHdpbGwgcHJpb3JpdGl6ZSB0aGlzIHN0YXR1cyBvdmVyIHRoZSAnY2hlY2snIHZhbHVlICovXG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG5cbiAgLyoqIGNoZWNrYm94IHN0YXR1cyAqL1xuICBASW5wdXQoKSBjaGVjazogYm9vbGVhbjtcblxuICAvKiogREVQUkVDQVRFRCAodXNlIFt0ZXh0XSkgdGhlIHZhbHVlIHRvIGJlIGRpc3BsYXllZCBiZXNpZGUgdGhlIGNoZWNrYm94ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgLyoqIHRoZSB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgYmVzaWRlIHRoZSBjaGVja2JveCAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqIGVtaXRzIHRoZSBjdXJyZW50IGJvb2xlYW4gc3RhdHlzIG9mIHRoZSBjaGVja2JveCAqL1xuICBAT3V0cHV0KCkgb25DaGFuZ2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUV2ZW50LmVtaXQoZSk7XG4gIH1cbn1cbiJdfQ==