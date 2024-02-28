import { Component, Input } from '@angular/core';
export class AvatarComponent {
    constructor() {
        /** avatar component size (default: 40) */
        this.size = 40;
        /** font color (default: #0D0C0B) */
        this.textColor = '#0D0C0B';
        /** background color (default: #FF9900) */
        this.backgroundColor = '#FF9900';
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-avatar',
                template: "<div class=\"avatar-container\"\n     [style.width.px]=\"size < 30 ? 30 : size\"\n     [style.height.px]=\"size < 30 ? 30 : size\"\n     [style.background-color]=\"backgroundColor\">\n    <div class=\"avatar-text\"\n         [style.font-size.px]=\"size <= 45 ? 15 : size - 30\"\n         [style.color]=\"textColor\">{{text[0] | uppercase}}</div>\n</div>\n",
                styles: [".avatar-container{border-radius:100px;display:flex;align-items:center;justify-content:center}.avatar-text{height:-moz-fit-content;height:fit-content}"]
            },] }
];
AvatarComponent.ctorParameters = () => [];
AvatarComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    textColor: [{ type: Input }],
    backgroundColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9BdG9tcy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxNQUFNLE9BQU8sZUFBZTtJQWExQjtRQVpBLDBDQUEwQztRQUNqQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBSzNCLG9DQUFvQztRQUMzQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRXZDLDBDQUEwQztRQUNqQyxvQkFBZSxHQUFXLFNBQVMsQ0FBQztJQUU3QixDQUFDOzs7WUFsQmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK1dBQXNDOzthQUV2Qzs7OzttQkFHRSxLQUFLO21CQUdMLEtBQUs7d0JBR0wsS0FBSzs4QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F2YXRhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG4gIC8qKiBhdmF0YXIgY29tcG9uZW50IHNpemUgKGRlZmF1bHQ6IDQwKSAqL1xuICBASW5wdXQoKSBzaXplOiBudW1iZXIgPSA0MDtcblxuICAvKiogdGhlIHRleHQgdG8gZ2V0IHRoZSBpbml0aWFsIGZyb20gKG9ubHkgZGlzcGxheXMgdGhlIGZpcnN0IGNoYXJhY3RlcikgKi9cbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKiBmb250IGNvbG9yIChkZWZhdWx0OiAjMEQwQzBCKSAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3I6IHN0cmluZyA9ICcjMEQwQzBCJztcblxuICAvKiogYmFja2dyb3VuZCBjb2xvciAoZGVmYXVsdDogI0ZGOTkwMCkgKi9cbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAnI0ZGOTkwMCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==