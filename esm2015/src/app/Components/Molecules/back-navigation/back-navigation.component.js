import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export class BackNavigationComponent {
    constructor(_location, _router, _route) {
        this._location = _location;
        this._router = _router;
        this._route = _route;
        /* text beside the arrow */
        this.text = 'Back';
    }
    onBack() {
        if (this.route) {
            this._router.navigate([this.route], { relativeTo: this._route });
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
                styles: [".back-navigation{display:flex;align-items:center;cursor:pointer;transition:opacity 5ms ease-in-out;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.back-icon{transform:translateY(-1px)}.back-navigation:hover{opacity:.7}"]
            },] }
];
BackNavigationComponent.ctorParameters = () => [
    { type: Location },
    { type: Router },
    { type: ActivatedRoute }
];
BackNavigationComponent.propDecorators = {
    text: [{ type: Input }],
    route: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPdkQsTUFBTSxPQUFPLHVCQUF1QjtJQU9sQyxZQUNVLFNBQW1CLEVBQ25CLE9BQWUsRUFDZixNQUFzQjtRQUZ0QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVRoQywyQkFBMkI7UUFDbEIsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQVMzQixDQUFDO0lBRUwsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxTkFBK0M7O2FBRWhEOzs7WUFSUSxRQUFRO1lBRU8sTUFBTTtZQUF0QixjQUFjOzs7bUJBU25CLEtBQUs7b0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJhY2stbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWNrLW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWNrLW5hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYWNrTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gIC8qIHRleHQgYmVzaWRlIHRoZSBhcnJvdyAqL1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnQmFjayc7XG5cbiAgLyogcm91dGUgdG8gbmF2aWdhdGUgdG8gd2hlbiBjbGlja2VkICovXG4gIEBJbnB1dCgpIHJvdXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHsgfVxuXG4gIG9uQmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnJvdXRlXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==