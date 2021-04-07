import { appExpandMoreIcon } from './../../svg/Navigation/expand_more';
import { appLogoutIcon } from './../../svg/Action/logout';
import { appAccountBoxIcon } from './../../svg/Action/account_box';
import { appExpandLessIcon } from './../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from './../../svg/Hardware/keyboard_tab';
import { appSendIcon } from './../../svg/Content/send';
import { appSettingsIcon } from './../../svg/Action/settings';
import { appRecentActorsIcon } from './../../svg/AV/recent_actors';
import { appPlaceIcon } from './../../svg/Maps/place';
import { appRedeemIcon } from './../../svg/Action/redeem';
import { appPeopleIcon } from './../../svg/Social/people';
import { AvatarSize, ButtonSize, ButtonType } from 'src/app/utils/enums';
import { Component, Input, OnInit } from '@angular/core';
import { appHomeIcon } from './../../svg/Action/home';

@Component({
  selector: 'sp-sidebar-example',
  templateUrl: './sidebar-example.component.html',
  styleUrls: ['./sidebar-example.component.less']
})
export class SidebarExampleComponent implements OnInit {

  constructor() { }

  avatarSize: AvatarSize = AvatarSize.medium;
  avatarText: string = "B";
  
  keyboarTab = appKeyboardTabIcon.name;
  expandLess = appExpandLessIcon.name;
  accountBox = appAccountBoxIcon.name;
  logoutIcon = appLogoutIcon.name;
  expandMore = appExpandMoreIcon.name;

  buttonType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;
  
  isCollapse: boolean = false;
  onToggleLogout: boolean = false;

  MenuWidht = '280px';
  MenuHeight = '857px';
  OptionWidht = '240px';
  lineRight = '-20px';

  @Input() multipleAccounts:boolean = false;


  optionsData = [
    {title: 'Home', icon: appHomeIcon, isActive: true},
    {title: 'Customers', icon: appPeopleIcon, isActive: false},
    {title: 'EGift Management', icon: appRedeemIcon, isActive: false},
    {title: 'Locations', icon: appPlaceIcon, isActive: false},
    {title: 'Users', icon: appRecentActorsIcon, isActive: false},
    {title: 'Setup', icon: appSettingsIcon, isActive: false},
    {title: 'Campaigns', icon: appSendIcon, isActive: false}
  ]

  ngOnInit() {}

  onCollapse() {
    if (this.isCollapse){
      this.isCollapse = false
      this.MenuWidht = '280px';
      this.OptionWidht = '240px';
      this.lineRight = '-20px';

    } else if (!this.isCollapse && this.onToggleLogout){
      this.isCollapse = true;
      this.MenuWidht = '88px';
      this.OptionWidht = '46px';
      this.lineRight = '-22px';
      this.onToggleLogout = false;
      this.MenuHeight = '857px';

    } else {
      this.isCollapse = true;
      this.MenuWidht = '88px';
      this.OptionWidht = '46px';
      this.lineRight = '-22px';
    }
  }

  onActive(option: any) {
    this.optionsData.forEach((e: any) => {
      if(e.title === option.title){
        option.isActive = true;
      } else {
        e.isActive = false;
      }
    });
  }

  toggleLogout() {
    if(this.onToggleLogout && !this.isCollapse){
      this.onToggleLogout = false;
      this.MenuHeight = '857px';
    } else {
      this.onToggleLogout = true;
      this.MenuHeight = '780px';
    }
  }

  expandAccounts() {
    
  }
  
}
