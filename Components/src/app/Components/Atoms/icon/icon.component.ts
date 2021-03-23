import { Component, OnInit } from '@angular/core';
import * as ic from '../../../utils/icons';

@Component({
  selector: 'sp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {
  
  icons = [];

  constructor() {
    this.icons = this.getIcons();
   }

  ngOnInit() {
  }

  getIcons() {
    let icons = [];
    icons = icons.concat(ic.actionIcons, ic.alertIcons, ic.avIcons,
      ic.communicationIcons, ic.contentIcons, ic.fileIcons,
      ic.hardwareIcons, ic.imageIcons, ic.mapsIcons, ic.navigationIcons,
      ic.notificationIcons, ic.socialIcons, ic.toggleIcons);
    return icons;
  }

}
