import { Component, Input } from '@angular/core';
export class ProgressBarComponent {
    constructor() { }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-bar',
                template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" [nzStatus]=\"status\" nzType=\"line\"></nz-progress>\n",
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    percent: [{ type: Input }],
    info: [{ type: Input }],
    status: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLGdCQUFnQixDQUFDOzs7WUFWbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDZIQUE0Qzs7YUFFN0M7Ozs7c0JBRUUsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1wcm9ncmVzcy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGluZm86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0YXR1czogJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=