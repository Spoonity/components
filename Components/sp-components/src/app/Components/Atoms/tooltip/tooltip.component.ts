import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() title: string;
  @Input() content: string;

}
