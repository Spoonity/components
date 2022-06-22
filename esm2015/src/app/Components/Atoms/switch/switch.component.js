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
                template: "<nz-switch [(ngModel)]=\"on\" (ngModelChange)=\"change()\" [nzDisabled]=\"disabled\"></nz-switch>\n",
                styles: ["nz-switch{margin:10px}"]
            },] }
];
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    on: [{ type: Input }],
    disabled: [{ type: Input }],
    onChanged: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxlQUFlO0lBRTFCO1FBSVMsT0FBRSxHQUFZLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFOekQsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUtELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK0dBQXNDOzthQUV2Qzs7OztpQkFPRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIEBJbnB1dCgpIG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBAT3V0cHV0KCkgb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMub25DaGFuZ2VkLmVtaXQodGhpcy5vbik7XG4gIH1cbn1cbiJdfQ==