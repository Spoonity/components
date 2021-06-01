import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagType } from '../../../utils/enums';
export class ChipComponent {
    constructor() {
        this.mode = TagType.default;
        this.onCloseEvent = new EventEmitter();
        this.onCheckEvent = new EventEmitter();
    }
    ngOnInit() {
        this.styles = { 'width.px': 20, 'height.px': 20 };
    }
    onClose() {
        this.onCloseEvent.emit(true);
    }
    checkChange(e) {
        this.checked = e;
        this.onCheckEvent.emit(e);
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-chip',
                template: "<nz-tag\n  [nzMode]=\"mode\"\n  [nzChecked]=\"checked\"\n  (nzOnClose)=\"onClose()\"\n  (nzCheckedChange)=\"checkChange($event)\"\n  [attr.disabled]=\"disabled\"\n>\n  <svg-icon\n    *ngIf=\"icon || checked\"\n    nz-icon\n    [name]=\"checked ? 'check' : icon\"\n    [svgStyle]=\"styles\"\n  ></svg-icon>\n  <span class=\"spt-spacing-x--1\">{{ text }}</span>\n</nz-tag>\n",
                styles: [".ant-tag{height:32px!important;line-height:32px!important;font-size:14px}"]
            },] }
];
ChipComponent.ctorParameters = () => [];
ChipComponent.propDecorators = {
    text: [{ type: Input }],
    icon: [{ type: Input }],
    mode: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onCloseEvent: [{ type: Output }],
    onCheckEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGFBQWE7SUFZeEI7UUFSUyxTQUFJLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUc5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWpDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixnWUFBb0M7O2FBRXJDOzs7O21CQUdFLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxNQUFNOzJCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWdUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtY2hpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSBUYWdUeXBlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgb25DbG9zZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkNoZWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzdHlsZXM6IHsgJ3dpZHRoLnB4JzogbnVtYmVyOyAnaGVpZ2h0LnB4JzogbnVtYmVyOyB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdHlsZXMgPSB7ICd3aWR0aC5weCc6IDIwLCAnaGVpZ2h0LnB4JzogMjAgfVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLm9uQ2xvc2VFdmVudC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2hlY2tDaGFuZ2UoZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGU7XG4gICAgdGhpcy5vbkNoZWNrRXZlbnQuZW1pdChlKTtcbiAgfVxuXG59XG4iXX0=