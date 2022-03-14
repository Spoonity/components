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
                template: "<nz-tag\n  [nzMode]=\"mode\"\n  [nzChecked]=\"checked\"\n  [nzColor]=\"color\"\n  (nzOnClose)=\"onClose()\"\n  (nzCheckedChange)=\"checkChange($event)\"\n  [attr.disabled]=\"disabled\"\n>\n  <svg-icon\n    *ngIf=\"icon || checked\"\n    nz-icon\n    [name]=\"checked ? 'check' : icon\"\n    [svgStyle]=\"styles\"\n  ></svg-icon>\n  <span class=\"spt-spacing-x--1\">{{ text }}</span>\n</nz-tag>\n",
                styles: [".ant-tag{height:32px!important;line-height:32px!important;font-size:14px}"]
            },] }
];
ChipComponent.ctorParameters = () => [];
ChipComponent.propDecorators = {
    text: [{ type: Input }],
    color: [{ type: Input }],
    icon: [{ type: Input }],
    mode: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onCloseEvent: [{ type: Output }],
    onCheckEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGFBQWE7SUFheEI7UUFSUyxTQUFJLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUc5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWpDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQix1WkFBb0M7O2FBRXJDOzs7O21CQUdFLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLE1BQU07MkJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1jaGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9IFRhZ1R5cGUuZGVmYXVsdDtcbiAgQElucHV0KCkgY2hlY2tlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBvbkNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQ2hlY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN0eWxlczogeyAnd2lkdGgucHgnOiBudW1iZXI7ICdoZWlnaHQucHgnOiBudW1iZXI7IH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IHsgJ3dpZHRoLnB4JzogMjAsICdoZWlnaHQucHgnOiAyMCB9XG4gIH1cblxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMub25DbG9zZUV2ZW50LmVtaXQodHJ1ZSk7XG4gIH1cblxuICBjaGVja0NoYW5nZShlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gZTtcbiAgICB0aGlzLm9uQ2hlY2tFdmVudC5lbWl0KGUpO1xuICB9XG5cbn1cbiJdfQ==