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
  id: number;
  notification_template;
  notification_template_id: number;
  name: string;
  description?: any;
  error?: any;
  date_scheduled: number;
  date_sent?: any;
  date_created: number;
  date_updated: number;
  status;
  target_group_id: number
  // TODO: "metrics" is not originally on ICampaign, so will likely need to update this once stats API is sorted out
  metrics;
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

export enum CAMPAIGN_STATUS {
  ACTIVE = 1,
  INACTIVE = 2,
  EXPIRED = 3,
  DELETED = 4,
  COMPLETE = 5,
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

  CAMPAIGN_STATUS = CAMPAIGN_STATUS;

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

  getStatus(id){
    if (id == CAMPAIGN_STATUS.ACTIVE){
      return 'SENDING';
    }
    if (id == CAMPAIGN_STATUS.INACTIVE) {
      return 'DRAFT';
    }
    if (id == CAMPAIGN_STATUS.EXPIRED) {
      return 'EXPIRED';
    }
    if (id == CAMPAIGN_STATUS.DELETED) {
      return 'DELETED';
    }
    return 'SENT';
  }

  getMetric(type, campaign){
    let metric = campaign.metrics.filter(stat => { return stat.type === type })[0];

    if (type === 'Send') {
      return (metric.value ? metric.value : 0);
    }
    if (type === 'Open') {
      return (metric.value ? metric.value + '%' : '--');
    }
    if (type === 'Spend') {
      return (metric.value ? "$" + metric.value : '--');
    }
    return (metric.value ? metric.value : '--');
  }
}
