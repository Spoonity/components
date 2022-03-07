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
                template: "<button nz-button nzNoAnimation [nzType]=\"type\" [nzSize]=\"size\" [disabled]=\"disabled\"\n        [ngClass]=\"{\n          'ant-btn-secondary': type === B.secondary,\n          'ant-btn-tertiary': type === B.tertiary,\n          'with-text': text != null,\n          'button-sm': size === S.small,\n          'button-md': size === S.medium,\n          'button-lg': size === S.large\n        }\"\n        [style.color]=\"type === B.inverted ? '#FFFFFF' : '#0D0C0B'\"\n        [style.backgroundColor]=\"color\"\n        [style.borderColor]=\"type === B.inverted ? '#FFFFFF' : color\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\" [color]=\"iconColor\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\" [color]=\"iconColor\"></spt-icon>\n</button>\n",
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
    color: [{ type: Input }],
    iconColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU85RCxNQUFNLE9BQU8sZUFBZTtJQWMxQjtRQVpTLFNBQUksR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3RDLFNBQUksR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBUTlDLE1BQUMsR0FBRyxVQUFVLENBQUM7UUFDZixNQUFDLEdBQUcsVUFBVSxDQUFDO0lBRUMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsazNCQUFzQzs7YUFFdkM7Ozs7bUJBR0UsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZW51bXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdHlwZTogQnV0dG9uVHlwZSA9IEJ1dHRvblR5cGUucHJpbWFyeTtcbiAgQElucHV0KCkgc2l6ZTogQnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUubWVkaXVtO1xuICBASW5wdXQoKSBsZWZ0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSByaWdodEljb246IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaWNvbkNvbG9yOiBzdHJpbmc7XG5cbiAgQiA9IEJ1dHRvblR5cGU7XG4gIFMgPSBCdXR0b25TaXplO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19