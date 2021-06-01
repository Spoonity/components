import { OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
export interface IUpload {
    title: string;
    content: string;
    action1: () => any;
    action1Label: string;
}
export declare class UploadComponent implements OnInit {
    private modal;
    private viewContainerRef;
    private msg;
    upload: IUpload;
    uploadFile: string;
    modalRef: NzModalRef;
    tplTitle?: TemplateRef<{}>;
    tplContent?: TemplateRef<{}>;
    tplFooter?: TemplateRef<{}>;
    constructor(modal: NzModalService, viewContainerRef: ViewContainerRef, msg: NzMessageService);
    createModalUpload(upload: IUpload): void;
    createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void;
    ngOnInit(): void;
    handleChange({ file, fileList }: any): void;
}
