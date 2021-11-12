import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() checked: Boolean;
  @Input() unChecked: Boolean;

  @Input() option: () => {};
  @Input() cancel: () => {};
  @Input() goToGuest: () => {};

  @Output() onSelect = new EventEmitter<any>();

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
  grey = '#e0e0e0';
  orange = '#FFB300';
  campaignColor;

  avatarSize: AvatarSize = AvatarSize.large;

  btnType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;

  constructor() {}

  ngOnInit() {
    this.isMouseOver = false;
    if(this.checked){
      this.customer.isSelect = true;
    }
    if(this.unChecked){
      this.customer.isSelect = false;
    }
  }

  toggleCard() {
    if (this.isSend) {
      this.isSend = false;
    } else {
      this.isSend = true;
    }
  }

  getCampaignStatus(campaign){
    if (campaign.status.id == CAMPAIGN_STATUS.ACTIVE){
      this.campaignColor = this.green;
      return 'SENDING';
    }
    if (campaign.status.id == CAMPAIGN_STATUS.INACTIVE) {
      if (this.campaign.date_scheduled){
        this.campaignColor = this.orange;
        return 'SCHEDULED';
      }
      this.campaignColor = this.grey;
      return 'DRAFT';
    }
    if (campaign.status.id == CAMPAIGN_STATUS.EXPIRED) {
      this.campaignColor = this.red;

      return 'EXPIRED';
    }
    if (campaign.status.id == CAMPAIGN_STATUS.DELETED) {
      this.campaignColor = this.red;
      return 'DELETED';
    }
    this.campaignColor = this.green;
    return 'SENT';
  }

  getCampaignMetric(type, campaign){
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

  onSelectEvent($event){
    this.onSelect.emit($event);
  }
}
