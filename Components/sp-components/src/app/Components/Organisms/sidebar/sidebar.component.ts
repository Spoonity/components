import { appExpandMoreIcon } from '../../../svg/Navigation/expand_more';
import { appLogoutIcon } from '../../../svg/Action/logout';
import { appAccountBoxIcon } from '../../../svg/Action/account_box';
import { appExpandLessIcon } from '../../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from '../../../svg/Hardware/keyboard_tab';
import { appSendIcon } from '../../../svg/Content/send';
import { appSettingsIcon } from '../../../svg/Action/settings';
import { appRecentActorsIcon } from '../../../svg/AV/recent_actors';
import { appPlaceIcon } from '../../../svg/Maps/place';
import { appRedeemIcon } from '../../../svg/Action/redeem';
import { appPeopleIcon } from '../../../svg/Social/people';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
import { Component, Input, OnInit } from '@angular/core';
import { appHomeIcon } from '../../../svg/Action/home';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface IUserData {
  name: string;
  id: string;
  email: string;
  title: string;
  company: string;
}

export interface ISidebar {
  users: IUserData[];
  logout: () => any;
}

@Component({
  selector: 'sp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarData: ISidebar = {} as ISidebar;

  userDisplay: IUserData = {} as IUserData;
  otherAccounts: IUserData[] = [] as IUserData[];
  AccountsDisplay: IUserData[] = this.otherAccounts;

  multipleAccounts = false;

  constructor() {}

  avatarSize: AvatarSize = AvatarSize.medium;

  keyboarTab = appKeyboardTabIcon.name;
  expandLess = appExpandLessIcon.name;
  accountBox = appAccountBoxIcon.name;
  logoutIcon = appLogoutIcon.name;
  expandMore = appExpandMoreIcon.name;

  buttonType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;

  inputFilter: string;

  iconColor = '#FFF';

  isCollapse = false;
  onToggleLogout = false;
  multipleAccountsSelection = false;

  MenuWidht = '280px';
  MenuHeight = '857px';
  OptionWidht = '240px';
  lineRight = '-20px';

  optionsData = [
    {title: 'Home', icon: appHomeIcon, isActive: true},
    {title: 'Customers', icon: appPeopleIcon, isActive: false},
    {title: 'EGift Management', icon: appRedeemIcon, isActive: false},
    {title: 'Locations', icon: appPlaceIcon, isActive: false},
    {title: 'Users', icon: appRecentActorsIcon, isActive: false},
    {title: 'Setup', icon: appSettingsIcon, isActive: false},
    {title: 'Campaigns', icon: appSendIcon, isActive: false}
  ];

  ngOnInit() {
    if (this.sidebarData.users.length > 1) { this.multipleAccounts = true; }
    this.sidebarData.users.forEach((user: IUserData) => {
      this.sidebarData.users.indexOf(user) === 0 ? this.userDisplay = user : this.otherAccounts.push(user);
    });
  }

  onCollapse() {
    if (this.isCollapse) {
      this.isCollapse = false;
      this.MenuWidht = '280px';
      this.OptionWidht = '240px';
      this.lineRight = '-20px';

    } else if (!this.isCollapse && this.onToggleLogout) {
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
      this.multipleAccountsSelection = false;
    }
  }

  onActive(option: any) {
    this.optionsData.forEach((e: any) => {
      if (e.title === option.title) {
        option.isActive = true;
      } else {
        e.isActive = false;
      }
    });
  }

  toggleLogout() {
    if (this.onToggleLogout && !this.isCollapse) {
      this.onToggleLogout = false;
      this.MenuHeight = '857px';
    } else {
      this.onToggleLogout = true;
      this.MenuHeight = '780px';
    }
  }

  expandAccounts() {
    if (this.multipleAccountsSelection) {
      this.multipleAccountsSelection = false;
    } else {
      this.multipleAccountsSelection = true;
    }
  }

  switchAccount(account: IUserData) {
    this.userDisplay = {} as IUserData;
    this.otherAccounts = [];
    this.sidebarData.users.forEach((user: IUserData) => {
      user.id === account.id ? this.userDisplay = user : this.otherAccounts.push(user);
    });
  }

  filter() {
    this.AccountsDisplay = [];
    this.otherAccounts.filter((user: IUserData) => {
      const test = user.name.toLocaleLowerCase().includes(this.inputFilter.toLocaleLowerCase());
      if (test) { this.AccountsDisplay.push(user); }
    });
  }

}
