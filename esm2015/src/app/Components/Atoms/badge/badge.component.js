import { Component, Input } from '@angular/core';
export class BadgeComponent {
    constructor() { }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-badge',
                template: "\n<nz-tag class=\"badges\" [nzColor]=\"color\" [style.font-size]=\"'14px'\" [style.line-height]=\"'16px'\" [style.color]=\"textColor\">{{name}}</nz-tag>\n",
                styles: [".badges{display:flex}nz-tag{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;padding:3px 12px!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;border:none!important;font-size:12px!important}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    name: [{ type: Input }],
    color: [{ type: Input }],
    textColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sY0FBYztJQVV6QixnQkFBZ0IsQ0FBQzs7O1lBZmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsc0tBQXFDOzthQUV0Qzs7OzttQkFHRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUNvbXBvbmVudCB7XG4gIC8qKiBiYWRnZSB0ZXh0ICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKiogYmFkZ2UgY29sb3IgKi9cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICAvKiogYmFkZ2UgdGV4dCBjb2xvciAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19