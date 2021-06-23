import { Component, Input, ViewChild } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
import { BackNavigationComponent } from '../../Molecules/back-navigation/back-navigation.component';
export class HeaderComponent {
    constructor() {
        this.buttonType = ButtonType.primary;
        this.buttonSize = ButtonSize.medium;
    }
    ngOnInit() { }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-header',
                template: "<div class=\"header\">\n  <div class=\"sub-header-1\">\n    <spt-back-navigation\n      *ngIf=\"backTitle\"\n      [title]=\"backTitle\"\n    ></spt-back-navigation>\n    <spt-breadcrumb *ngIf=\"breadcrumbs\" [items]=\"breadcrumbs\"></spt-breadcrumb>\n    <span class=\"title\" (click)=\"backTitle ? backNavigationComponent.onBack() : null\">{{ title }}</span>\n  </div>\n  <div class=\"sub-header-2\">\n    <div class=\"search\">\n      <spt-search *ngIf=\"search\"></spt-search>\n    </div>\n    <spt-button\n      *ngIf=\"btnTitle\"\n      [text]=\"btnTitle\"\n      [type]=\"buttonType\"\n      [size]=\"buttonSize\"\n      (click)=\"action()\"\n    ></spt-button>\n  </div>\n</div>\n",
                styles: [".header{display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center;padding:24px 0}.sub-header-1{display:flex;flex-direction:column}.sub-header-2{display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.search{width:300px;padding-right:30px}.title{font-family:Nunito;font-style:normal;font-weight:700;font-size:32px;line-height:48px;display:flex;align-items:center}"]
            },] }
];
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    title: [{ type: Input }],
    backTitle: [{ type: Input }],
    breadcrumbs: [{ type: Input }],
    btnTitle: [{ type: Input }],
    search: [{ type: Input }],
    action: [{ type: Input }],
    backNavigationComponent: [{ type: ViewChild, args: [BackNavigationComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9PcmdhbmlzbXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFPbEcsTUFBTSxPQUFPLGVBQWU7SUFZMUI7UUFFQSxlQUFVLEdBQWUsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxlQUFVLEdBQWUsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUgzQixDQUFDO0lBS2pCLFFBQVEsS0FBSSxDQUFDOzs7WUF0QmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw0ckJBQXNDOzthQUV2Qzs7OztvQkFHRSxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQ0FFTCxTQUFTLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgSUJyZWFkQ3J1bWJJdGVtIH0gZnJvbSAnLi4vLi4vTW9sZWN1bGVzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHtCYWNrTmF2aWdhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vTW9sZWN1bGVzL2JhY2stbmF2aWdhdGlvbi9iYWNrLW5hdmlnYXRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBicmVhZGNydW1iczogc3RyaW5nO1xuICBASW5wdXQoKSBidG5UaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzZWFyY2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGlvbjogKCkgPT4ge307XG5cbiAgQFZpZXdDaGlsZChCYWNrTmF2aWdhdGlvbkNvbXBvbmVudClcbiAgYmFja05hdmlnYXRpb25Db21wb25lbnQ6IEJhY2tOYXZpZ2F0aW9uQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9IEJ1dHRvblR5cGUucHJpbWFyeTtcbiAgYnV0dG9uU2l6ZTogQnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUubWVkaXVtO1xuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19