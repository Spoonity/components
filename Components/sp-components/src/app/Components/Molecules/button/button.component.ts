import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  /* button type (default: primary) */
  @Input() type: 'primary' | 'secondary' | 'link' | 'inverted' | 'default' = 'primary';

  /* button size (default: medium) */
  @Input() size: 'large' | 'medium' | 'small' = 'medium';

  /* left icon (optional) */
  @Input() leftIcon: string;

  /* right icon (optional) */
  @Input() rightIcon: string;

  /* button text */
  @Input() text: string;

  /* if the button should be disanled */
  @Input() disabled: boolean;

  /* background color */
  @Input() color: string;

  /* icon color */
  @Input() iconColor: string;

  constructor() { }

  ngOnInit() {
  }

}
