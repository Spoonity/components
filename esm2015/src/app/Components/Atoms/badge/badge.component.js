import { Component, Input } from '@angular/core';
export class BadgeComponent {
    constructor() {
        this.fontSize = 14;
    }
    ngOnInit() {
    }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-badge',
                template: "\n<nz-tag class=\"badges\" nzStandalone [nzColor]=\"color\" [style.font-size]=\"fontSize + 'px'\" [style.line-height]=\"(fontSize + 2) + 'px'\">{{name}}</nz-tag>\n",
                styles: [".badges{display:flex}.ant-tag{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;padding:4px 12px!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;border:none!important}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    name: [{ type: Input }],
    color: [{ type: Input }],
    fontSize: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL0F0b21zL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQU9TLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFQUCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCtLQUFxQzs7YUFFdEM7Ozs7bUJBUUUsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJhZGdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgZm9udFNpemUgPSAxNDtcblxufVxuIl19