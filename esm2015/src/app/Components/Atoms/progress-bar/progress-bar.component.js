import { Component, Input } from '@angular/core';
import { ProgressType } from '../../../utils/enums';
export class ProgressBarComponent {
    constructor() {
        this.type = ProgressType.line;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-bar',
                template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" [nzType]=\"type\"></nz-progress>",
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    percent: [{ type: Input }],
    info: [{ type: Input }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPcEQsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQjtRQU9TLFNBQUksR0FBaUIsWUFBWSxDQUFDLElBQUksQ0FBQztJQVBoQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsdUdBQTRDOzthQUU3Qzs7OztzQkFRRSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9ncmVzc1R5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGluZm86IEJvb2xlYW47XG4gIEBJbnB1dCgpIHR5cGU6IFByb2dyZXNzVHlwZSA9IFByb2dyZXNzVHlwZS5saW5lO1xufVxuIl19