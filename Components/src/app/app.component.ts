import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { MenuItems } from './Components/Molecules/side-navigation/side-navigation.component';

import { SideNavigationType } from './utils/enums';
import * as ic from './utils/icons';
@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private iconReg: SvgIconRegistryService) {
    this.registerIcons();

  }

  sideNavigationType = SideNavigationType;
  atomsMenuItems: Array<MenuItems> = [
    {icon: '', link: '', text: 'Avatars'},
    {icon: '', link: '', text: 'Badges'},
    {icon: '', link: '', text: 'Divider'},
    {icon: '', link: '', text: 'Progress Bar'},
    {icon: '', link: '', text: 'Selection Controls'},
    {icon: '', link: '', text: 'Sliders'},
    {icon: '', link: '', text: 'Tabs'},
    {icon: '', link: '', text: 'Tooltips'}
  ];


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

