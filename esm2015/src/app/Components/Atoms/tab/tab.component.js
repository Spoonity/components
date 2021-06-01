import { Component, Input } from '@angular/core';
export class TabComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-tab',
                template: "<nz-tabset>\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"tab.name\" [nzDisabled]=\"tab.disabled\">\n        {{ tab.name }}\n    </nz-tab>\n</nz-tabset>",
                styles: [""]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sWUFBWTtJQUV2QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiwwS0FBbUM7O2FBRXBDOzs7O21CQVFFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSB0YWJzOiB7bmFtZTogc3RyaW5nLCBkaXNhYmxlZDogYm9vbGVhbn1bXTtcblxuICAvLyB0YWJzID0gW1xuICAvLyAgIHtcbiAgLy8gICAgIG5hbWU6ICdUYWIgMScsXG4gIC8vICAgICBkaXNhYmxlZDogZmFsc2VcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIG5hbWU6ICdUYWIgMicsXG4gIC8vICAgICBkaXNhYmxlZDogdHJ1ZVxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgbmFtZTogJ1RhYiAzJyxcbiAgLy8gICAgIGRpc2FibGVkOiBmYWxzZVxuICAvLyAgIH1cbiAgLy8gXTtcblxufVxuIl19