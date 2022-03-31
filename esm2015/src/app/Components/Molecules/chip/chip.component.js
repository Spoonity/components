import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagType } from '../../../utils/enums';
export class ChipComponent {
    constructor() {
        this.mode = TagType.default;
        this.onCloseEvent = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL2NoaXAvY2hpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPL0MsTUFBTSxPQUFPLGFBQWE7SUFheEI7UUFSUyxTQUFJLEdBQVcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUc5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSWpDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHVaQUFvQzs7YUFFckM7Ozs7bUJBR0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsTUFBTTsyQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFnVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWNoaXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoaXAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gVGFnVHlwZS5kZWZhdWx0O1xuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIG9uQ2xvc2VFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25DaGVja0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc3R5bGVzOiB7ICd3aWR0aC5weCc6IG51bWJlcjsgJ2hlaWdodC5weCc6IG51bWJlcjsgZmlsbDogc3RyaW5nIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlcyA9IHsgJ3dpZHRoLnB4JzogMjAsICdoZWlnaHQucHgnOiAyMCwgZmlsbDogJyMwRDBDMEInfTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5vbkNsb3NlRXZlbnQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGNoZWNrQ2hhbmdlKGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBlO1xuICAgIHRoaXMub25DaGVja0V2ZW50LmVtaXQoZSk7XG4gIH1cblxufVxuIl19