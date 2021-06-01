import { OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
export declare class DialogsComponent implements OnInit {
    private modal;
    private viewContainerRef;
    dialog: IModal;
    modalRef: NzModalRef;
    tplTitle?: TemplateRef<{}>;
    tplContent?: TemplateRef<{}>;
    tplFooter?: TemplateRef<{}>;
    constructor(modal: NzModalService, viewContainerRef: ViewContainerRef);
    createModal(dialog: IModal): void;
    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void;
    ngOnInit(): void;
}
export interface IModal {
    title: string;
    content: string;
    action1: () => any;
    action2: () => any;
    action1Label: string;
    action2Label: string;
}
