import { appUploadFileIcon } from '../../../svg/File/upload_file';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

export interface IUpload {
  title: string;
  content: string;
  action1: () => any;
  action1Label: string;
}

@Component({
  selector: 'sp-upload-example',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  upload: IUpload;

  uploadFile = appUploadFileIcon.name;

  modalRef: NzModalRef;
  @ViewChild('tplTitle', { static: false }) tplTitle?: TemplateRef<{}>;
  @ViewChild('tplContent', { static: false }) tplContent?: TemplateRef<{}>;
  @ViewChild('tplFooter', { static: false }) tplFooter?: TemplateRef<{}>;

  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

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

}
