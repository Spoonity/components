import { Component, Input, OnInit } from '@angular/core';
import { AvatarSize } from '../../../utils/enums';

@Component({
  selector: 'sp-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() size: AvatarSize;
  @Input() text: string;
  @Input() color: string;
  @Input() backgroundColor: string;

}
