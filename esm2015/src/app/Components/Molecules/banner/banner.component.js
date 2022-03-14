import { Component, EventEmitter, Input, Output } from '@angular/core';
export class BannerComponent {
    constructor() {
        this.bannerList = [];
        this.closeCallback = new EventEmitter();
        /* icons by type */
        this.icon = {
            error: 'error',
            warning: 'warning',
            success: 'check-circle',
            info: 'priority-high'
        };
        /* close state for each banner */
        this.close = {};
    }
    /* handle close button */
    onCloseButtonClick(id) {
        this.close[id] = true;
        setTimeout(() => {
            this._removeBanner(id);
        }, 200);
    }
    /* remove banner */
    _removeBanner(id) {
        const remove = this.bannerList.filter((b) => b.id !== id);
        this.bannerList = [...remove];
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-banner',
                template: "<div *ngFor=\"let banner of bannerList\" class=\"spt-spacing-y--1\">\n    <div class=\"spt-elevation--6 banner-component banner-{{banner.type}}\" [ngClass]=\"{'banner-hide': close[banner.id]}\">\n        <div class=\"banner-icon\">\n            <svg-icon name=\"{{icon[banner.type]}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n        <div class=\"banner-message banner-message-action\">{{banner.message}}</div>\n        <div class=\"banner-close-action\" (click)=\"onCloseButtonClick(banner.id)\">\n            <nz-divider nzType=\"vertical\"></nz-divider>\n            <div class=\"banner-icon close-icon\">\n                <svg-icon name=\"clear\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".banner-component{min-height:48px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;left:16px;top:16px;border-radius:4px;padding:12px 16px;display:flex;align-items:center}.banner-component.banner-hide{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out}.banner-component.banner-error{background-color:#ef5350}.banner-component.banner-warning{background-color:#f7ad00}.banner-component.banner-info{background-color:#067bc2}.banner-component.banner-success{background-color:#4caf50}.banner-component .banner-message{color:#fff;padding-left:10px}.banner-component .banner-message.banner-message-action{padding-right:16px}.banner-component .banner-icon{height:24px}.banner-component .banner-icon svg path:last-child{fill:#fff}.banner-component .banner-close-action{margin-left:auto;display:flex;align-items:center;cursor:pointer}.banner-component .banner-close-action .ant-divider.ant-divider-vertical{height:24px!important;margin:0!important;background-color:hsla(0,0%,100%,.32);top:0}.banner-component .banner-close-action .close-icon{padding-left:16px}"]
            },] }
];
BannerComponent.propDecorators = {
    bannerList: [{ type: Input }],
    closeCallback: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWFyRSxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQU1XLGVBQVUsR0FBYyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVyRSxtQkFBbUI7UUFDbkIsU0FBSSxHQUE0QjtZQUM5QixLQUFLLEVBQUUsT0FBTztZQUNkLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxlQUFlO1NBQ3RCLENBQUM7UUFFRixpQ0FBaUM7UUFDakMsVUFBSyxHQUE2QixFQUFFLENBQUM7SUFldkMsQ0FBQztJQWJDLHlCQUF5QjtJQUN6QixrQkFBa0IsQ0FBQyxFQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxtQkFBbUI7SUFDWCxhQUFhLENBQUMsRUFBVTtRQUM5QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixteEJBQW9DOzthQUVyQzs7O3lCQUVFLEtBQUs7NEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSUJhbm5lciB7XG4gIGlkOiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHlwZTogJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdzdWNjZXNzJztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LWJhbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnYmFubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Jhbm5lci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGJhbm5lckxpc3Q6IElCYW5uZXJbXSA9IFtdO1xuICBAT3V0cHV0KCkgY2xvc2VDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKiBpY29ucyBieSB0eXBlICovXG4gIGljb246IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIGVycm9yOiAnZXJyb3InLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlJyxcbiAgICBpbmZvOiAncHJpb3JpdHktaGlnaCdcbiAgfTtcblxuICAvKiBjbG9zZSBzdGF0ZSBmb3IgZWFjaCBiYW5uZXIgKi9cbiAgY2xvc2U6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSA9IHt9O1xuXG4gIC8qIGhhbmRsZSBjbG9zZSBidXR0b24gKi9cbiAgb25DbG9zZUJ1dHRvbkNsaWNrKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmNsb3NlW2lkXSA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVCYW5uZXIoaWQpO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICAvKiByZW1vdmUgYmFubmVyICovXG4gIHByaXZhdGUgX3JlbW92ZUJhbm5lcihpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gdGhpcy5iYW5uZXJMaXN0LmZpbHRlcigoYjogSUJhbm5lcikgPT4gYi5pZCAhPT0gaWQpO1xuICAgIHRoaXMuYmFubmVyTGlzdCA9IFsuLi5yZW1vdmVdO1xuICB9XG59XG4iXX0=