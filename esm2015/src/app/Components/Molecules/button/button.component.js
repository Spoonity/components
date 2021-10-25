import { Component, Input } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';
export class ButtonComponent {
    constructor() {
        this.type = ButtonType.primary;
        this.size = ButtonSize.medium;
        this.B = ButtonType;
        this.S = ButtonSize;
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-button',
                template: "<button nz-button nzNoAnimation [nzType]=\"type\" [nzSize]=\"size\" [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'ant-btn-secondary': type === B.secondary,\n          'ant-btn-tertiary': type === B.tertiary,\n          'with-text': text != null,\n          'button-sm': size === S.small,\n          'button-md': size === S.medium,\n          'button-lg': size === S.large\n        }\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\"></spt-icon>\n</button>\n",
                styles: [".leftIcon{margin-left:10px}.rightIcon{margin-right:10px}.ant-btn[disabled]{background-color:transparent}.ant-btn[disabled] span{color:#b1b1b1!important}.button-sm{height:34px!important;padding-top:4px!important;padding-bottom:4px!important;box-shadow:none}.button-md{height:42px!important;padding-top:8px!important;padding-bottom:8px!important;box-shadow:none}.button-lg{height:50px!important;padding-top:12px!important;padding-bottom:12px!important;box-shadow:none}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU85RCxNQUFNLE9BQU8sZUFBZTtJQVkxQjtRQVZTLFNBQUksR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFNBQUksR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBTTlDLE1BQUMsR0FBRyxVQUFVLENBQUM7UUFDZixNQUFDLEdBQUcsVUFBVSxDQUFDO0lBRUMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMm9CQUFzQzs7YUFFdkM7Ozs7bUJBR0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvblNpemUsIEJ1dHRvblR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0eXBlOiBCdXR0b25UeXBlID0gQnV0dG9uVHlwZS5wcmltYXJ5O1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplID0gQnV0dG9uU2l6ZS5tZWRpdW07XG4gIEBJbnB1dCgpIGxlZnRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJpZ2h0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEIgPSBCdXR0b25UeXBlO1xuICBTID0gQnV0dG9uU2l6ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==