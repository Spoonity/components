import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent {
  /* maximum value */
  @Input() max: number;

  /* disabled state */
  @Input() disable: boolean;

  /* amount to jump when sliding */
  @Input() step: number;

  /* starting value */
  @Input() start: number;

  constructor() { }
}
