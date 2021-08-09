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
                template: "<nz-steps [nzCurrent]=\"current\" [nzType]=\"type\" (nzIndexChange)=\"onIndexChange($event)\" [nzDirection]=\"direction\">\n    <ng-container *ngFor=\"let step of steps; let idx = index\">\n        <!--- if status is not provided, do default -->\n        <nz-step *ngIf=\"!step.status\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n\n        <!--- if status is provided, use that status -->\n        <nz-step *ngIf=\"step.status\" [nzStatus]=\"current === idx ? 'process' : (step.status || 'wait')\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n    </ng-container>\n</nz-steps>\n",
                styles: ["nz-step .ant-steps-item-finish .ant-steps-item-icon{background-color:#fff;border-color:#4caf50!important}nz-step{-webkit-user-select:none;-moz-user-select:none;user-select:none}"]
            },] }
];
StepsComponent.ctorParameters = () => [];
StepsComponent.propDecorators = {
    current: [{ type: Input }],
    steps: [{ type: Input }],
    type: [{ type: Input }],
    direction: [{ type: Input }],
    preventFutureSteps: [{ type: Input }],
    onIndexChangeEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQUlTLFNBQUksR0FBVyxZQUFZLENBQUM7UUFDNUIsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUVoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBUDFDLENBQUM7SUFTZixRQUFRO0lBQ1IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaXdCQUFxQzs7YUFFdEM7Ozs7c0JBS0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zdGVwcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgY3VycmVudDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGVwczogQXJyYXk8SVN0ZXBzPjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ25hdmlnYXRpb24nO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZyA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgcHJldmVudEZ1dHVyZVN0ZXBzOiBib29sZWFuO1xuICBAT3V0cHV0KCkgb25JbmRleENoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBvbkluZGV4Q2hhbmdlKGV2ZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMub25JbmRleENoYW5nZUV2ZW50LmVtaXQoZXZlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RlcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzdGF0dXM/OiAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XG59XG4iXX0=