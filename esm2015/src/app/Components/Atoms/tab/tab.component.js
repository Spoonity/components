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
                template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"tab.name\" [nzDisabled]=\"tab.disabled\"></nz-tab>\n</nz-tabset>\n",
                styles: [""]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }],
    index: [{ type: Input }],
    selectedIndexChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTzdFLE1BQU0sT0FBTyxZQUFZO0lBRXZCO1FBTVMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBUDNELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsdU9BQW1DOzthQUVwQzs7OzttQkFRRSxLQUFLO29CQUNMLEtBQUs7a0NBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgdGFiczoge25hbWU6IHN0cmluZywgZGlzYWJsZWQ6IGJvb2xlYW59W107XG4gIEBJbnB1dCgpIGluZGV4ID0gMDtcbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLy8gdGFicyA9IFtcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOiAnVGFiIDEnLFxuICAvLyAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gIC8vICAgfSxcbiAgLy8gICB7XG4gIC8vICAgICBuYW1lOiAnVGFiIDInLFxuICAvLyAgICAgZGlzYWJsZWQ6IHRydWVcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIG5hbWU6ICdUYWIgMycsXG4gIC8vICAgICBkaXNhYmxlZDogZmFsc2VcbiAgLy8gICB9XG4gIC8vIF07XG5cbn1cbiJdfQ==