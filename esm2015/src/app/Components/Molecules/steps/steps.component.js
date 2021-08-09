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
                template: "<nz-steps [nzCurrent]=\"current\" [nzType]=\"type\" (nzIndexChange)=\"onIndexChange($event)\" [nzDirection]=\"direction\">\n    <ng-container *ngFor=\"let step of steps; let idx = index\">\n        <nz-step [nzStatus]=\"current === idx ? 'process' : (step.status || 'wait')\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n    </ng-container>\n</nz-steps>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQUlTLFNBQUksR0FBVyxZQUFZLENBQUM7UUFDNUIsY0FBUyxHQUFXLFlBQVksQ0FBQztRQUVoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBUDFDLENBQUM7SUFTZixRQUFRO0lBQ1IsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsd2NBQXFDOzthQUV0Qzs7OztzQkFLRSxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXN0ZXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0ZXBzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcHMuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASW5wdXQoKSBjdXJyZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN0ZXBzOiBBcnJheTxJU3RlcHM+O1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnbmF2aWdhdGlvbic7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogc3RyaW5nID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBwcmV2ZW50RnV0dXJlU3RlcHM6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBvbkluZGV4Q2hhbmdlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG9uSW5kZXhDaGFuZ2UoZXZlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5vbkluZGV4Q2hhbmdlRXZlbnQuZW1pdChldmVudCk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXR1cz86ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcbn1cbiJdfQ==