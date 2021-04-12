import { Component, Input, OnInit } from '@angular/core';
import { appRedeemIcon } from 'src/app/svg/Action/redeem';
import { appCallIcon } from 'src/app/svg/Communication/call';
import { appEmailIcon } from 'src/app/svg/Communication/email';
import { appSmartphoneIcon } from 'src/app/svg/Hardware/smartphone';
import { appEastIcon } from 'src/app/svg/Navigation/east';
import { appMoreVertIcon } from 'src/app/svg/Navigation/more_vert';
import { appSmsIcon } from 'src/app/svg/Notification/sms';
import { appPeopleIcon } from 'src/app/svg/Social/people';
import { AvatarSize, ButtonSize, ButtonType } from 'src/app/utils/enums';

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
  selector: 'sp-card',
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

  backgroundColor: string = '#FFEBEE';
  color: string = '#EF5350';

  avatarSize: AvatarSize = AvatarSize.large;

  btnType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;


  constructor() { }

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
