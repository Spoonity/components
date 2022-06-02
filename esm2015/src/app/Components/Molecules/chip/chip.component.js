import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ChipComponent {
    constructor() {
        /* chip mode*/
        this.mode = 'default';
        /* emit action if the close button is clicked */
        this.onCloseEvent = new EventEmitter();
        /* emit action if the chip is checked */
        this.onCheckEvent = new EventEmitter();
    }
    ngOnInit() {
        this.styles = { 'width.px': 20, 'height.px': 20, fill: '#0D0C0B' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8sYUFBYTtJQTJCeEI7UUFqQkEsY0FBYztRQUNMLFNBQUksR0FBMEMsU0FBUyxDQUFDO1FBUWpFLGdEQUFnRDtRQUN0QyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFakQsd0NBQXdDO1FBQzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUlqQyxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQix1WkFBb0M7O2FBRXJDOzs7O21CQUdFLEtBQUs7b0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7c0JBR0wsS0FBSzt1QkFHTCxLQUFLOzJCQUdMLE1BQU07MkJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1jaGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qIGNoaXAgdGV4dCAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cbiAgLyogYmFja2dyb3VuZCBjb2xvciAqL1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qIGljb24gdG8gYXBwZWFyIG9uIHRoZSBsZWZ0IHNpZGUgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIC8qIGNoaXAgbW9kZSovXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XG5cbiAgLyogY2hlY2tlZCBzdGF0dXMgb2YgdGhlIGNoaXAgKHNob3dzIGEgY2hlY2ttYXJrIG9uIHRoZSBsZWZ0IG9yIGluIHBsYWNlIG9mIGljb24gaWYgc2V0IHRvIHRydWUpICovXG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgLyogZGlzYWJsZWQgc3RhdGUgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyogZW1pdCBhY3Rpb24gaWYgdGhlIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkICovXG4gIEBPdXRwdXQoKSBvbkNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiBlbWl0IGFjdGlvbiBpZiB0aGUgY2hpcCBpcyBjaGVja2VkICovXG4gIEBPdXRwdXQoKSBvbkNoZWNrRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzdHlsZXM6IHsgJ3dpZHRoLnB4JzogbnVtYmVyOyAnaGVpZ2h0LnB4JzogbnVtYmVyOyBmaWxsOiBzdHJpbmcgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0geyAnd2lkdGgucHgnOiAyMCwgJ2hlaWdodC5weCc6IDIwLCBmaWxsOiAnIzBEMEMwQid9O1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLm9uQ2xvc2VFdmVudC5lbWl0KHRydWUpO1xuICB9XG5cbiAgY2hlY2tDaGFuZ2UoZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGU7XG4gICAgdGhpcy5vbkNoZWNrRXZlbnQuZW1pdChlKTtcbiAgfVxufVxuIl19