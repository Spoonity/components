import { DividerType } from './../../../utils/enums';
import { Component, Input } from '@angular/core';
export class DividerComponent {
    constructor() {
        this.type = DividerType.horizontal;
    }
    ngOnInit() {
    }
}
DividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-divider',
                template: "<nz-divider class=\"divider\" [nzType]=\"type\"></nz-divider>",
                styles: [".divider{height:1px;margin:0}"]
            },] }
];
DividerComponent.ctorParameters = () => [];
DividerComponent.propDecorators = {
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQjtRQUtTLFNBQUksR0FBVyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBTC9CLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIseUVBQXVDOzthQUV4Qzs7OzttQkFRRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGl2aWRlclR5cGUgfSBmcm9tICcuLy4uLy4uLy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtZGl2aWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBEaXZpZGVyVHlwZS5ob3Jpem9udGFsO1xuXG59XG4iXX0=