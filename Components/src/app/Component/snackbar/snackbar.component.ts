import { Component, EventEmitter, Injectable, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { NzNotificationConfigLegacy, NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'sp-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})

export class SnackbarComponent implements OnInit {

  @ViewChild(TemplateRef, { static: false }) template?: TemplateRef<{}>;

  constructor(private notification: NzNotificationService) {
    let conf : NzNotificationConfigLegacy = {nzPlacement:'bottomRight'};
     notification.config(conf);
   }

  ngOnInit() {
  }

  createSnackbar(snackbar: ISnackbar): void {
    this.notification.template(this.template!,
      {
        nzStyle:
        {
          background: '#0D0C0B',
          color: 'white'
        },
        nzData: snackbar
      },
    );
  }



  onAction(callback: () => any) {
    callback();
  }

}

export interface ISnackbar {
  message: string;
  description: string;
  actionMessage: string;
  actionEvent: () => any;
}
