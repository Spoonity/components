import { Component, Input } from '@angular/core';
export class TableComponent {
    constructor() { }
    ngOnInit() {
        this.totalData = this.dataSet.length;
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-table',
                template: "<nz-table class=\"table\" #secondTable [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of secondTable.data\">\n      <td *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </td>\n      <td>{{ data.number }}</td>\n      <td>{{ data.date }}</td>\n      <td>{{ data.description }}</td>\n      <td>{{ data.amount }}</td>\n      <td>\n        <spt-badge\n          [name]=\"data.status ? 'PAID' : 'NOT PAID'\"\n          color=\"#66BB6A\"\n        ></spt-badge>\n      </td>\n      <td>{{ data.invoice }}</td>\n    </tr>\n  </tbody>\n</nz-table>\n",
                styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border:1px solid #e2e2e2;border-radius:4px}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
            },] }
];
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    checkboxOn: [{ type: Input }],
    rows: [{ type: Input }],
    dataSet: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL09yZ2FuaXNtcy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFnQnpELE1BQU0sT0FBTyxjQUFjO0lBUXpCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDB4QkFBcUM7O2FBRXRDOzs7O3lCQUdFLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFTZXQge1xuICBudW1iZXI6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IHN0cmluZztcbiAgc3RhdHVzOiBib29sZWFuO1xuICBpbnZvaWNlOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNoZWNrYm94T246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd3M6IFtdO1xuICBASW5wdXQoKSBkYXRhU2V0OiBJRGF0YVNldFtdO1xuXG4gIHRvdGFsRGF0YTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b3RhbERhdGEgPSB0aGlzLmRhdGFTZXQubGVuZ3RoO1xuICB9XG5cbn1cbiJdfQ==