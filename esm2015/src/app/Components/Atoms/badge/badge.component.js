import { Component, Input } from '@angular/core';
export class BadgeComponent {
    constructor() { }
    ngOnInit() {
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-badge',
                template: "\n<nz-tag class=\"badges\" nzStandalone [nzColor]=\"color\">{{name}}</nz-tag>\n",
                styles: [".badges{display:flex}.ant-tag{line-height:11px!important;font-size:14px!important;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;padding:4px 12px!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    name: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUV6QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwyRkFBcUM7O2FBRXRDOzs7O21CQVFFLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWRnZS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG59XG4iXX0=