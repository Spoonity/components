import { Component, EventEmitter, Input, Output } from '@angular/core';
export class SwitchComponent {
    constructor() {
        this.on = false;
        this.onChanged = new EventEmitter();
    }
    ngOnInit() {
    }
    change() {
        this.onChanged.emit(this.on);
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-switch',
                template: "<nz-switch [(ngModel)]=\"on\" (ngModelChange)=\"change()\"></nz-switch>\n",
                styles: ["nz-switch{margin:10px}"]
            },] }
];
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    on: [{ type: Input }],
    onChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBSVMsT0FBRSxHQUFZLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFMekQsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUlELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIscUZBQXNDOzthQUV2Qzs7OztpQkFPRSxLQUFLO3dCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc3dpdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXRjaC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBASW5wdXQoKSBvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMub25DaGFuZ2VkLmVtaXQodGhpcy5vbik7XG4gIH1cbn1cbiJdfQ==