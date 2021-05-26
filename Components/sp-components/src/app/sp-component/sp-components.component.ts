import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as ic from '../utils/icons';

@Component({
  selector: 'sp-components',
  template: '',
  //styleUrls: ['styles.less'],
  encapsulation: ViewEncapsulation.None
})
export class SpComponentsComponent implements OnInit {

  constructor(private iconReg: SvgIconRegistryService) {
    this.registerIcons(this.iconReg);
  }

  ngOnInit() {
  }

  registerIcons(iconReg: SvgIconRegistryService) {
    // Action Icons
    ic.actionIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Alert Icons
    ic.alertIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // AV Icons
    ic.avIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Communications Icons
    ic.communicationIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Content Icons
    ic.contentIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // File Icons
    ic.fileIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Hardware Icons
    ic.hardwareIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Image Icons
    ic.imageIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Maps Icons
    ic.mapsIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Navigation Icons
    ic.navigationIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Notification Icons
    ic.notificationIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Social Icons
    ic.socialIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });
    // Toggle Icons
    ic.toggleIcons.forEach(element => {
      iconReg.addSvg(element.name, element.data);
    });

  }

}
