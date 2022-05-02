import { Component, Input } from '@angular/core';
export class IconComponent {
    constructor() {
        this.color = '#0D0C0B';
        this.size = 20;
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-icon',
                template: "<span nz-tooltip [nzTooltipTitle]=\"toolTipTitle\">\n  <svg-icon class=\"icons\" nz-icon [name]=\"name\" [svgStyle]=\"{'height':size + 'px', 'width':size + 'px', 'fill':(color || '#0D0C0B')}\">\n  </svg-icon>\n</span>\n",
                styles: [""]
            },] }
];
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    toolTipTitle: [{ type: Input }],
    name: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQU94QjtRQUhTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUVKLENBQUM7OztZQVpqQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHVPQUFvQzs7YUFFckM7Ozs7MkJBR0UsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHRvb2xUaXBUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMwRDBDMEInO1xuICBASW5wdXQoKSBzaXplID0gMjA7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19