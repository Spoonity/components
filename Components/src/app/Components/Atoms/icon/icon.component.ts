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
}
