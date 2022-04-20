import { appExpandMoreIcon } from '../../../svg/Navigation/expand_more';
import { appLogoutIcon } from '../../../svg/Action/logout';
import { appAccountBoxIcon } from '../../../svg/Action/account_box';
import { appExpandLessIcon } from '../../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from '../../../svg/Hardware/keyboard_tab';
import { ButtonSize, ButtonType } from '../../../utils/enums';
import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

export interface IMenuItems {
  title: string;
  icon: any;
  link: string,
  isActive: boolean;
}

@Component({
  selector: 'spt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarData: ISidebar = {} as ISidebar;
  @Input() optionsData: IMenuItems[];

  userDisplay: IUserData = {} as IUserData;
  otherAccounts: IUserData[] = [] as IUserData[];
  AccountsDisplay: IUserData[] = this.otherAccounts;

  multipleAccounts = false;

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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

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

  onActive(option: IMenuItems) {
    this.optionsData.forEach((e: any) => {
      if (e.title === option.title) {
        option.isActive = true;
      } else {
        e.isActive = false;
      }
    });
    this._router.navigate([option.link], {relativeTo: this._route}).then();
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
