import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../utils/enums';

@Component({
  selector: 'spt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType = ButtonType.primary;
  @Input() size: ButtonSize = ButtonSize.medium;
  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() text: string;
  @Input() disabled: boolean;

  B = ButtonType;
  S = ButtonSize;

  constructor() { }

  ngOnInit() {
  }

}
