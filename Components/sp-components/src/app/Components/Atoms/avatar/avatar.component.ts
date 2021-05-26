import { Component, Input, OnInit } from '@angular/core';
import { AvatarSize } from '../../../utils/enums';

@Component({
  selector: 'spt-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {

  @Input() size: AvatarSize;
  @Input() text: string;
  @Input() color: string;
  @Input() backgroundColor: string;

  styles: { 'background-color': string; color: string; };

  constructor() { }

  ngOnInit() {
    this.styles = {'background-color': this.backgroundColor, 'color' : this.color};
  }

}
