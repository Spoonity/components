import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() max: number;
  @Input() disable: boolean;
  @Input() step: number;
  @Input() start: number;

}
