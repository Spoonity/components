import { OnInit, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
export declare class SnackbarComponent implements OnInit {
    private notification;
    template?: TemplateRef<{}>;
    constructor(notification: NzNotificationService);
    ngOnInit(): void;
    createSnackbar(snackbar: ISnackbar): void;
    onAction(callback: () => any): void;
}
export interface ISnackbar {
    message: string;
    description: string;
    actionMessage: string;
    actionEvent: () => any;
}
