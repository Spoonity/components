import { Component, Input, OnInit } from '@angular/core';
import { SideNavigationType } from 'src/app/utils/enums';

@Component({
  selector: 'sp-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.less']
})
export class SideNavigationComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;
  @Input() disabled: boolean;
  @Input() items = new Array<MenuItems>();
  @Input() type: SideNavigationType;


  constructor() { }

  ngOnInit() {
  }

}

export interface MenuItems {
  icon: string,
  text: string,
  link: string
}
