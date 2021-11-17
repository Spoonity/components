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
                template: "<button nz-button nzNoAnimation [nzType]=\"type\" [nzSize]=\"size\" [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'ant-btn-secondary': type === B.secondary,\n          'ant-btn-tertiary': type === B.tertiary,\n          'with-text': text != null,\n          'button-sm': size === S.small,\n          'button-md': size === S.medium,\n          'button-lg': size === S.large\n        }\"\n        [style.backgroundColor]=\"color\"\n        [style.borderColor]=\"color\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\"></spt-icon>\n</button>\n",
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
    disabled: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU85RCxNQUFNLE9BQU8sZUFBZTtJQWExQjtRQVhTLFNBQUksR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFNBQUksR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBTzlDLE1BQUMsR0FBRyxVQUFVLENBQUM7UUFDZixNQUFDLEdBQUcsVUFBVSxDQUFDO0lBRUMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNnRCQUFzQzs7YUFFdkM7Ozs7bUJBR0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uU2l6ZSwgQnV0dG9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2VudW1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLnByaW1hcnk7XG4gIEBJbnB1dCgpIHNpemU6IEJ1dHRvblNpemUgPSBCdXR0b25TaXplLm1lZGl1bTtcbiAgQElucHV0KCkgbGVmdEljb246IHN0cmluZztcbiAgQElucHV0KCkgcmlnaHRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQiA9IEJ1dHRvblR5cGU7XG4gIFMgPSBCdXR0b25TaXplO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19