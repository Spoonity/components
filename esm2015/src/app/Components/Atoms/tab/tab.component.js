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
                template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\"\n           [nzTabPosition]=\"TAB_POSITION[orientation]\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"titleTemplate\" [nzDisabled]=\"tab.disabled\">\n        <ng-template #titleTemplate>\n            <spt-tooltip [title]=\"tab.tooltip\">\n                <div class=\"title-container\">\n                    <div *ngIf=\"tab.icon\" class=\"icon\">\n                        <spt-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\" [size]=\"16\" color=\"#FF9900\"></spt-icon>\n                    </div>\n                    <div>{{ tab.name }}</div>\n                </div>\n            </spt-tooltip>\n        </ng-template>\n    </nz-tab>\n</nz-tabset>\n",
                styles: [".icon{transform:translateY(1px)}.title-container{display:flex;align-items:center}"]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }],
    index: [{ type: Input }],
    selectedIndexChange: [{ type: Output }],
    orientation: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxZQUFZO0lBV3ZCO1FBVFMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xFLGdCQUFXLEdBQThCLFlBQVksQ0FBQztRQUUvRCxpQkFBWSxHQUE0QztZQUN0RCxRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDO0lBRWMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsZ3dCQUFtQzs7YUFFcEM7Ozs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO2tDQUNMLE1BQU07MEJBQ04sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFiczoge25hbWU6IHN0cmluZywgZGlzYWJsZWQ/OiBib29sZWFuLCBpY29uPzogc3RyaW5nLCB0b29sdGlwPzogc3RyaW5nfVtdO1xuICBASW5wdXQoKSBpbmRleCA9IDA7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcblxuICBUQUJfUE9TSVRJT046IHtbb3JpZW50YXRpb246IHN0cmluZ106ICd0b3AnIHwgJ2xlZnQnfSA9IHtcbiAgICB2ZXJ0aWNhbDogJ2xlZnQnLFxuICAgIGhvcml6b250YWw6ICd0b3AnXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19