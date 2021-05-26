import { Component, Input, OnInit } from '@angular/core';
import { appRedeemIcon } from '../../../svg/Action/redeem';
import { appCallIcon } from '../../../svg/Communication/call';
import { appEmailIcon } from '../../../svg/Communication/email';
import { appSmartphoneIcon } from '../../../svg/Hardware/smartphone';
import { appEastIcon } from '../../../svg/Navigation/east';
import { appMoreVertIcon } from '../../../svg/Navigation/more_vert';
import { appSmsIcon } from '../../../svg/Notification/sms';
import { appPeopleIcon } from '../../../svg/Social/people';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';

export interface ICampaign {
  type: string;
  title: string;
  targetGroup: string;
  plataform: string;
  dateCreated: string;
  isSend: boolean;
  sendCount: number;
  openCount: number;
  visitCount: number;
  spendCount: number;
}

export interface ICustomer {
  type: string;
  name: string;
  dateCreated: string;
  isSelect: boolean;
  email: string;
  phone: string;
}

export interface IGiftManagement {
  type: string;
  id: string;
  name: string;
  dateCreated: string;
  deliverProcess: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'spt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() campaign: ICampaign;
  @Input() customer: ICustomer;
  @Input() giftManagement: IGiftManagement;

  @Input() option: () => {};
  @Input() cancel: () => {};
  @Input() goToGuest: () => {};

  sms = appSmsIcon.name;
  people = appPeopleIcon.name;
  send = appEastIcon.name;
  moreVert = appMoreVertIcon.name;
  email = appEmailIcon.name;
  smartphone = appSmartphoneIcon.name;
  call = appCallIcon.name;
  redeem = appRedeemIcon.name;

  isSend = true;
  isMouseOver: boolean;

  white = '#FFEBEE';
  red = '#EF5350';
  green = '#66BB6A';

  avatarSize: AvatarSize = AvatarSize.large;

  btnType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;

  constructor() {}

  ngOnInit() {
    this.isMouseOver = false;
  }

  toggleCard() {
    if (this.isSend) {
      this.isSend = false;
    } else {
      this.isSend = true;
    }
  }
}
