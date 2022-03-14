import { Component, Input } from '@angular/core';
export class IconComponent {
    constructor() {
        this.color = '#0D0C0B';
        this.size = 20;
    }
    ngOnInit() { }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-icon',
                template: "<span nz-tooltip [nzTooltipTitle]=\"toolTipTitle\">\n  <svg-icon class=\"icons\" nz-icon [name]=\"name\" [svgStyle]=\"{'height':size + 'px', 'width':size + 'px', 'fill':color}\">\n  </svg-icon>\n</span>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sYUFBYTtJQU94QjtRQUhTLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUVKLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7OztZQWRkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsd05BQW9DOzthQUVyQzs7OzsyQkFHRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdG9vbFRpcFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3IgPSAnIzBEMEMwQic7XG4gIEBJbnB1dCgpIHNpemUgPSAyMDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19