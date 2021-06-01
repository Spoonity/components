import { Component, Input } from '@angular/core';
export class SideNavigationComponent {
    constructor() {
        this.items = new Array();
    }
    ngOnInit() {
    }
}
SideNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-side-navigation',
                template: "<!-- Menu Item -->\n<ng-container *ngIf=\"type == 'menuItem'\">\n  <li nz-menu-item class=\"side-navigation-component\">\n    <span>\n      <svg-icon\n        *ngIf=\"icon\"\n        nz-icon\n        [svgStyle]=\"{ 'height.px': 20 }\"\n        [name]=\"icon\"\n      ></svg-icon\n    ></span>\n    <span class=\"text\">{{ text }}</span>\n  </li>\n</ng-container>\n\n<!-- Sub Menu -->\n<ng-container *ngIf=\"type == 'subMenu'\">\n  <li nzOpen nz-submenu>\n    <span title\n      ><span>\n        <svg-icon\n          *ngIf=\"icon\"\n          nz-icon\n          [svgStyle]=\"{ 'height.px': 20 }\"\n          [name]=\"icon\"\n        ></svg-icon></span\n      ><span>{{ text }}</span></span\n    >\n    <ul>\n      <ng-container *ngFor=\"let item of items\">\n        <li nz-menu-item>\n          <span>\n            <svg-icon\n              *ngIf=\"item.icon\"\n              nz-icon\n              [svgStyle]=\"{ 'height.px': 20 }\"\n              [name]=\"item.icon\"\n            ></svg-icon\n          ></span>\n          <span class=\"text\">{{ item.text }}</span>\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n</ng-container>\n\n<!-- Menu -->\n<ng-container *ngIf=\"type == 'menu'\">\n  <ul nz-menu></ul>\n</ng-container>\n",
                styles: ["li[nz-menu-item] .text{font-size:16px;line-height:3px;font-weight:700;margin-left:34px}li[nz-menu-item]:hover{background-color:#f3f3f3;border-radius:0 28px 28px 0;cursor:pointer}li[nz-menu-item].active{background-color:#fff3e0}li[nz-menu-item].active svg-icon svg path{fill:#f90}.ant-menu-submenu-active{outline-style:none!important}svg-icon{transform:translateY(2px)}"]
            },] }
];
SideNavigationComponent.ctorParameters = () => [];
SideNavigationComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    items: [{ type: Input }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvc2lkZS1uYXZpZ2F0aW9uL3NpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLHVCQUF1QjtJQVFsQztRQUhTLFVBQUssR0FBRyxJQUFJLEtBQUssRUFBYSxDQUFDO0lBR3hCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IscXVDQUErQzs7YUFFaEQ7Ozs7bUJBR0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaWRlTmF2aWdhdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zaWRlLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZU5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgaXRlbXMgPSBuZXcgQXJyYXk8TWVudUl0ZW1zPigpO1xuICBASW5wdXQoKSB0eXBlOiBTaWRlTmF2aWdhdGlvblR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW1zIHtcbiAgaWNvbjogc3RyaW5nLFxuICB0ZXh0OiBzdHJpbmcsXG4gIGxpbms6IHN0cmluZ1xufVxuIl19