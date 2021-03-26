import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'sp-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.less']
})
export class DialogsComponent implements OnInit {

  title: string;
  content: string;
  action1: () => any;
  action2: () => any;

  modalRef: NzModalRef;
  @ViewChild('tplTitle', { static: false }) tplTitle?: TemplateRef<{}>;
  @ViewChild('tplContent', { static: false }) tplContent?: TemplateRef<{}>;
  @ViewChild('tplFooter', { static: false }) tplFooter?: TemplateRef<{}>;

  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

  createModal(title: string, content: string, action1: () => any, action2: () => any) {
    this.title = title;
    this.content = content;
    this.action1 = action1;
    this.action2 = action2;
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
