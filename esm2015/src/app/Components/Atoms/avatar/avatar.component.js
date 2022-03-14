import { Component, Input } from '@angular/core';
export class AvatarComponent {
    constructor() { }
    ngOnInit() {
        this.styles = { 'background-color': this.backgroundColor, 'color': this.color };
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-avatar',
                template: "<nz-avatar [nzText]=\"text\" [nzSize]=\"size\" [ngStyle]=\"styles\"></nz-avatar>\n",
                styles: ["nz-avatar{margin:10px}"]
            },] }
];
AvatarComponent.ctorParameters = () => [];
AvatarComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    color: [{ type: Input }],
    backgroundColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8sZUFBZTtJQVMxQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFHLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztJQUNqRixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw4RkFBc0M7O2FBRXZDOzs7O21CQUdFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzhCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF2YXRhclNpemUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1hdmF0YXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXZhdGFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzaXplOiBBdmF0YXJTaXplO1xuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuXG4gIHN0eWxlczogeyAnYmFja2dyb3VuZC1jb2xvcic6IHN0cmluZzsgY29sb3I6IHN0cmluZzsgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3R5bGVzID0geydiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsICdjb2xvcicgOiB0aGlzLmNvbG9yfTtcbiAgfVxuXG59XG4iXX0=