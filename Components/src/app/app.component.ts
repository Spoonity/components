import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as ic from './utils/icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  icons = [];

  constructor(private iconReg: SvgIconRegistryService) {
    this.registerIcons();
    this.icons = this.getIcons();
  }

  getIcons() {
    let icons = [];
    icons = icons.concat(ic.actionIcons, ic.alertIcons, ic.avIcons,
      ic.communicationIcons, ic.contentIcons, ic.fileIcons,
      ic.hardwareIcons, ic.imageIcons, ic.mapsIcons, ic.navigationIcons,
      ic.notificationIcons, ic.socialIcons, ic.toggleIcons);
      console.log(icons);
    return icons;
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
  title = 'Components';

  colors = [{ name: 'GRAY', color: '#706F6E' }, { name: 'RED', color: '#EF5350' }, { name: 'PINK', color: '#EC407A' }, { name: 'PURPLE', color: '#AB47BC' }, { name: 'DEEP PURPLE', color: '#7E57C2' }, { name: 'INDIGO', color: '#5C6BC0' }, { name: 'BLUE', color: '#42A5F5' }, { name: 'CYAN', color: '#26C6DA' }, { name: 'TEAL', color: '#26A69A' }, { name: 'GREEN', color: '#66BB6A' }, { name: 'LIGHT GREEN', color: '#9CCC65' }, { name: 'AMBER', color: '#FFB300' }, { name: 'DEEP ORANGE', color: '#FF7043' }];
  tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];
}

