import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
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
            nzPlacement: 'bottomLeft',
            nzClass: this.cssClass
        });
    }
    onAction(callback) {
        callback();
    }
}
SnackbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-snackbar',
                template: "<ng-template #template let-snackbar=\"data\">\n    <div class=\"ant-notification-notice-content\">\n        <div>\n            <div class=\"ant-notification-notice-message\">\n                {{ snackbar.message }}\n            </div>\n            <div *ngIf=\"snackbar.description\" class=\"ant-notification-notice-description\">\n                {{ snackbar.description }}\n            </div>\n        </div>\n\n        <div class=\"action ant-notification-notice-btn\">\n            <span *ngIf=\"snackbar.actionMessage\" (click)=\"onAction(snackbar.actionEvent)\">\n                {{ snackbar.actionMessage | uppercase }}\n            </span>\n        </div>\n    </div>\n</ng-template>\n",
                styles: [".ant-notification-notice-content{background-color:#0d0c0b;color:#fff;display:flex;align-items:center}.action{margin-left:auto}.ant-notification-notice-btn{color:#fff}.ant-notification-notice-message{color:#fff;margin-bottom:0!important}.ant-notification-notice-description{margin-top:5px}.ant-notification-notice-btn{float:left;margin-top:8px;cursor:pointer}"]
            },] }
];
SnackbarComponent.ctorParameters = () => [
    { type: NzNotificationService }
];
SnackbarComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }],
    cssClass: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2tiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVFuRSxNQUFNLE9BQU8saUJBQWlCO0lBSzVCLFlBQW9CLFlBQW1DO1FBQW5DLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtJQUN2RCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBbUI7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVMsRUFDdkM7WUFDRSxPQUFPLEVBQ1A7Z0JBQ0UsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLEtBQUssRUFBRSxPQUFPO2FBQ2Y7WUFDRCxNQUFNLEVBQUUsUUFBUTtZQUNoQixXQUFXLEVBQUUsWUFBWTtZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDdkIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUlELFFBQVEsQ0FBQyxRQUFtQjtRQUMxQixRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGlzQkFBd0M7O2FBRXpDOzs7WUFOUSxxQkFBcUI7Ozt1QkFVM0IsU0FBUyxTQUFDLFdBQVc7dUJBQ3JCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zbmFja2JhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbmFja2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NuYWNrYmFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTbmFja2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBJbnB1dCgpIGNzc0NsYXNzPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgY3JlYXRlU25hY2tiYXIoc25hY2tiYXI6IElTbmFja2Jhcik6IHZvaWQge1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnRlbXBsYXRlKHRoaXMudGVtcGxhdGUhLFxuICAgICAge1xuICAgICAgICBuelN0eWxlOlxuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJyMwRDBDMEInLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXG4gICAgICAgIH0sXG4gICAgICAgIG56RGF0YTogc25hY2tiYXIsXG4gICAgICAgIG56UGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXG4gICAgICAgIG56Q2xhc3M6IHRoaXMuY3NzQ2xhc3NcbiAgICAgIH1cbiAgICApO1xuICB9XG5cblxuXG4gIG9uQWN0aW9uKGNhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU25hY2tiYXIge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFjdGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uRXZlbnQ6ICgpID0+IGFueTtcbn1cbiJdfQ==