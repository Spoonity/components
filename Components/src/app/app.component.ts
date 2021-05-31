import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { MenuItems } from 'sp-components/src/app/Components/Molecules/side-navigation/side-navigation.component';
import { ISidebar } from 'sp-components/src/app/Components/Organisms/sidebar/sidebar.component';
import { appHomeIcon } from 'sp-components/src/app/svg/Action/home';
import { appRedeemIcon } from 'sp-components/src/app/svg/Action/redeem';
import { appPeopleIcon } from 'sp-components/src/app/svg/Social/people';
import { SideNavigationType } from 'sp-components/src/app/utils/enums';
import * as ic from 'sp-components/src/app/utils/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private iconReg: SvgIconRegistryService) {
    this.registerIcons();
    this.sideData = this.getSideData();
  }

  sideNavigationType = SideNavigationType;
  atomsMenuItems: Array<MenuItems> = [
    { icon: '', link: '', text: 'Avatars' },
    { icon: '', link: '', text: 'Badges' },
    { icon: '', link: '', text: 'Divider' },
    { icon: '', link: '', text: 'Progress Bar' },
    { icon: '', link: '', text: 'Selection Controls' },
    { icon: '', link: '', text: 'Sliders' },
    { icon: '', link: '', text: 'Tabs' },
    { icon: '', link: '', text: 'Tooltips' }
  ];

  optionsData = [
    { title: 'Atoms', icon: appHomeIcon, link: '/atoms', isActive: true },
    { title: 'Molecules', icon: appPeopleIcon, link: '/molecules', isActive: false },
    { title: 'Organisms', icon: appRedeemIcon, link: '/organisms', isActive: false }
  ];

  sideData: ISidebar = <ISidebar>{};

  getSideData(): ISidebar {
    return {
      users: [
        {
          name: 'Gabriel Rodriguez',
          id: '1234',
          email: 'gabriel@spoonity.com',
          title: 'Spoonity',
          company: 'Spoonity'
        }
      ],
      logout: () => { alert("Logout") }
    }
  }

  registerIcons() {
    // Action Icons
    ic.actionIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Alert Icons
    ic.alertIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // AV Icons
    ic.avIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Communications Icons
    ic.communicationIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Content Icons
    ic.contentIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // File Icons
    ic.fileIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Hardware Icons
    ic.hardwareIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Image Icons
    ic.imageIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Maps Icons
    ic.mapsIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Navigation Icons
    ic.navigationIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Notification Icons
    ic.notificationIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Social Icons
    ic.socialIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });
    // Toggle Icons
    ic.toggleIcons.forEach(element => {
      this.iconReg.addSvg(element.name, element.data);
    });

  }
}

