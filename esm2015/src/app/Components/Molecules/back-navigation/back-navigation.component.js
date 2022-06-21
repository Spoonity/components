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
            const extras = { relativeTo: this._route };
            if (this.queryParams != null) {
                extras['queryParams'] = this.queryParams;
            }
            this._router.navigate([this.route], extras);
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
    route: [{ type: Input }],
    queryParams: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPdkQsTUFBTSxPQUFPLHVCQUF1QjtJQVVsQyxZQUNVLFNBQW1CLEVBQ25CLE9BQWUsRUFDZixNQUFzQjtRQUZ0QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVpoQywyQkFBMkI7UUFDbEIsU0FBSSxHQUFXLE1BQU0sQ0FBQztJQVkzQixDQUFDO0lBRUwsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sTUFBTSxHQUFHLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUM1QixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxQztZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxTkFBK0M7O2FBRWhEOzs7WUFSUSxRQUFRO1lBRU8sTUFBTTtZQUF0QixjQUFjOzs7bUJBU25CLEtBQUs7b0JBR0wsS0FBSzswQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYmFjay1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgLyogdGV4dCBiZXNpZGUgdGhlIGFycm93ICovXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICdCYWNrJztcblxuICAvKiByb3V0ZSB0byBuYXZpZ2F0ZSB0byB3aGVuIGNsaWNrZWQgKi9cbiAgQElucHV0KCkgcm91dGU6IHN0cmluZztcblxuICAvKiByb3V0ZSBxdWVyeSBwYXJhbXMgKi9cbiAgQElucHV0KCkgcXVlcnlQYXJhbXM6IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBvbkJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGUpIHtcbiAgICAgIGNvbnN0IGV4dHJhcyA9IHtyZWxhdGl2ZVRvOiB0aGlzLl9yb3V0ZX07XG4gICAgICBpZiAodGhpcy5xdWVyeVBhcmFtcyAhPSBudWxsKSB7XG4gICAgICAgIGV4dHJhc1sncXVlcnlQYXJhbXMnXSA9IHRoaXMucXVlcnlQYXJhbXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3RoaXMucm91dGVdLCBleHRyYXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=