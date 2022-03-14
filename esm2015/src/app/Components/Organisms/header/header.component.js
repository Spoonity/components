import { Component, Input } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
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
                template: "<div class=\"header\">\n  <div class=\"sub-header-1\">\n    <spt-back-navigation\n      *ngIf=\"backTitle\"\n      [title]=\"backTitle\"\n    ></spt-back-navigation>\n    <spt-breadcrumb *ngIf=\"breadcrumbs\" [items]=\"breadcrumbs\"></spt-breadcrumb>\n    <span class=\"title\">{{ title }}</span>\n  </div>\n  <div class=\"sub-header-2\" *ngIf=\"search\">\n    <div class=\"search\">\n      <spt-search></spt-search>\n    </div>\n    <spt-button\n      *ngIf=\"btnTitle\"\n      [text]=\"btnTitle\"\n      [type]=\"buttonType\"\n      [size]=\"buttonSize\"\n      (click)=\"action()\"\n    ></spt-button>\n  </div>\n</div>\n",
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
    action: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9PcmdhbmlzbXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVE5RCxNQUFNLE9BQU8sZUFBZTtJQVMxQjtRQUVBLGVBQVUsR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzVDLGVBQVUsR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO0lBSDNCLENBQUM7SUFLakIsUUFBUSxLQUFJLENBQUM7OztZQW5CZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDRuQkFBc0M7O2FBRXZDOzs7O29CQUdFLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgSUJyZWFkQ3J1bWJJdGVtIH0gZnJvbSAnLi4vLi4vTW9sZWN1bGVzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgYmFja1RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWJzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJ0blRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlYXJjaDogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aW9uOiAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGJ1dHRvblR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLnByaW1hcnk7XG4gIGJ1dHRvblNpemU6IEJ1dHRvblNpemUgPSBCdXR0b25TaXplLm1lZGl1bTtcblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==