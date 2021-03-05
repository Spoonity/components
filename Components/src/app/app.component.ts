import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as ic from './utils/icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private iconReg: SvgIconRegistryService){
    this.registerIcons();
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

