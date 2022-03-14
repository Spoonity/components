import { appExpandMoreIcon } from '../../../svg/Navigation/expand_more';
import { appLogoutIcon } from '../../../svg/Action/logout';
import { appAccountBoxIcon } from '../../../svg/Action/account_box';
import { appExpandLessIcon } from '../../../svg/Navigation/expand_less';
import { appKeyboardTabIcon } from '../../../svg/Hardware/keyboard_tab';
import { AvatarSize, ButtonSize, ButtonType } from '../../../utils/enums';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvT3JnYW5pc21zL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUEyQnZELE1BQU0sT0FBTyxnQkFBZ0I7SUFtQzNCLFlBQ1UsTUFBc0IsRUFDdEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFuQ2hCLGdCQUFXLEdBQWEsRUFBYyxDQUFDO1FBR2hELGdCQUFXLEdBQWMsRUFBZSxDQUFDO1FBQ3pDLGtCQUFhLEdBQWdCLEVBQWlCLENBQUM7UUFDL0Msb0JBQWUsR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVsRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFFM0MsZUFBVSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQztRQUNyQyxl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QUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDMUYsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBRTtRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXhIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHl4R0FBdUM7O2FBRXhDOzs7WUExQk8sY0FBYztZQUFFLE1BQU07OzswQkE2QjNCLEtBQUs7MEJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcEV4cGFuZE1vcmVJY29uIH0gZnJvbSAnLi4vLi4vLi4vc3ZnL05hdmlnYXRpb24vZXhwYW5kX21vcmUnO1xuaW1wb3J0IHsgYXBwTG9nb3V0SWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9BY3Rpb24vbG9nb3V0JztcbmltcG9ydCB7IGFwcEFjY291bnRCb3hJY29uIH0gZnJvbSAnLi4vLi4vLi4vc3ZnL0FjdGlvbi9hY2NvdW50X2JveCc7XG5pbXBvcnQgeyBhcHBFeHBhbmRMZXNzSWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9OYXZpZ2F0aW9uL2V4cGFuZF9sZXNzJztcbmltcG9ydCB7IGFwcEtleWJvYXJkVGFiSWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9IYXJkd2FyZS9rZXlib2FyZF90YWInO1xuaW1wb3J0IHsgQXZhdGFyU2l6ZSwgQnV0dG9uU2l6ZSwgQnV0dG9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY29tcGFueTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTaWRlYmFyIHtcbiAgdXNlcnM6IElVc2VyRGF0YVtdO1xuICBsb2dvdXQ6ICgpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWVudUl0ZW1zIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWNvbjogYW55O1xuICBsaW5rOiBzdHJpbmcsXG4gIGlzQWN0aXZlOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtc2lkZWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNpZGViYXJEYXRhOiBJU2lkZWJhciA9IHt9IGFzIElTaWRlYmFyO1xuICBASW5wdXQoKSBvcHRpb25zRGF0YTogSU1lbnVJdGVtc1tdO1xuXG4gIHVzZXJEaXNwbGF5OiBJVXNlckRhdGEgPSB7fSBhcyBJVXNlckRhdGE7XG4gIG90aGVyQWNjb3VudHM6IElVc2VyRGF0YVtdID0gW10gYXMgSVVzZXJEYXRhW107XG4gIEFjY291bnRzRGlzcGxheTogSVVzZXJEYXRhW10gPSB0aGlzLm90aGVyQWNjb3VudHM7XG5cbiAgbXVsdGlwbGVBY2NvdW50cyA9IGZhbHNlO1xuXG4gIGF2YXRhclNpemU6IEF2YXRhclNpemUgPSBBdmF0YXJTaXplLm1lZGl1bTtcblxuICBrZXlib2FyVGFiID0gYXBwS2V5Ym9hcmRUYWJJY29uLm5hbWU7XG4gIGV4cGFuZExlc3MgPSBhcHBFeHBhbmRMZXNzSWNvbi5uYW1lO1xuICBhY2NvdW50Qm94ID0gYXBwQWNjb3VudEJveEljb24ubmFtZTtcbiAgbG9nb3V0SWNvbiA9IGFwcExvZ291dEljb24ubmFtZTtcbiAgZXhwYW5kTW9yZSA9IGFwcEV4cGFuZE1vcmVJY29uLm5hbWU7XG5cbiAgYnV0dG9uVHlwZTogQnV0dG9uVHlwZSA9IEJ1dHRvblR5cGUuc2Vjb25kYXJ5O1xuICBidXR0b25TaXplOiBCdXR0b25TaXplID0gQnV0dG9uU2l6ZS5tZWRpdW07XG5cbiAgaW5wdXRGaWx0ZXI6IHN0cmluZztcblxuICBpY29uQ29sb3IgPSAnI0ZGRic7XG5cbiAgaXNDb2xsYXBzZSA9IGZhbHNlO1xuICBvblRvZ2dsZUxvZ291dCA9IGZhbHNlO1xuICBtdWx0aXBsZUFjY291bnRzU2VsZWN0aW9uID0gZmFsc2U7XG5cbiAgTWVudVdpZGh0ID0gJzI4MHB4JztcbiAgTWVudUhlaWdodCA9ICc4NTdweCc7XG4gIE9wdGlvbldpZGh0ID0gJzI0MHB4JztcbiAgbGluZVJpZ2h0ID0gJy0yMHB4JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaWRlYmFyRGF0YS51c2Vycy5sZW5ndGggPiAxKSB7IHRoaXMubXVsdGlwbGVBY2NvdW50cyA9IHRydWU7IH1cbiAgICB0aGlzLnNpZGViYXJEYXRhLnVzZXJzLmZvckVhY2goKHVzZXI6IElVc2VyRGF0YSkgPT4ge1xuICAgICAgdGhpcy5zaWRlYmFyRGF0YS51c2Vycy5pbmRleE9mKHVzZXIpID09PSAwID8gdGhpcy51c2VyRGlzcGxheSA9IHVzZXIgOiB0aGlzLm90aGVyQWNjb3VudHMucHVzaCh1c2VyKTtcbiAgICB9KTtcblxuICB9XG5cbiAgb25Db2xsYXBzZSgpIHtcbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuTWVudVdpZGh0ID0gJzI4MHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnMjQwcHgnO1xuICAgICAgdGhpcy5saW5lUmlnaHQgPSAnLTIwcHgnO1xuXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc0NvbGxhcHNlICYmIHRoaXMub25Ub2dnbGVMb2dvdXQpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLk1lbnVXaWRodCA9ICc4OHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnNDZweCc7XG4gICAgICB0aGlzLmxpbmVSaWdodCA9ICctMjJweCc7XG4gICAgICB0aGlzLm9uVG9nZ2xlTG9nb3V0ID0gZmFsc2U7XG4gICAgICB0aGlzLk1lbnVIZWlnaHQgPSAnODU3cHgnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLk1lbnVXaWRodCA9ICc4OHB4JztcbiAgICAgIHRoaXMuT3B0aW9uV2lkaHQgPSAnNDZweCc7XG4gICAgICB0aGlzLmxpbmVSaWdodCA9ICctMjJweCc7XG4gICAgICB0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkFjdGl2ZShvcHRpb246IElNZW51SXRlbXMpIHtcbiAgICB0aGlzLm9wdGlvbnNEYXRhLmZvckVhY2goKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGUudGl0bGUgPT09IG9wdGlvbi50aXRsZSkge1xuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbb3B0aW9uLmxpbmtdLCB7cmVsYXRpdmVUbzogdGhpcy5fcm91dGV9KS50aGVuKCk7XG4gIH1cblxuICB0b2dnbGVMb2dvdXQoKSB7XG4gICAgaWYgKHRoaXMub25Ub2dnbGVMb2dvdXQgJiYgIXRoaXMuaXNDb2xsYXBzZSkge1xuICAgICAgdGhpcy5vblRvZ2dsZUxvZ291dCA9IGZhbHNlO1xuICAgICAgdGhpcy5NZW51SGVpZ2h0ID0gJzg1N3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblRvZ2dsZUxvZ291dCA9IHRydWU7XG4gICAgICB0aGlzLk1lbnVIZWlnaHQgPSAnNzgwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZEFjY291bnRzKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMubXVsdGlwbGVBY2NvdW50c1NlbGVjdGlvbiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm11bHRpcGxlQWNjb3VudHNTZWxlY3Rpb24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaEFjY291bnQoYWNjb3VudDogSVVzZXJEYXRhKSB7XG4gICAgdGhpcy51c2VyRGlzcGxheSA9IHt9IGFzIElVc2VyRGF0YTtcbiAgICB0aGlzLm90aGVyQWNjb3VudHMgPSBbXTtcbiAgICB0aGlzLnNpZGViYXJEYXRhLnVzZXJzLmZvckVhY2goKHVzZXI6IElVc2VyRGF0YSkgPT4ge1xuICAgICAgdXNlci5pZCA9PT0gYWNjb3VudC5pZCA/IHRoaXMudXNlckRpc3BsYXkgPSB1c2VyIDogdGhpcy5vdGhlckFjY291bnRzLnB1c2godXNlcik7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgdGhpcy5BY2NvdW50c0Rpc3BsYXkgPSBbXTtcbiAgICB0aGlzLm90aGVyQWNjb3VudHMuZmlsdGVyKCh1c2VyOiBJVXNlckRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRlc3QgPSB1c2VyLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLmlucHV0RmlsdGVyLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKHRlc3QpIHsgdGhpcy5BY2NvdW50c0Rpc3BsYXkucHVzaCh1c2VyKTsgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==