import { Component, Input } from '@angular/core';
export class DataVisualizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataVisualizationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-data-visualization',
                template: "<div class=\"data-visualization\">\n  <span class=\"data-visualization-title\">{{ title }}</span>\n  <span class=\"data-visualization-description\">{{ description }}</span>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".data-visualization{border:1px solid #e2e2e2;border-radius:4px;padding:32px;background-color:#fff}.data-visualization-title{display:flex;font-family:Nunito;font-style:normal;font-weight:700;font-size:48px;line-height:56px}.data-visualization-description{display:flex;font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:16px;line-height:24px}"]
            },] }
];
DataVisualizationComponent.ctorParameters = () => [];
DataVisualizationComponent.propDecorators = {
    title: [{ type: Input }],
    description: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS12aXN1YWxpemF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9PcmdhbmlzbXMvZGF0YS12aXN1YWxpemF0aW9uL2RhdGEtdmlzdWFsaXphdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLDBCQUEwQjtJQUtyQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLCtOQUFrRDs7YUFFbkQ7Ozs7b0JBR0UsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1kYXRhLXZpc3VhbGl6YXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS12aXN1YWxpemF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS12aXN1YWxpemF0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVZpc3VhbGl6YXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=