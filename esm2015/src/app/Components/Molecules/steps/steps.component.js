import { Component, EventEmitter, Input, Output } from '@angular/core';
export class StepsComponent {
    constructor() {
        this.type = 'navigation';
        this.direction = 'horizontal';
        this.onIndexChangeEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    onIndexChange(event) {
        this.onIndexChangeEvent.emit(event);
    }
}
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-steps',
                template: "<nz-steps [nzCurrent]=\"current\" [nzType]=\"type\" (nzIndexChange)=\"onIndexChange($event)\" [nzDirection]=\"direction\">\n    <ng-container *ngFor=\"let step of steps\">\n        <nz-step [nzTitle]=\"step.title\" [nzDescription]=\"step.description\"></nz-step>\n    </ng-container>\n</nz-steps>\n",
                styles: ["nz-step .ant-steps-item-finish .ant-steps-item-icon{background-color:#fff;border-color:#4caf50!important}"]
            },] }
];
StepsComponent.ctorParameters = () => [];
StepsComponent.propDecorators = {
    current: [{ type: Input }],
    steps: [{ type: Input }],
    type: [{ type: Input }],
    direction: [{ type: Input }],
    onIndexChangeEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQUlTLFNBQUksR0FBWSxZQUFZLENBQUM7UUFDN0IsY0FBUyxHQUFZLFlBQVksQ0FBQztRQUNqQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBTjFDLENBQUM7SUFRZixRQUFRO0lBQ1IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBcEJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc1RBQXFDOzthQUV0Qzs7OztzQkFLRSxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zdGVwcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgY3VycmVudDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwczogQXJyYXk8SVN0ZXBzPjtcbiAgQElucHV0KCkgdHlwZSA6IHN0cmluZyA9ICduYXZpZ2F0aW9uJztcbiAgQElucHV0KCkgZGlyZWN0aW9uIDogc3RyaW5nID0gJ2hvcml6b250YWwnO1xuICBAT3V0cHV0KCkgb25JbmRleENoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBvbkluZGV4Q2hhbmdlKGV2ZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMub25JbmRleENoYW5nZUV2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG4iXX0=