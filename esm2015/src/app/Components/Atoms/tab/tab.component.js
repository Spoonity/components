import { Component, EventEmitter, Input, Output } from '@angular/core';
export class TabComponent {
    constructor() {
        this.index = 0;
        this.selectedIndexChange = new EventEmitter();
        this.orientation = 'horizontal';
        this.TAB_POSITION = {
            vertical: 'left',
            horizontal: 'top'
        };
    }
    ngOnInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-tab',
                template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\"\n           [nzTabPosition]=\"TAB_POSITION[orientation]\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"titleTemplate\" [nzDisabled]=\"tab.disabled\">\n        <ng-template #titleTemplate>\n            <spt-tooltip [title]=\"tab.tooltip\">\n                <div class=\"title-container\">\n                    <div *ngIf=\"tab.icon\" class=\"icon\">\n                        <spt-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\" [size]=\"16\" [color]=\"tab.iconColor || '#FF9900'\"></spt-icon>\n                    </div>\n                    <div>{{ tab.name }}</div>\n                </div>\n            </spt-tooltip>\n        </ng-template>\n    </nz-tab>\n</nz-tabset>\n",
                styles: [".icon{transform:translateY(-4px)}.title-container{display:flex;align-items:center}"]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }],
    index: [{ type: Input }],
    selectedIndexChange: [{ type: Output }],
    orientation: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxZQUFZO0lBV3ZCO1FBVFMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xFLGdCQUFXLEdBQThCLFlBQVksQ0FBQztRQUUvRCxpQkFBWSxHQUE0QztZQUN0RCxRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDO0lBRWMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIscXhCQUFtQzs7YUFFcEM7Ozs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO2tDQUNMLE1BQU07MEJBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFiczoge25hbWU6IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBpY29uPzogc3RyaW5nLCBpY29uQ29sb3I/OiBzdHJpbmcsIHRvb2x0aXA/OiBzdHJpbmd9W107XG4gIEBJbnB1dCgpIGluZGV4ID0gMDtcbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAndmVydGljYWwnIHwgJ2hvcml6b250YWwnID0gJ2hvcml6b250YWwnO1xuXG4gIFRBQl9QT1NJVElPTjoge1tvcmllbnRhdGlvbjogc3RyaW5nXTogJ3RvcCcgfCAnbGVmdCd9ID0ge1xuICAgIHZlcnRpY2FsOiAnbGVmdCcsXG4gICAgaG9yaXpvbnRhbDogJ3RvcCdcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=