import { DividerType } from './../../../utils/enums';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.less']
})
export class DividerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() type: string = DividerType.horizontal;

}
