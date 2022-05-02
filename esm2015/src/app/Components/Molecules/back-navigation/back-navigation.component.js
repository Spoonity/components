import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
export class BackNavigationComponent {
    constructor(_location, _router) {
        this._location = _location;
        this._router = _router;
        /* text beside the arrow */
        this.text = 'Back';
    }
    onBack() {
        if (this.route) {
            this._router.navigate([this.route]);
        }
        else {
            this._location.back();
        }
    }
}
BackNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-back-navigation',
                template: "<div class=\"back-navigation\" (click)=\"onBack()\">\n    <div class=\"back-icon spt-spacing-right--2\"><spt-icon name=\"arrow-back\"></spt-icon></div>\n    <div class=\"text\">{{text}}</div>\n</div>\n",
                styles: [".back-navigation{display:flex;align-items:center;cursor:pointer;transition:opacity 5ms ease-in-out;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.back-icon{transform:translateY(2px)}.back-navigation:hover{opacity:.7}"]
            },] }
];
BackNavigationComponent.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
BackNavigationComponent.propDecorators = {
    text: [{ type: Input }],
    route: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxNQUFNLE9BQU8sdUJBQXVCO0lBT2xDLFlBQW9CLFNBQW1CLEVBQVUsT0FBZTtRQUE1QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5oRSwyQkFBMkI7UUFDbEIsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQUtxQyxDQUFDO0lBRXJFLE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxTkFBK0M7O2FBRWhEOzs7WUFSUSxRQUFRO1lBRVIsTUFBTTs7O21CQVNaLEtBQUs7b0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1iYWNrLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFja05hdmlnYXRpb25Db21wb25lbnQge1xuICAvKiB0ZXh0IGJlc2lkZSB0aGUgYXJyb3cgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nID0gJ0JhY2snO1xuXG4gIC8qIHJvdXRlIHRvIG5hdmlnYXRlIHRvIHdoZW4gY2xpY2tlZCAqL1xuICBASW5wdXQoKSByb3V0ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG9uQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnJvdXRlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==