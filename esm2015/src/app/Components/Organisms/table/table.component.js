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
                template: "<nz-table class=\"table\" #secondTable [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-content select=\"tr\"></ng-content>\n<!--    <tr *ngFor=\"let data of secondTable.data\">-->\n<!--      <td *ngIf=\"checkboxOn\">-->\n<!--        <spt-checkbox></spt-checkbox>-->\n<!--      </td>-->\n<!--      <td>{{ data.number }}</td>-->\n<!--      <td>{{ data.date }}</td>-->\n<!--      <td>{{ data.description }}</td>-->\n<!--      <td>{{ data.amount }}</td>-->\n<!--      <td>-->\n<!--        <spt-badge-->\n<!--          [name]=\"data.status ? 'PAID' : 'NOT PAID'\"-->\n<!--          color=\"#66BB6A\"-->\n<!--        ></spt-badge>-->\n<!--      </td>-->\n<!--      <td>{{ data.invoice }}</td>-->\n<!--    </tr>-->\n  </tbody>\n</nz-table>\n",
                styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border:1px solid #e2e2e2;border-radius:4px}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
            },] }
];
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    checkboxOn: [{ type: Input }],
    rows: [{ type: Input }],
    dataSet: [{ type: Input }],
    pageSize: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL09yZ2FuaXNtcy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFnQnpELE1BQU0sT0FBTyxjQUFjO0lBU3pCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHU3QkFBcUM7O2FBRXRDOzs7O3lCQUdFLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVNldCB7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkYXRlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGludm9pY2U6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY2hlY2tib3hPbjogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93czogYW55W107XG4gIEBJbnB1dCgpIGRhdGFTZXQ6IGFueVtdO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuXG4gIHRvdGFsRGF0YTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b3RhbERhdGEgPSB0aGlzLmRhdGFTZXQubGVuZ3RoO1xuICB9XG5cbn1cbiJdfQ==