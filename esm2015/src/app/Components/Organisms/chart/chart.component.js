import { Component, Input } from '@angular/core';
export class ChartComponent {
    constructor() {
        this.options = {};
        this.data = [];
        this.labels = [];
    }
    ngOnInit() {
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-chart',
                template: "<div style=\"width: 100%;\">\n  <canvas\n    baseChart\n    [chartType]=\"type\"\n    [datasets]=\"data\"\n    [labels]=\"labels\"\n    [options]=\"options\"\n    [legend]=\"true\"\n  >\n  </canvas>\n</div>\n",
                styles: [""]
            },] }
];
ChartComponent.ctorParameters = () => [];
ChartComponent.propDecorators = {
    options: [{ type: Input }],
    data: [{ type: Input }],
    labels: [{ type: Input }],
    type: [{ type: Input }]
};
export var ChartType;
(function (ChartType) {
    ChartType["pie"] = "pie";
    ChartType["doughnut"] = "doughnut";
    ChartType["bar"] = "bar";
    ChartType["line"] = "line";
    ChartType["polarArea"] = "polarArea";
    ChartType["radar"] = "radar";
    ChartType["horizontalBar"] = "horizontalBar";
})(ChartType || (ChartType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL09yZ2FuaXNtcy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGNBQWM7SUFPekI7UUFMUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFHTCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDROQUFxQzs7YUFFdEM7Ozs7c0JBR0UsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7QUFTUixNQUFNLENBQU4sSUFBWSxTQVFYO0FBUkQsV0FBWSxTQUFTO0lBQ25CLHdCQUFXLENBQUE7SUFDWCxrQ0FBcUIsQ0FBQTtJQUNyQix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtJQUNiLG9DQUF1QixDQUFBO0lBQ3ZCLDRCQUFlLENBQUE7SUFDZiw0Q0FBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBUlcsU0FBUyxLQUFULFNBQVMsUUFRcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgb3B0aW9ucyA9IHt9O1xuICBASW5wdXQoKSBkYXRhID0gW107XG4gIEBJbnB1dCgpIGxhYmVscyA9IFtdO1xuICBASW5wdXQoKSB0eXBlOiBDaGFydFR5cGU7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIENoYXJ0VHlwZSB7XG4gIHBpZSA9ICdwaWUnLFxuICBkb3VnaG51dCA9ICdkb3VnaG51dCcsXG4gIGJhciA9ICdiYXInLFxuICBsaW5lID0gJ2xpbmUnLFxuICBwb2xhckFyZWEgPSAncG9sYXJBcmVhJyxcbiAgcmFkYXIgPSAncmFkYXInLFxuICBob3Jpem9udGFsQmFyID0gJ2hvcml6b250YWxCYXInXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNoYXJ0IHtcbiAgZGF0YTogQXJyYXk8SURhdGE+O1xuICBsYWJlbHM6IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGEge1xuICBkYXRhOiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbiJdfQ==