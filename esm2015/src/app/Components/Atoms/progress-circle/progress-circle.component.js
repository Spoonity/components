import { Component, Input, ViewEncapsulation } from '@angular/core';
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
                template: "<nz-progress [ngClass]=\"{'colored': color != '#FF9900'}\" [nzPercent]=\"percent\"\n             [nzShowInfo]=\"showPercent\"\n             [nzStrokeColor]=\"color\"\n             [nzWidth]=\"width\"\n             [nzStrokeWidth]=\"strokeWidth\"\n             nzType=\"circle\">\n</nz-progress>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["nz-progress.colored svg path.ant-progress-circle-trail{stroke:hsla(0,0%,100%,.7)!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVExRSxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDO1FBTFMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUFFVCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9UQUErQztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O3NCQUVFLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1wcm9ncmVzcy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dQZXJjZW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgY29sb3IgPSAnI0ZGOTkwMCc7XG4gIEBJbnB1dCgpIHdpZHRoID0gNDU7XG4gIEBJbnB1dCgpIHN0cm9rZVdpZHRoID0gOTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==