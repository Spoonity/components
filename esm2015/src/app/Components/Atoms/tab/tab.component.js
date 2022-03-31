import { Component, EventEmitter, Input, Output } from '@angular/core';
export class TabComponent {
    constructor() {
        this.index = 0;
        this.selectedIndexChange = new EventEmitter();
    }
    ngOnInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-tab',
                template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"titleTemplate\" [nzDisabled]=\"tab.disabled\">\n        <ng-template #titleTemplate>\n            <div class=\"title-container\">\n                <div *ngIf=\"tab.icon\" class=\"icon\">\n                    <spt-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\" [size]=\"16\" color=\"#FF9900\"></spt-icon>\n                </div>\n                <div>{{ tab.name }}</div>\n            </div>\n        </ng-template>\n    </nz-tab>\n</nz-tabset>\n",
                styles: [".icon{transform:translateY(1px)}.title-container{display:flex;align-items:center}"]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }],
    index: [{ type: Input }],
    selectedIndexChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxZQUFZO0lBS3ZCO1FBSFMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRTNELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsK2xCQUFtQzs7YUFFcEM7Ozs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO2tDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRhYnM6IHtuYW1lOiBzdHJpbmcsIGRpc2FibGVkPzogYm9vbGVhbiwgaWNvbj86IHN0cmluZ31bXTtcbiAgQElucHV0KCkgaW5kZXggPSAwO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=