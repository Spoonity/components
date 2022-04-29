import { Component, OnInit } from '@angular/core';
import * as ic from '../../../../sp-components/src/app/utils/icons';

@Component({
  selector: 'app-icon-gallery',
  templateUrl: './icon-gallery.component.html',
  styleUrls: ['./icon-gallery.component.less']
})
export class IconGalleryComponent implements OnInit {
  icons = [];

  constructor() { }

  ngOnInit(): void {
    this.icons = this.getIcons();
  }

  getIcons() {
    let icons = [];
    icons = icons.concat(ic.actionIcons, ic.alertIcons, ic.avIcons,
      ic.communicationIcons, ic.contentIcons, ic.fileIcons,
      ic.hardwareIcons, ic.imageIcons, ic.mapsIcons, ic.miscIcons, ic.navigationIcons,
      ic.notificationIcons, ic.socialIcons, ic.toggleIcons);
    return icons;
  }


}
