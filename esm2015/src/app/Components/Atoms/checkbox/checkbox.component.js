import { Component, EventEmitter, Input, Output } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.span = 8;
        this.onChangeEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(e) {
        this.onChangeEvent.emit(e);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-checkbox',
                template: "<div nz-col [nzSpan]=\"span\"><label nz-checkbox [nzIndeterminate]=\"indeterminate\" [ngModel]=\"check\" (ngModelChange)=\"onChange($event)\" [nzValue]=\"value\">{{value}}</label></div>",
                styles: [""]
            },] }
];
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    indeterminate: [{ type: Input }],
    check: [{ type: Input }],
    value: [{ type: Input }],
    onChangeEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUI7UUFLQSxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBWGxDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFVRCxRQUFRLENBQUMsQ0FBTTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHFNQUF3Qzs7YUFFekM7Ozs7NEJBVUUsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7NEJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNwYW4gPSA4O1xuXG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNoZWNrOiBib29sZWFuO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25DaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUV2ZW50LmVtaXQoZSk7XG4gIH1cblxufVxuIl19