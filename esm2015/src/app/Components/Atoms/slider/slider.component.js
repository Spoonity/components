import { Component, Input } from '@angular/core';
export class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-slider',
                template: "<nz-slider [nzMax]=\"max\" [nzDisabled]=\"disable\" [nzStep]=\"step\" [ngModel]=\"start\"></nz-slider>",
                styles: [""]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    max: [{ type: Input }],
    disable: [{ type: Input }],
    step: [{ type: Input }],
    start: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUUxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrSEFBc0M7O2FBRXZDOzs7O2tCQVFFLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCkgZGlzYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSBzdGFydDogbnVtYmVyO1xuXG59XG4iXX0=