import { Directive, HostListener, Input } from '@angular/core';
export class MenuTriggerDirective {
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.spMenuTrigger.toggleMenu();
    }
}
MenuTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[spMenuTrigger]'
            },] }
];
MenuTriggerDirective.propDecorators = {
    spMenuTrigger: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS10cmlnZ2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvbWVudS9tZW51LXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU03RCxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLDBCQUEwQjtJQUVuQixPQUFPLENBQUMsS0FBYztRQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs0QkFJRSxLQUFLO3NCQUdMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vbWVudS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3BNZW51VHJpZ2dlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVUcmlnZ2VyRGlyZWN0aXZlIHtcblxuICAvKiBtZW51IGNvbXBvbmVudCB0byBsYXVuY2ggKi9cbiAgQElucHV0KCkgc3BNZW51VHJpZ2dlcjogTWVudUNvbXBvbmVudDtcblxuICAvKiBjbGljayBldmVudCBsaXN0ZW5lciAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBVSUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNwTWVudVRyaWdnZXIudG9nZ2xlTWVudSgpO1xuICB9XG59XG4iXX0=