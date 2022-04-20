import { appExpandMoreIcon } from '../../../svg/Navigation/expand_more';
import { appLogoutIcon } from '../../../svg/Action/logout';
import { appAccountBoxIcon } from '../../../svg/Action/account_box';
import { appExpandLessIcon } from '../../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from '../../../svg/Hardware/keyboard_tab';
import { ButtonSize, ButtonType } from '../../../utils/enums';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export class SidebarComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.sidebarData = {};
        this.userDisplay = {};
        this.otherAccounts = [];
        this.AccountsDisplay = this.otherAccounts;
        this.multipleAccounts = false;
        this.keyboarTab = appKeyboardTabIcon.name;
        this.expandLess = appExpandLessIcon.name;
        this.accountBox = appAccountBoxIcon.name;
        this.logoutIcon = appLogoutIcon.name;
        this.expandMore = appExpandMoreIcon.name;
        this.buttonType = ButtonType.secondary;
        this.buttonSize = ButtonSize.medium;
        this.iconColor = '#FFF';
        this.isCollapse = false;
        this.onToggleLogout = false;
        this.multipleAccountsSelection = false;
        this.MenuWidht = '280px';
        this.MenuHeight = '857px';
        this.OptionWidht = '240px';
        this.lineRight = '-20px';
    }
    ngOnInit() {
        if (this.sidebarData.users.length > 1) {
            this.multipleAccounts = true;
        }
        this.sidebarData.users.forEach((user) => {
            this.sidebarData.users.indexOf(user) === 0 ? this.userDisplay = user : this.otherAccounts.push(user);
        });
    }
    onCollapse() {
        if (this.isCollapse) {
            this.isCollapse = false;
            this.MenuWidht = '280px';
            this.OptionWidht = '240px';
            this.lineRight = '-20px';
        }
        else if (!this.isCollapse && this.onToggleLogout) {
            this.isCollapse = true;
            this.MenuWidht = '88px';
            this.OptionWidht = '46px';
            this.lineRight = '-22px';
            this.onToggleLogout = false;
            this.MenuHeight = '857px';
        }
        else {
            this.isCollapse = true;
            this.MenuWidht = '88px';
            this.OptionWidht = '46px';
            this.lineRight = '-22px';
            this.multipleAccountsSelection = false;
        }
    }
    onActive(option) {
        this.optionsData.forEach((e) => {
            if (e.title === option.title) {
                option.isActive = true;
            }
            else {
                e.isActive = false;
            }
        });
        this._router.navigate([option.link], { relativeTo: this._route }).then();
    }
    toggleLogout() {
        if (this.onToggleLogout && !this.isCollapse) {
            this.onToggleLogout = false;
            this.MenuHeight = '857px';
        }
        else {
            this.onToggleLogout = true;
            this.MenuHeight = '780px';
        }
    }
    expandAccounts() {
        if (this.multipleAccountsSelection) {
            this.multipleAccountsSelection = false;
        }
        else {
            this.multipleAccountsSelection = true;
        }
    }
    switchAccount(account) {
        this.userDisplay = {};
        this.otherAccounts = [];
        this.sidebarData.users.forEach((user) => {
            user.id === account.id ? this.userDisplay = user : this.otherAccounts.push(user);
        });
    }
    filter() {
        this.AccountsDisplay = [];
        this.otherAccounts.filter((user) => {
            const test = user.name.toLocaleLowerCase().includes(this.inputFilter.toLocaleLowerCase());
            if (test) {
                this.AccountsDisplay.push(user);
            }
        });
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-sidebar',
                template: "<div class=\"container\" [ngStyle]=\"{ width: MenuWidht }\">\n  <div class=\"user\">\n    <spt-avatar [text]=\"userDisplay.name.charAt(0).toUpperCase()\"></spt-avatar>\n    <div class=\"text\" *ngIf=\"!isCollapse\">\n      <span>{{ userDisplay.name }}</span>\n      <span>{{ userDisplay.company }}</span>\n    </div>\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"expandMore\"\n      [name]=\"expandMore\"\n      *ngIf=\"multipleAccounts && !isCollapse\"\n      (click)=\"expandAccounts()\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n    <div\n      *ngIf=\"multipleAccountsSelection && !isCollapse\"\n      class=\"multiAccount spt-elevation--3 elevation-box\"\n    >\n      <spt-text-field\n        [placeholder]=\"'Filter by name'\"\n        [(ngModel)]=\"inputFilter\"\n        (ngModelChange)=\"filter()\"\n      ></spt-text-field>\n      {{ inputFilter }}\n      <div\n        class=\"userMultiAccount\"\n        *ngFor=\"let account of AccountsDisplay\"\n        (click)=\"switchAccount(account)\"\n      >\n        <spt-avatar [text]=\"account.title.charAt(0).toUpperCase()\"></spt-avatar>\n        <div class=\"text-multiple-accounts\" *ngIf=\"!isCollapse\">\n          <span>{{ account.name }}</span>\n          <span>{{ account.company }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"menu\" [ngStyle]=\"{ height: MenuHeight }\">\n    <div\n      *ngFor=\"let option of optionsData\"\n      class=\"option\"\n      [ngStyle]=\"{ width: OptionWidht }\"\n      [ngClass]=\"{ active: option.isActive }\"\n      (click)=\"onActive(option)\"\n    >\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"option.title\"\n        [name]=\"option.icon.name\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <span *ngIf=\"!isCollapse\">{{ option.title }}</span>\n      <div\n        class=\"orange-line\"\n        [ngStyle]=\"{ right: lineRight }\"\n        *ngIf=\"option.isActive\"\n      ></div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"collapse\" (click)=\"onCollapse()\">\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"keyboarTab\"\n      [name]=\"keyboarTab\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"user-email\">\n    <div class=\"user\">\n      <div class=\"text\" *ngIf=\"!isCollapse\">\n        <span>{{ userDisplay.name }}</span>\n        <span class=\"small\">{{ userDisplay.email }}</span>\n      </div>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"expandLess\"\n        [name]=\"expandLess\"\n        *ngIf=\"!onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"accountBox\"\n        [name]=\"accountBox\"\n        *ngIf=\"onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n    </div>\n    <div class=\"flex-btn\" *ngIf=\"onToggleLogout && !isCollapse\">\n      <spt-button\n        class=\"btn\"\n        [text]=\"'LOGOUT'\"\n        [type]=\"buttonType\"\n        [size]=\"buttonSize\"\n        [leftIcon]=\"logoutIcon\"\n        (click)=\"sidebarData.logout()\"\n      ></spt-button>\n    </div>\n  </div>\n</div>\n",
                styles: [".container{height:1080px;background-color:#0d0c0b;color:#d2d2d2;font-family:Nunito Sans;font-style:normal;font-size:16px;line-height:24px;z-index:1}.icons{padding-top:4px;margin:10px}.user,.userMultiAccount{position:relative;display:flex;flex-direction:row;align-items:center;padding:20px}.elevation-box{position:absolute;width:280px;left:24px;top:64px;background-color:#fff;z-index:2}.text,.text-multiple-accounts{display:flex;flex-direction:column}.text .small{font-weight:400;font-size:12px;line-height:16px;color:#b1b1b1}.text-multiple-accounts{color:#000}.multiAccount{display:flex;flex-direction:column;padding:20px;justify-content:space-around}.userMultiAccount{margin:10px 0 0;border-radius:4px;padding:12px 6px}.userMultiAccount:hover{background-color:#2e2d2c}.userMultiAccount:hover span{color:#fff}.textFiel{width:80%}.menu{padding:20px}.menu .option{position:relative;display:flex;align-items:center;width:240px;height:48px;padding:12px 6px 12px 6;border-radius:4px;margin:16px 0}.menu .option:hover{background-color:#2e2d2c;color:#f90}.menu .orange-line{position:absolute;right:-20px;background-color:#f90;width:4px;height:40px;border-radius:30px 0 0 30px}.collapse{padding:20px;display:flex;align-items:center;width:240px;height:48px}.active{background-color:#2e2d2c}.user-email{display:flex;flex-direction:column}.flex-btn{display:flex;justify-content:center}spt-icon span svg-icon svg path:last-child{fill:#d2d2d2}"]
            },] }
];
SidebarComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
SidebarComponent.propDecorators = {
    sidebarData: [{ type: Input }],
    optionsData: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvT3JnYW5pc21zL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQTJCdkQsTUFBTSxPQUFPLGdCQUFnQjtJQWlDM0IsWUFDVSxNQUFzQixFQUN0QixPQUFlO1FBRGYsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQWpDaEIsZ0JBQVcsR0FBYSxFQUFjLENBQUM7UUFHaEQsZ0JBQVcsR0FBYyxFQUFlLENBQUM7UUFDekMsa0JBQWEsR0FBZ0IsRUFBaUIsQ0FBQztRQUMvQyxvQkFBZSxHQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDO1FBRWxELHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixlQUFVLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDcEMsZUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUNwQyxlQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNoQyxlQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBRXBDLGVBQVUsR0FBZSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzlDLGVBQVUsR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBSTNDLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFFbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2Qiw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMsY0FBUyxHQUFHLE9BQU8sQ0FBQztRQUNwQixlQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxPQUFPLENBQUM7SUFLaEIsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZHLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7U0FFMUI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1NBRTNCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFrQjtRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsT0FBa0I7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFlLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUU7WUFDNUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUMxRixJQUFJLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFFO1FBQ2hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIseXhHQUF1Qzs7YUFFeEM7OztZQTFCTyxjQUFjO1lBQUUsTUFBTTs7OzBCQTZCM0IsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwRXhwYW5kTW9yZUljb24gfSBmcm9tICcuLi8uLi8uLi9zdmcvTmF2aWdhdGlvbi9leHBhbmRfbW9yZSc7XG5pbXBvcnQgeyBhcHBMb2dvdXRJY29uIH0gZnJvbSAnLi4vLi4vLi4vc3ZnL0FjdGlvbi9sb2dvdXQnO1xuaW1wb3J0IHsgYXBwQWNjb3VudEJveEljb24gfSBmcm9tICcuLi8uLi8uLi9zdmcvQWN0aW9uL2FjY291bnRfYm94JztcbmltcG9ydCB7IGFwcEV4cGFuZExlc3NJY29uIH0gZnJvbSAnLi4vLi4vLi4vc3ZnL05hdmlnYXRpb24vZXhwYW5kX2xlc3MnO1xuaW1wb3J0IHsgYXBwS2V5Ym9hcmRUYWJJY29uIH0gZnJvbSAnLi4vLi4vLi4vc3ZnL0hhcmR3YXJlL2tleWJvYXJkX3RhYic7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJEYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjb21wYW55OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXIge1xuICB1c2VyczogSVVzZXJEYXRhW107XG4gIGxvZ291dDogKCkgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbXMge1xuICB0aXRsZTogc3RyaW5nO1xuICBpY29uOiBhbnk7XG4gIGxpbms6IHN0cmluZyxcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1zaWRlYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2lkZWJhckRhdGE6IElTaWRlYmFyID0ge30gYXMgSVNpZGViYXI7XG4gIEBJbnB1dCgpIG9wdGlvbnNEYXRhOiBJTWVudUl0ZW1zW107XG5cbiAgdXNlckRpc3BsYXk6IElVc2VyRGF0YSA9IHt9IGFzIElVc2VyRGF0YTtcbiAgb3RoZXJBY2NvdW50czogSVVzZXJEYXRhW10gPSBbXSBhcyBJVXNlckRhdGFbXTtcbiAgQWNjb3VudHNEaXNwbGF5OiBJVXNlckRhdGFbXSA9IHRoaXMub3RoZXJBY2NvdW50cztcblxuICBtdWx0aXBsZUFjY291bnRzID0gZmFsc2U7XG5cbiAga2V5Ym9hclRhYiA9IGFwcEtleWJvYXJkVGFiSWNvbi5uYW1lO1xuICBleHBhbmRMZXNzID0gYXBwRXhwYW5kTGVzc0ljb24ubmFtZTtcbiAgYWNjb3VudEJveCA9IGFwcEFjY291bnRCb3hJY29uLm5hbWU7XG4gIGxvZ291dEljb24gPSBhcHBMb2dvdXRJY29uLm5hbWU7XG4gIGV4cGFuZE1vcmUgPSBhcHBFeHBhbmRNb3JlSWNvbi5uYW1lO1xuXG4gIGJ1dHRvblR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLnNlY29uZGFyeTtcbiAgYnV0dG9uU2l6ZTogQnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUubWVkaXVtO1xuXG4gIGlucHV0RmlsdGVyOiBzdHJpbmc7XG5cbiAgaWNvbkNvbG9yID0gJyNGRkYnO1xuXG4gIGlzQ29sbGFwc2UgPSBmYWxzZTtcbiAgb25Ub2dnbGVMb2dvdXQgPSBmYWxzZTtcbiAgbXVsdGlwbGVBY2NvdW50c1NlbGVjdGlvbiA9IGZhbHNlO1xuXG4gIE1lbnVXaWRodCA9ICcyODBweCc7XG4gIE1lbnVIZWlnaHQgPSAnODU3cHgnO1xuICBPcHRpb25XaWRodCA9ICcyNDBweCc7XG4gIGxpbmVSaWdodCA9ICctMjBweCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2lkZWJhckRhdGEudXNlcnMubGVuZ3RoID4gMSkgeyB0aGlzLm11bHRpcGxlQWNjb3VudHMgPSB0cnVlOyB9XG4gICAgdGhpcy5zaWRlYmFyRGF0YS51c2Vycy5mb3JFYWNoKCh1c2VyOiBJVXNlckRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2lkZWJhckRhdGEudXNlcnMuaW5kZXhPZih1c2VyKSA9PT0gMCA/IHRoaXMudXNlckRpc3BsYXkgPSB1c2VyIDogdGhpcy5vdGhlckFjY291bnRzLnB1c2godXNlcik7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uQ29sbGFwc2UoKSB7XG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZSkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlID0gZmFsc2U7XG4gICAgICB0aGlzLk1lbnVXaWRodCA9ICcyODBweCc7XG4gICAgICB0aGlzLk9wdGlvbldpZGh0ID0gJzI0MHB4JztcbiAgICAgIHRoaXMubGluZVJpZ2h0ID0gJy0yMHB4JztcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNDb2xsYXBzZSAmJiB0aGlzLm9uVG9nZ2xlTG9nb3V0KSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5NZW51V2lkaHQgPSAnODhweCc7XG4gICAgICB0aGlzLk9wdGlvbldpZGh0ID0gJzQ2cHgnO1xuICAgICAgdGhpcy5saW5lUmlnaHQgPSAnLTIycHgnO1xuICAgICAgdGhpcy5vblRvZ2dsZUxvZ291dCA9IGZhbHNlO1xuICAgICAgdGhpcy5NZW51SGVpZ2h0ID0gJzg1N3B4JztcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5NZW51V2lkaHQgPSAnODhweCc7XG4gICAgICB0aGlzLk9wdGlvbldpZGh0ID0gJzQ2cHgnO1xuICAgICAgdGhpcy5saW5lUmlnaHQgPSAnLTIycHgnO1xuICAgICAgdGhpcy5tdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb25BY3RpdmUob3B0aW9uOiBJTWVudUl0ZW1zKSB7XG4gICAgdGhpcy5vcHRpb25zRGF0YS5mb3JFYWNoKChlOiBhbnkpID0+IHtcbiAgICAgIGlmIChlLnRpdGxlID09PSBvcHRpb24udGl0bGUpIHtcbiAgICAgICAgb3B0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW29wdGlvbi5saW5rXSwge3JlbGF0aXZlVG86IHRoaXMuX3JvdXRlfSkudGhlbigpO1xuICB9XG5cbiAgdG9nZ2xlTG9nb3V0KCkge1xuICAgIGlmICh0aGlzLm9uVG9nZ2xlTG9nb3V0ICYmICF0aGlzLmlzQ29sbGFwc2UpIHtcbiAgICAgIHRoaXMub25Ub2dnbGVMb2dvdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuTWVudUhlaWdodCA9ICc4NTdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Ub2dnbGVMb2dvdXQgPSB0cnVlO1xuICAgICAgdGhpcy5NZW51SGVpZ2h0ID0gJzc4MHB4JztcbiAgICB9XG4gIH1cblxuICBleHBhbmRBY2NvdW50cygpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hBY2NvdW50KGFjY291bnQ6IElVc2VyRGF0YSkge1xuICAgIHRoaXMudXNlckRpc3BsYXkgPSB7fSBhcyBJVXNlckRhdGE7XG4gICAgdGhpcy5vdGhlckFjY291bnRzID0gW107XG4gICAgdGhpcy5zaWRlYmFyRGF0YS51c2Vycy5mb3JFYWNoKCh1c2VyOiBJVXNlckRhdGEpID0+IHtcbiAgICAgIHVzZXIuaWQgPT09IGFjY291bnQuaWQgPyB0aGlzLnVzZXJEaXNwbGF5ID0gdXNlciA6IHRoaXMub3RoZXJBY2NvdW50cy5wdXNoKHVzZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyKCkge1xuICAgIHRoaXMuQWNjb3VudHNEaXNwbGF5ID0gW107XG4gICAgdGhpcy5vdGhlckFjY291bnRzLmZpbHRlcigodXNlcjogSVVzZXJEYXRhKSA9PiB7XG4gICAgICBjb25zdCB0ZXN0ID0gdXNlci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5pbnB1dEZpbHRlci50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgIGlmICh0ZXN0KSB7IHRoaXMuQWNjb3VudHNEaXNwbGF5LnB1c2godXNlcik7IH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=