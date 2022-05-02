import { Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() { }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-bar',
                template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" nzType=\"line\"></nz-progress>\n",
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    percent: [{ type: Input }],
    info: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLGdCQUFnQixDQUFDOzs7WUFUbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHVHQUE0Qzs7YUFFN0M7Ozs7c0JBRUUsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcGVyY2VudDogbnVtYmVyO1xuICBASW5wdXQoKSBpbmZvOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=