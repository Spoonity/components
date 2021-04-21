import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'sp-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})

export class SnackbarComponent implements OnInit {

  @ViewChild(TemplateRef) template?: TemplateRef<{}>;

  constructor(private notification: NzNotificationService) {
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
        nzData: snackbar,
        nzPlacement: 'bottomLeft'
      }
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
