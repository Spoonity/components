import { Component, Input } from '@angular/core';
export class BackNavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
BackNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-back-navigation',
                template: "<nz-page-header class=\"site-page-header\" nzBackIcon [nzTitle]=\"title\" [nzSubtitle]=\"subTitle\">\n</nz-page-header>",
                styles: [".site-page-header{padding:0}"]
            },] }
];
BackNavigationComponent.ctorParameters = () => [];
BackNavigationComponent.propDecorators = {
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    route: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLGdCQUFnQixDQUFDO0lBTWpCLFFBQVE7SUFDUixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbUlBQStDOzthQUVoRDs7OztvQkFLRSxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1iYWNrLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFja05hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3ViVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcm91dGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=