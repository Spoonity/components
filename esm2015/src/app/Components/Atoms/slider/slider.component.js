import { Component, Input } from '@angular/core';
export class SliderComponent {
    constructor() { }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-slider',
                template: "<nz-slider [nzMax]=\"max\" [nzDisabled]=\"disable\" [nzStep]=\"step\" [ngModel]=\"start\" nzTooltipVisible=\"never\"></nz-slider>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQWExQixnQkFBZ0IsQ0FBQzs7O1lBbEJsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLCtJQUFzQzs7YUFFdkM7Ozs7a0JBR0UsS0FBSztzQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCB7XG4gIC8qIG1heGltdW0gdmFsdWUgKi9cbiAgQElucHV0KCkgbWF4OiBudW1iZXI7XG5cbiAgLyogZGlzYWJsZWQgc3RhdGUgKi9cbiAgQElucHV0KCkgZGlzYWJsZTogYm9vbGVhbjtcblxuICAvKiBhbW91bnQgdG8ganVtcCB3aGVuIHNsaWRpbmcgKi9cbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuXG4gIC8qIHN0YXJ0aW5nIHZhbHVlICovXG4gIEBJbnB1dCgpIHN0YXJ0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==