import { Component, Input, ViewEncapsulation } from '@angular/core';
export class ProgressCircleComponent {
    constructor() {
        this.showPercent = true;
        this.color = '#FF9900';
        this.width = 45;
        this.strokeWidth = 9;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVFsRSxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDO1FBTFMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBSyxHQUFHLFNBQVMsQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUFFVCxDQUFDOzs7WUFibEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG9UQUErQztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O3NCQUVFLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtcHJvZ3Jlc3MtY2lyY2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWNpcmNsZS5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQ2lyY2xlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBzaG93UGVyY2VudCA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNGRjk5MDAnO1xuICBASW5wdXQoKSB3aWR0aCA9IDQ1O1xuICBASW5wdXQoKSBzdHJva2VXaWR0aCA9IDk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==