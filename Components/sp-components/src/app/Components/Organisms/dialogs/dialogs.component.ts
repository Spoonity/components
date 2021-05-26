import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'spt-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.less']
})
export class DialogsComponent implements OnInit {

  dialog: IModal;

  modalRef: NzModalRef;
  @ViewChild('tplTitle') tplTitle?: TemplateRef<{}>;
  @ViewChild('tplContent') tplContent?: TemplateRef<{}>;
  @ViewChild('tplFooter') tplFooter?: TemplateRef<{}>;

  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

  createModal(dialog: IModal) {
    this.dialog = dialog;
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

export interface IModal {
  title: string;
  content: string;
  action1: () => any;
  action2: () => any;
  action1Label: string;
  action2Label: string;
}
