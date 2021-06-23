import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class BackNavigationComponent {
    constructor(_location, _router) {
        this._location = _location;
        this._router = _router;
    }
    ngOnInit() {
    }
    onBack(route) {
        if (route) {
            this._router.navigate([route]);
        }
        else {
            this._location.back();
        }
    }
}
BackNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-back-navigation',
                template: "<nz-page-header class=\"site-page-header\" (nzBack)=\"onBack(route)\" nzBackIcon [nzTitle]=\"title\" [nzSubtitle]=\"subTitle\">\n</nz-page-header>\n",
                styles: [".site-page-header{padding:0}"]
            },] }
];
BackNavigationComponent.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
BackNavigationComponent.propDecorators = {
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    route: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxNQUFNLE9BQU8sdUJBQXVCO0lBRWxDLFlBQW9CLFNBQW1CLEVBQVUsT0FBZTtRQUE1QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFJLENBQUM7SUFNckUsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBTTtRQUNYLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixnS0FBK0M7O2FBRWhEOzs7WUFSUSxRQUFRO1lBRVIsTUFBTTs7O29CQVdaLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYmFjay1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSByb3V0ZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25CYWNrKHJvdXRlPyk6IHZvaWQge1xuICAgIGlmIChyb3V0ZSkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=