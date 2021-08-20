import { Component, Input } from '@angular/core';
export class IconComponent {
    constructor() {
        this.color = '#0D0C0B';
        this.svgIconSettings = {
            'height': '20px',
            'fill': this.color
        };
    }
    ngOnInit() { }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-icon',
                template: "<span nz-tooltip [nzTooltipTitle]=\"toolTipTitle\">\n  <svg-icon class=\"icons\" nz-icon [name]=\"name\" [svgStyle]=\"{'height.px':20,'fill':color}\">\n  </svg-icon>\n</span>\n",
                styles: [""]
            },] }
];
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    toolTipTitle: [{ type: Input }],
    name: [{ type: Input }],
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQVd4QjtRQVBTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFFM0Isb0JBQWUsR0FBRztZQUNmLFFBQVEsRUFBRyxNQUFNO1lBQ2pCLE1BQU0sRUFBRyxJQUFJLENBQUMsS0FBSztTQUNyQixDQUFBO0lBRWMsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7O1lBbEJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsNExBQW9DOzthQUVyQzs7OzsyQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRvb2xUaXBUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMwRDBDMEInO1xuXG4gIHN2Z0ljb25TZXR0aW5ncyA9IHtcbiAgICAgJ2hlaWdodCcgOiAnMjBweCcsXG4gICAgICdmaWxsJyA6IHRoaXMuY29sb3JcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=