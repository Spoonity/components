import { Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() {
        this.type = 'line';
    }
    ngOnInit() {
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-bar',
                template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" [nzType]=\"type\"></nz-progress>\n",
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    percent: [{ type: Input }],
    info: [{ type: Input }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CO1FBRlMsU0FBSSxHQUFvQixNQUFNLENBQUM7SUFFeEIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHlHQUE0Qzs7YUFFN0M7Ozs7c0JBRUUsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBpbmZvOiBib29sZWFuO1xuICBASW5wdXQoKSB0eXBlOiAnbGluZSd8J2NpcmNsZScgPSAnbGluZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=