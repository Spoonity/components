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
        if (this.backAction) {
            this.backAction();
        }
        else {
            if (this.route) {
                this._router.navigate([this.route], { relativeTo: this._route });
            }
            else {
                this._location.back();
            }
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
    backAction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFjay1uYXZpZ2F0aW9uL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQTRCLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBT2pGLE1BQU0sT0FBTyx1QkFBdUI7SUFVbEMsWUFDVSxTQUFtQixFQUNuQixPQUFlLEVBQ2YsTUFBc0I7UUFGdEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFaaEMsMkJBQTJCO1FBQ2xCLFNBQUksR0FBVyxNQUFNLENBQUM7SUFZM0IsQ0FBQztJQUVMLE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixxTkFBK0M7O2FBRWhEOzs7WUFSUSxRQUFRO1lBRWlDLE1BQU07WUFBaEQsY0FBYzs7O21CQVNuQixLQUFLO29CQUdMLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMsIFBhcmFtcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYmFjay1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhY2stbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgLyogdGV4dCBiZXNpZGUgdGhlIGFycm93ICovXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICdCYWNrJztcblxuICAvKiByb3V0ZSB0byBuYXZpZ2F0ZSB0byB3aGVuIGNsaWNrZWQgKi9cbiAgQElucHV0KCkgcm91dGU6IHN0cmluZztcblxuICAvKiBvdmVycmlkZSBiYWNrIGFjdGlvbiAqL1xuICBASW5wdXQoKSBiYWNrQWN0aW9uOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkgeyB9XG5cbiAgb25CYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJhY2tBY3Rpb24pIHtcbiAgICAgIHRoaXMuYmFja0FjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5yb3V0ZSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3RoaXMucm91dGVdLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==