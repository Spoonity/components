import { Component, Input } from '@angular/core';
export class SwitchComponent {
    constructor() {
        this.on = false;
    }
    ngOnInit() {
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-switch',
                template: "<nz-switch [ngModel]=\"on\"></nz-switch>",
                styles: ["nz-switch{margin:10px}"]
            },] }
];
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    on: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUUxQjtRQUlTLE9BQUUsR0FBWSxLQUFLLENBQUM7SUFKYixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG9EQUFzQzs7YUFFdkM7Ozs7aUJBT0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc3dpdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N3aXRjaC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBASW5wdXQoKSBvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG59XG4iXX0=