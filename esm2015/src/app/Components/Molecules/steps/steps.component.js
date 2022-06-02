import { Component, EventEmitter, Input, Output } from '@angular/core';
export class StepsComponent {
    constructor() {
        /* type */
        this.type = 'navigation';
        /* steps direction */
        this.direction = 'horizontal';
        /* action when the step item has changed */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zdGVwcy9zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQVFBLFVBQVU7UUFDRCxTQUFJLEdBQTZCLFlBQVksQ0FBQztRQUV2RCxxQkFBcUI7UUFDWixjQUFTLEdBQThCLFlBQVksQ0FBQztRQUs3RCwyQ0FBMkM7UUFDakMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWxCMUMsQ0FBQztJQW9CakIsUUFBUTtJQUNSLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGl3QkFBcUM7O2FBRXRDOzs7O3NCQU1FLEtBQUs7b0JBR0wsS0FBSzttQkFHTCxLQUFLO3dCQUdMLEtBQUs7aUNBR0wsS0FBSztpQ0FHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc3RlcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RlcHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qIGN1cnJlbnQgc3RlcCBpbmRleCAqL1xuICBASW5wdXQoKSBjdXJyZW50OiBudW1iZXI7XG5cbiAgLyogbGlzdCBvZiBzdGVwcyAqL1xuICBASW5wdXQoKSBzdGVwczogQXJyYXk8SVN0ZXBzPjtcblxuICAvKiB0eXBlICovXG4gIEBJbnB1dCgpIHR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICduYXZpZ2F0aW9uJztcblxuICAvKiBzdGVwcyBkaXJlY3Rpb24gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIC8qIGlmIHN0ZXBzIGFmdGVyIHRoZSBjdXJyZW50IHNob3VsZCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBwcmV2ZW50RnV0dXJlU3RlcHM6IGJvb2xlYW47XG5cbiAgLyogYWN0aW9uIHdoZW4gdGhlIHN0ZXAgaXRlbSBoYXMgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgb25JbmRleENoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvbkluZGV4Q2hhbmdlKGV2ZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5kZXhDaGFuZ2VFdmVudC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGVwcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXR1cz86ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcbn1cbiJdfQ==