import { Component, Input } from '@angular/core';
export class TableComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-table',
                template: "<nz-table class=\"table\"\n          [nzShowPagination]=\"false\"\n          [nzFrontPagination]=\"false\"\n          [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-content select=\"tr\"></ng-content>\n  </tbody>\n</nz-table>\n",
                styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border-radius:4px;border:1px solid #e2e2e2;border-bottom:none}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
            },] }
];
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    checkboxOn: [{ type: Input }],
    rows: [{ type: Input }],
    dataSet: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL09yZ2FuaXNtcy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0IsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQWlCeEYsTUFBTSxPQUFPLGNBQWM7SUFLekIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNmJBQXFDOzthQUV0Qzs7Ozt5QkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TnpUYWJsZUNvbXBvbmVudH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFTZXQge1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IHN0cmluZztcbiAgc3RhdHVzOiBib29sZWFuO1xuICBpbnZvaWNlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjaGVja2JveE9uOiBib29sZWFuO1xuICBASW5wdXQoKSByb3dzOiBhbnlbXTtcbiAgQElucHV0KCkgZGF0YVNldDogYW55W107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19