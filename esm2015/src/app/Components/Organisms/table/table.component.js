import { Component, Input } from '@angular/core';
export class TableComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-table',
                template: "<nz-table class=\"table\" [ngClass]=\"{'hide-border': hideOuterBorder}\"\n          [nzShowPagination]=\"false\"\n          [nzFrontPagination]=\"false\"\n          [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-content select=\"tr\"></ng-content>\n  </tbody>\n</nz-table>\n",
                styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border-radius:4px;border:1px solid #e2e2e2;border-bottom:none}.table.hide-border{border:none!important}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
            },] }
];
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    checkboxOn: [{ type: Input }],
    rows: [{ type: Input }],
    dataSet: [{ type: Input }],
    hideOuterBorder: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL09yZ2FuaXNtcy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBZ0IsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQWlCeEYsTUFBTSxPQUFPLGNBQWM7SUFNekIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNGVBQXFDOzthQUV0Qzs7Ozt5QkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOelRhYmxlQ29tcG9uZW50fSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVNldCB7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGludm9pY2U6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNoZWNrYm94T246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdO1xuICBASW5wdXQoKSBkYXRhU2V0OiBhbnlbXTtcbiAgQElucHV0KCkgaGlkZU91dGVyQm9yZGVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==