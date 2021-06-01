import { Component, Input } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
export class ButtonComponent {
    constructor() {
        this.type = ButtonType.primary;
        this.size = ButtonSize.medium;
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-button',
                template: "<button nz-button [nzType]=\"type\" [nzSize]=\"size\" [disabled]=\"disabled\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\"></spt-icon>\n</button>\n",
                styles: [".leftIcon{margin-left:10px}.rightIcon{margin-right:10px}"]
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    leftIcon: [{ type: Input }],
    rightIcon: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU85RCxNQUFNLE9BQU8sZUFBZTtJQUUxQjtRQUtTLFNBQUksR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFNBQUksR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO0lBTjlCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMlVBQXNDOzthQUV2Qzs7OzttQkFRRSxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uU2l6ZSwgQnV0dG9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSB0eXBlOiBCdXR0b25UeXBlID0gQnV0dG9uVHlwZS5wcmltYXJ5O1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplID0gQnV0dG9uU2l6ZS5tZWRpdW07XG4gIEBJbnB1dCgpIGxlZnRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJpZ2h0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG59XG4iXX0=