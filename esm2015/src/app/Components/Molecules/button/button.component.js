import { Component, Input } from '@angular/core';
export class ButtonComponent {
    constructor() {
        /* button type (default: primary) */
        this.type = 'primary';
        /* button size (default: medium) */
        this.size = 'medium';
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-button',
                template: "<button nz-button nzNoAnimation [disabled]=\"disabled\"\n        [nzType]=\"type === 'secondary' ? 'default' : (type == 'inverted' ? 'primary' : type)\"\n        [ngClass]=\"{\n          'ant-btn-secondary': type == 'default' || type == 'secondary',\n          'ant-btn-tertiary': type == 'link',\n          'with-text': text != null,\n          'button-sm': size === 'small',\n          'button-md': size === 'medium',\n          'button-lg': size == 'large'\n        }\"\n        [style.color]=\"type == 'inverted' ? '#FFFFFF' : '#0D0C0B'\"\n        [style.backgroundColor]=\"color\"\n        [style.borderColor]=\"type == 'inverted' ? '#FFFFFF' : color\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\" [color]=\"iconColor\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\" [color]=\"iconColor\"></spt-icon>\n</button>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGVBQWU7SUF5QjFCO1FBeEJBLG9DQUFvQztRQUMzQixTQUFJLEdBQThELFNBQVMsQ0FBQztRQUVyRixtQ0FBbUM7UUFDMUIsU0FBSSxHQUFpQyxRQUFRLENBQUM7SUFvQnZDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDI3QkFBc0M7O2FBRXZDOzs7O21CQUdFLEtBQUs7bUJBR0wsS0FBSzt1QkFHTCxLQUFLO3dCQUdMLEtBQUs7bUJBR0wsS0FBSzt1QkFHTCxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qIGJ1dHRvbiB0eXBlIChkZWZhdWx0OiBwcmltYXJ5KSAqL1xuICBASW5wdXQoKSB0eXBlOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdsaW5rJyB8ICdpbnZlcnRlZCcgfCAnZGVmYXVsdCcgPSAncHJpbWFyeSc7XG5cbiAgLyogYnV0dG9uIHNpemUgKGRlZmF1bHQ6IG1lZGl1bSkgKi9cbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdtZWRpdW0nIHwgJ3NtYWxsJyA9ICdtZWRpdW0nO1xuXG4gIC8qIGxlZnQgaWNvbiAob3B0aW9uYWwpICovXG4gIEBJbnB1dCgpIGxlZnRJY29uOiBzdHJpbmc7XG5cbiAgLyogcmlnaHQgaWNvbiAob3B0aW9uYWwpICovXG4gIEBJbnB1dCgpIHJpZ2h0SWNvbjogc3RyaW5nO1xuXG4gIC8qIGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcblxuICAvKiBpZiB0aGUgYnV0dG9uIHNob3VsZCBiZSBkaXNhbmxlZCAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgLyogaWNvbiBjb2xvciAqL1xuICBASW5wdXQoKSBpY29uQ29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==