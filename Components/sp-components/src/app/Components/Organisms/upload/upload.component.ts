import { appUploadFileIcon } from '../../../svg/File/upload_file';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

export interface IUpload {
  title: string;
  content: string;
  action1: () => any;
  action1Label: string;
}

@Component({
  selector: 'sp-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  upload: IUpload;

  uploadFile = appUploadFileIcon.name;

  modalRef: NzModalRef;
  @ViewChild('tplTitle') tplTitle?: TemplateRef<{}>;
  @ViewChild('tplContent') tplContent?: TemplateRef<{}>;
  @ViewChild('tplFooter') tplFooter?: TemplateRef<{}>;

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private msg: NzMessageService) { }

  createModalUpload(upload: IUpload) {
    this.upload = upload;
    this.createTplModal(this.tplTitle, this.tplContent, this.tplFooter);
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modalRef = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true,
    });
  }

  ngOnInit() {
  }

  handleChange({ file, fileList }: any): void {
    const status = file.status;
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

}
