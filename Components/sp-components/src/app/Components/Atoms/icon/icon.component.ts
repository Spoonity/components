import { Component, Input, OnInit } from '@angular/core';
import * as ic from '../../../utils/icons';

@Component({
  selector: 'sp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() toolTipTittle: string;
  @Input() name: string;
  @Input() color: string = "#0D0C0B";

  svgIconSettings = {
     'width' : '20px',
     'fill' : this.color,
     'padding-top': '5px'
    }
}
