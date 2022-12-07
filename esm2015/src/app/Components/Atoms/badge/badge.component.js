import { Component, Input } from '@angular/core';
export class BadgeComponent {
    constructor() { }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-badge',
                template: "\n<nz-tag class=\"badges\" [nzColor]=\"color\" [style.font-size]=\"'14px'\" [style.line-height]=\"'16px'\">{{name}}</nz-tag>\n",
                styles: [".badges{display:flex}nz-tag{width:-moz-fit-content!important;width:fit-content!important;padding:3px 12px!important;height:-moz-fit-content!important;height:fit-content!important;border:none!important;font-size:12px!important}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    name: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sY0FBYztJQU96QixnQkFBZ0IsQ0FBQzs7O1lBWmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMElBQXFDOzthQUV0Qzs7OzttQkFHRSxLQUFLO29CQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1iYWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQge1xuICAvKiogYmFkZ2UgdGV4dCAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIGJhZGdlIGNvbG9yICovXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==