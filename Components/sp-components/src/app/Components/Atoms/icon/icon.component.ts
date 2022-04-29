import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent {

  @Input() toolTipTitle: string;
  @Input() name: string;
  @Input() color = '#0D0C0B';
  @Input() size = 20;

  constructor() {}
}
