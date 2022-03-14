import { Component, Input } from '@angular/core';
export class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-breadcrumb',
                template: "<nz-breadcrumb [nzSeparator]=\"'>'\">\n    <ng-container *ngFor=\"let item of items\">\n        <nz-breadcrumb-item>\n            <a *ngIf=\"item.route\" [routerLink]=\"item.route\">{{item.label}}</a>\n            <span *ngIf=\"!item.route\">{{item.label}}</span>\n        </nz-breadcrumb-item>\n    </ng-container>\n</nz-breadcrumb>",
                styles: [""]
            },] }
];
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvTW9sZWN1bGVzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixnQkFBZ0IsQ0FBQztJQUlqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHlWQUEwQzs7YUFFM0M7Ozs7b0JBS0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgaXRlbXM6IHsgbGFiZWw6IHN0cmluZywgcm91dGU6IHN0cmluZyB9W107XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJyZWFkQ3J1bWJJdGVtIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcm91dGU6IHN0cmluZztcbn1cbiJdfQ==