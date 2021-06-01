import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
export class SnackbarComponent {
    constructor(notification) {
        this.notification = notification;
    }
    ngOnInit() {
    }
    createSnackbar(snackbar) {
        this.notification.template(this.template, {
            nzStyle: {
                background: '#0D0C0B',
                color: 'white'
            },
            nzData: snackbar,
            nzPlacement: 'bottomLeft'
        });
    }
    onAction(callback) {
        callback();
    }
}
SnackbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-snackbar',
                template: "<ng-template #template let-snackbar=\"data\">\n    <div class=\"ant-notification-notice-content\">\n        <div>\n            <div class=\"ant-notification-notice-message\">\n                {{ snackbar.message }}\n            </div>\n            <div class=\"ant-notification-notice-description\">\n                {{ snackbar.description }}\n            </div>\n            <span class=\"ant-notification-notice-btn\">\n        <span *ngIf=\"snackbar.actionMessage\" (click)=\"onAction(snackbar.actionEvent)\">\n          {{ snackbar.actionMessage }}\n        </span>\n            </span>\n        </div>\n    </div>\n</ng-template>\n",
                styles: [".ant-notification-notice-content{background-color:#0d0c0b;color:#fff}.ant-notification-notice-btn,.ant-notification-notice-message{color:#fff}.ant-notification-notice-btn{float:left;margin-top:8px;cursor:pointer}"]
            },] }
];
SnackbarComponent.ctorParameters = () => [
    { type: NzNotificationService }
];
SnackbarComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBUyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUW5FLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUIsWUFBb0IsWUFBbUM7UUFBbkMsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBQ3ZELENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFtQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUyxFQUN2QztZQUNFLE9BQU8sRUFDUDtnQkFDRSxVQUFVLEVBQUUsU0FBUztnQkFDckIsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNELE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFJRCxRQUFRLENBQUMsUUFBbUI7UUFDMUIsUUFBUSxFQUFFLENBQUM7SUFDYixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix5b0JBQXdDOzthQUV6Qzs7O1lBTlEscUJBQXFCOzs7dUJBVTNCLFNBQVMsU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ub3RpZmljYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc25hY2tiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc25hY2tiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbmFja2Jhci5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlPzogVGVtcGxhdGVSZWY8e30+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY3JlYXRlU25hY2tiYXIoc25hY2tiYXI6IElTbmFja2Jhcik6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnRlbXBsYXRlKHRoaXMudGVtcGxhdGUhLFxuICAgICAge1xuICAgICAgICBuelN0eWxlOlxuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyMwRDBDMEInLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIG56RGF0YTogc25hY2tiYXIsXG4gICAgICAgIG56UGxhY2VtZW50OiAnYm90dG9tTGVmdCdcbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuXG4gIG9uQWN0aW9uKGNhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU25hY2tiYXIge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFjdGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uRXZlbnQ6ICgpID0+IGFueTtcbn1cbiJdfQ==