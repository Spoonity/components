import { Component, Input, OnInit } from '@angular/core';
import * as ic from '../../../utils/icons';

@Component({
  selector: 'spt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  @Input() toolTipTittle: string;
  @Input() name: string;
  @Input() color = '#0D0C0B';

  svgIconSettings = {
     'width' : '20px',
     'fill' : this.color
    }

  constructor() {}

  ngOnInit() {}
}
