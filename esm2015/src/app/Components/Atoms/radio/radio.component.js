import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldManager } from '../../shared/form-field.manager';
export class RadioComponent extends FormFieldManager {
    constructor(_renderer) {
        super(_renderer);
        /* display direction */
        this.direction = 'horizontal';
        /* radio button options */
        this.options = [];
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-radio',
                template: "<nz-radio-group [(ngModel)]=\"value\" (ngModelChange)=\"changeAction($event)\">\n    <div [class]=\"direction\">\n        <label *ngFor=\"let o of options\" nz-radio [nzValue]=\"o.value\">{{ o.text }}</label>\n    </div>\n</nz-radio-group>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioComponent),
                        multi: true
                    }
                ],
                styles: [".horizontal{display:flex}.vertical [nz-radio]{display:block}"]
            },] }
];
RadioComponent.ctorParameters = () => [
    { type: Renderer2 }
];
RadioComponent.propDecorators = {
    direction: [{ type: Input }],
    options: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBY2pFLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBT2xELFlBQVksU0FBb0I7UUFDOUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBUG5CLHVCQUF1QjtRQUNkLGNBQVMsR0FBOEIsWUFBWSxDQUFDO1FBRTdELDBCQUEwQjtRQUNqQixZQUFPLEdBQW9DLEVBQUUsQ0FBQTtJQUl0RCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2UEFBcUM7Z0JBRXJDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDN0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7OztZQWZxQyxTQUFTOzs7d0JBa0I1QyxLQUFLO3NCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Zvcm1GaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgRm9ybUZpZWxkTWFuYWdlciB7XG4gIC8qIGRpc3BsYXkgZGlyZWN0aW9uICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyA9ICdob3Jpem9udGFsJztcblxuICAvKiByYWRpbyBidXR0b24gb3B0aW9ucyAqL1xuICBASW5wdXQoKSBvcHRpb25zOiB7dmFsdWU6IHN0cmluZzsgdGV4dDogc3RyaW5nfVtdID0gW11cblxuICBjb25zdHJ1Y3RvcihfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9yZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==