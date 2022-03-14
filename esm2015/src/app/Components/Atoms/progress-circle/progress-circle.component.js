import { Component, Input } from '@angular/core';
export class ProgressCircleComponent {
    constructor() {
        this.showPercent = true;
        this.color = '#FF9900';
        this.width = 45;
        this.strokeWidth = 9;
    }
    ngOnInit() {
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-circle',
                template: "<nz-progress [nzPercent]=\"percent\"\n             [nzShowInfo]=\"showPercent\"\n             [nzStrokeColor]=\"color\"\n             [nzWidth]=\"width\"\n             [nzStrokeWidth]=\"strokeWidth\"\n             nzType=\"circle\">\n</nz-progress>\n",
                styles: [""]
            },] }
];
ProgressCircleComponent.ctorParameters = () => [];
ProgressCircleComponent.propDecorators = {
    percent: [{ type: Input }],
    showPercent: [{ type: Input }],
    color: [{ type: Input }],
    width: [{ type: Input }],
    strokeWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU92RCxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDO1FBTFMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUFFVCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isc1FBQStDOzthQUVoRDs7OztzQkFFRSxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1wcm9ncmVzcy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dQZXJjZW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAnI0ZGOTkwMCc7XG4gIEBJbnB1dCgpIHdpZHRoID0gNDU7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoID0gOTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==