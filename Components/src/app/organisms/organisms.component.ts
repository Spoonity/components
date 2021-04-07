import { appRedeemIcon } from './../svg/Action/redeem';
import { AvatarSize } from 'src/app/utils/enums';
import { appCallIcon } from './../svg/Communication/call';
import { appSmartphoneIcon } from './../svg/Hardware/smartphone';
import { appEmailIcon } from './../svg/Communication/email';
import { appMoreVertIcon } from './../svg/Navigation/more_vert';
import { appEastIcon } from './../svg/Navigation/east';
import { appPeopleIcon } from './../svg/Social/people';
import { appSmsIcon } from './../svg/Notification/sms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IBreadCrumbItem } from '../Components/breadcrumb/breadcrumb.component';
import { ChartType } from '../Components/Organisms/chart/chart.component';
import { DialogsComponent, IModal } from '../Components/Organisms/dialogs/dialogs.component';
import { ButtonSize, ButtonType } from '../utils/enums';
import { UploadExampleComponent, IUpload } from './upload-example/upload-example.component';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.less']
})
export class OrganismsComponent implements OnInit {
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  type1: ChartType = ChartType.line;

  @ViewChild(DialogsComponent, { static: false }) dialog?: DialogsComponent;
  @ViewChild(UploadExampleComponent, { static: false }) upload?: UploadExampleComponent;

  sms = appSmsIcon.name;
  people = appPeopleIcon.name;
  send = appEastIcon.name;
  moreVert = appMoreVertIcon.name;
  email = appEmailIcon.name;
  smartphone = appSmartphoneIcon.name;
  call = appCallIcon.name;
  redeem = appRedeemIcon.name;

  isSend: boolean = true;
  isMouseOver: boolean = false;
  isPressed:boolean = false;

  constructor() { }

  breadcrumbItems: IBreadCrumbItem[] = [];
  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;
  avatarSize: AvatarSize = AvatarSize.medium;

  btnType: ButtonType = ButtonType.secondary;

  cardType: string = 'sms';

  enumCardType = [
    'sms',
    'email',
    'smartphone'
  ]

  deliverProcess: string = 'PENDING';

  emunDeliverProcess = [
    'PENDING',
    'ENROUTE',
    'DELIVERED'
  ]

  ngOnInit() {
    this.breadcrumbItems = this.getBreadcrumbsItems();
  }

  createModal(dialog: IModal) {
    dialog = {
      title: 'Dialog Header',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Action 1') },
      action2: () => { alert('Action 1') },
      action1Label: 'Action 1',
      action2Label: 'Action 2'
    }
    this.dialog.createModal(dialog);
  }

  getBreadcrumbsItems(): IBreadCrumbItem[] {
    return [
      { label: 'Item', route: '' },
      { label: 'Title', route: '' }
    ];
  }

  createModalU(upload: IUpload) {
    upload = {
      title: 'Upload',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Closing') },
      action1Label: 'Close',
    }
    this.upload.createModalUpload(upload);
  }

  toggleCard() {
    if (this.isSend) {
      this.isSend = false;
    } else {
      this.isSend = true;
    }
  }
}

