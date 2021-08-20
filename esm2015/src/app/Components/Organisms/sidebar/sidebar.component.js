import { appExpandMoreIcon } from '../../../svg/Navigation/expand_more';
import { appLogoutIcon } from '../../../svg/Action/logout';
import { appAccountBoxIcon } from '../../../svg/Action/account_box';
import { appExpandLessIcon } from '../../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from '../../../svg/Hardware/keyboard_tab';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
import { Component, Input } from '@angular/core';
export class SidebarComponent {
    constructor() {
        this.sidebarData = {};
        this.userDisplay = {};
        this.otherAccounts = [];
        this.AccountsDisplay = this.otherAccounts;
        this.multipleAccounts = false;
        this.avatarSize = AvatarSize.medium;
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
SidebarComponent.ctorParameters = () => [];
SidebarComponent.propDecorators = {
    sidebarData: [{ type: Input }],
    optionsData: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvT3JnYW5pc21zL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBMkJ6RCxNQUFNLE9BQU8sZ0JBQWdCO0lBbUMzQjtRQWpDUyxnQkFBVyxHQUFhLEVBQWMsQ0FBQztRQUdoRCxnQkFBVyxHQUFjLEVBQWUsQ0FBQztRQUN6QyxrQkFBYSxHQUFnQixFQUFpQixDQUFDO1FBQy9DLG9CQUFlLEdBQWdCLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFbEQscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLGVBQVUsR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRTNDLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDckMsZUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUNwQyxlQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxpQkFBaUIs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RSxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBFeHBhbmRNb3JlSWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9OYXZpZ2F0aW9uL2V4cGFuZF9tb3JlJztcbmltcG9ydCB7IGFwcExvZ291dEljb24gfSBmcm9tICcuLi8uLi8uLi9zdmcvQWN0aW9uL2xvZ291dCc7XG5pbXBvcnQgeyBhcHBBY2NvdW50Qm94SWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9BY3Rpb24vYWNjb3VudF9ib3gnO1xuaW1wb3J0IHsgYXBwRXhwYW5kTGVzc0ljb24gfSBmcm9tICcuLi8uLi8uLi9zdmcvTmF2aWdhdGlvbi9leHBhbmRfbGVzcyc7XG5pbXBvcnQgeyBhcHBLZXlib2FyZFRhYkljb24gfSBmcm9tICcuLi8uLi8uLi9zdmcvSGFyZHdhcmUva2V5Ym9hcmRfdGFiJztcbmltcG9ydCB7IEF2YXRhclNpemUsIEJ1dHRvblNpemUsIEJ1dHRvblR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlckRhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbXBhbnk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2lkZWJhciB7XG4gIHVzZXJzOiBJVXNlckRhdGFbXTtcbiAgbG9nb3V0OiAoKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lbnVJdGVtcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IGFueTtcbiAgbGluazogc3RyaW5nLFxuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNpZGViYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGViYXIuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzaWRlYmFyRGF0YTogSVNpZGViYXIgPSB7fSBhcyBJU2lkZWJhcjtcbiAgQElucHV0KCkgb3B0aW9uc0RhdGE6IElNZW51SXRlbXNbXTtcblxuICB1c2VyRGlzcGxheTogSVVzZXJEYXRhID0ge30gYXMgSVVzZXJEYXRhO1xuICBvdGhlckFjY291bnRzOiBJVXNlckRhdGFbXSA9IFtdIGFzIElVc2VyRGF0YVtdO1xuICBBY2NvdW50c0Rpc3BsYXk6IElVc2VyRGF0YVtdID0gdGhpcy5vdGhlckFjY291bnRzO1xuXG4gIG11bHRpcGxlQWNjb3VudHMgPSBmYWxzZTtcblxuICBhdmF0YXJTaXplOiBBdmF0YXJTaXplID0gQXZhdGFyU2l6ZS5tZWRpdW07XG5cbiAga2V5Ym9hclRhYiA9IGFwcEtleWJvYXJkVGFiSWNvbi5uYW1lO1xuICBleHBhbmRMZXNzID0gYXBwRXhwYW5kTGVzc0ljb24ubmFtZTtcbiAgYWNjb3VudEJveCA9IGFwcEFjY291bnRCb3hJY29uLm5hbWU7XG4gIGxvZ291dEljb24gPSBhcHBMb2dvdXRJY29uLm5hbWU7XG4gIGV4cGFuZE1vcmUgPSBhcHBFeHBhbmRNb3JlSWNvbi5uYW1lO1xuXG4gIGJ1dHRvblR5cGU6IEJ1dHRvblR5cGUgPSBCdXR0b25UeXBlLnNlY29uZGFyeTtcbiAgYnV0dG9uU2l6ZTogQnV0dG9uU2l6ZSA9IEJ1dHRvblNpemUubWVkaXVtO1xuXG4gIGlucHV0RmlsdGVyOiBzdHJpbmc7XG5cbiAgaWNvbkNvbG9yID0gJyNGRkYnO1xuXG4gIGlzQ29sbGFwc2UgPSBmYWxzZTtcbiAgb25Ub2dnbGVMb2dvdXQgPSBmYWxzZTtcbiAgbXVsdGlwbGVBY2NvdW50c1NlbGVjdGlvbiA9IGZhbHNlO1xuXG4gIE1lbnVXaWRodCA9ICcyODBweCc7XG4gIE1lbnVIZWlnaHQgPSAnODU3cHgnO1xuICBPcHRpb25XaWRodCA9ICcyNDBweCc7XG4gIGxpbmVSaWdodCA9ICctMjBweCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaWRlYmFyRGF0YS51c2Vycy5sZW5ndGggPiAxKSB7IHRoaXMubXVsdGlwbGVBY2NvdW50cyA9IHRydWU7IH1cbiAgICB0aGlzLnNpZGViYXJEYXRhLnVzZXJzLmZvckVhY2goKHVzZXI6IElVc2VyRGF0YSkgPT4ge1xuICAgICAgdGhpcy5zaWRlYmFyRGF0YS51c2Vycy5pbmRleE9mKHVzZXIpID09PSAwID8gdGhpcy51c2VyRGlzcGxheSA9IHVzZXIgOiB0aGlzLm90aGVyQWNjb3VudHMucHVzaCh1c2VyKTtcbiAgICB9KTtcblxuICB9XG5cbiAgb25Db2xsYXBzZSgpIHtcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuTWVudVdpZGh0ID0gJzI4MHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnMjQwcHgnO1xuICAgICAgdGhpcy5saW5lUmlnaHQgPSAnLTIwcHgnO1xuXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc0NvbGxhcHNlICYmIHRoaXMub25Ub2dnbGVMb2dvdXQpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLk1lbnVXaWRodCA9ICc4OHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnNDZweCc7XG4gICAgICB0aGlzLmxpbmVSaWdodCA9ICctMjJweCc7XG4gICAgICB0aGlzLm9uVG9nZ2xlTG9nb3V0ID0gZmFsc2U7XG4gICAgICB0aGlzLk1lbnVIZWlnaHQgPSAnODU3cHgnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLk1lbnVXaWRodCA9ICc4OHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnNDZweCc7XG4gICAgICB0aGlzLmxpbmVSaWdodCA9ICctMjJweCc7XG4gICAgICB0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkFjdGl2ZShvcHRpb246IElNZW51SXRlbXMpIHtcbiAgICB0aGlzLm9wdGlvbnNEYXRhLmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGUudGl0bGUgPT09IG9wdGlvbi50aXRsZSkge1xuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlTG9nb3V0KCkge1xuICAgIGlmICh0aGlzLm9uVG9nZ2xlTG9nb3V0ICYmICF0aGlzLmlzQ29sbGFwc2UpIHtcbiAgICAgIHRoaXMub25Ub2dnbGVMb2dvdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuTWVudUhlaWdodCA9ICc4NTdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Ub2dnbGVMb2dvdXQgPSB0cnVlO1xuICAgICAgdGhpcy5NZW51SGVpZ2h0ID0gJzc4MHB4JztcbiAgICB9XG4gIH1cblxuICBleHBhbmRBY2NvdW50cygpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hBY2NvdW50KGFjY291bnQ6IElVc2VyRGF0YSkge1xuICAgIHRoaXMudXNlckRpc3BsYXkgPSB7fSBhcyBJVXNlckRhdGE7XG4gICAgdGhpcy5vdGhlckFjY291bnRzID0gW107XG4gICAgdGhpcy5zaWRlYmFyRGF0YS51c2Vycy5mb3JFYWNoKCh1c2VyOiBJVXNlckRhdGEpID0+IHtcbiAgICAgIHVzZXIuaWQgPT09IGFjY291bnQuaWQgPyB0aGlzLnVzZXJEaXNwbGF5ID0gdXNlciA6IHRoaXMub3RoZXJBY2NvdW50cy5wdXNoKHVzZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyKCkge1xuICAgIHRoaXMuQWNjb3VudHNEaXNwbGF5ID0gW107XG4gICAgdGhpcy5vdGhlckFjY291bnRzLmZpbHRlcigodXNlcjogSVVzZXJEYXRhKSA9PiB7XG4gICAgICBjb25zdCB0ZXN0ID0gdXNlci5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5pbnB1dEZpbHRlci50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgIGlmICh0ZXN0KSB7IHRoaXMuQWNjb3VudHNEaXNwbGF5LnB1c2godXNlcik7IH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=