import { Component, Input } from '@angular/core';
export class RadioButtonComponent {
    constructor() {
        this.radioButtons = [
            { radioName: 'A', disable: false },
            { radioName: 'B', disable: true },
            { radioName: 'C', disable: false },
            { radioName: 'D', disable: false },
        ];
    }
    ngOnInit() { }
}
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-radio-button',
                template: "<nz-radio-group \n[ngModel]=\"model\"\n>\n    <label\n    *ngFor=\"let btn of radioButtons\" \n    nz-radio \n    [nzValue]=\"btn.radioName\"\n    [nzDisabled]=\"btn.disable\"\n    >{{btn.radioName}}</label>\n</nz-radio-group>",
                styles: [""]
            },] }
];
RadioButtonComponent.ctorParameters = () => [];
RadioButtonComponent.propDecorators = {
    model: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CO1FBRUEsaUJBQVksR0FBSTtZQUNaLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ2hDLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDO1lBQy9CLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1lBQ2hDLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDO1NBQ25DLENBQUM7SUFQYyxDQUFDO0lBV2pCLFFBQVEsS0FBSSxDQUFDOzs7WUFsQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDhPQUE0Qzs7YUFFN0M7Ozs7b0JBWUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXJhZGlvLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby1idXR0b24uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICByYWRpb0J1dHRvbnMgPSAgW1xuICAgICAge3JhZGlvTmFtZTogJ0EnLCBkaXNhYmxlOiBmYWxzZX0sXG4gICAgICB7cmFkaW9OYW1lOiAnQicsIGRpc2FibGU6IHRydWV9LFxuICAgICAge3JhZGlvTmFtZTogJ0MnLCBkaXNhYmxlOiBmYWxzZX0sXG4gICAgICB7cmFkaW9OYW1lOiAnRCcsIGRpc2FibGU6IGZhbHNlfSxcbiAgXTtcblxuICBASW5wdXQoKSBtb2RlbDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge31cblxuXG59XG4iXX0=