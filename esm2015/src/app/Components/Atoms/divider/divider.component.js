import { Component, Input } from '@angular/core';
export class DividerComponent {
    constructor() {
        /* divider type */
        this.type = 'horizontal';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvZGl2aWRlci9kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBSEEsa0JBQWtCO1FBQ1QsU0FBSSxHQUE0QixZQUFZLENBQUM7SUFFdEMsQ0FBQzs7O1lBVGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIseUVBQXVDOzthQUV4Qzs7OzttQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtZGl2aWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGl2aWRlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJDb21wb25lbnQge1xuICAvKiBkaXZpZGVyIHR5cGUgKi9cbiAgQElucHV0KCkgdHlwZTogJ2hvcml6b250YWwnfCd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==