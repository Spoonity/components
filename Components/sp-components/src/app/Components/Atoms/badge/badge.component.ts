import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name: string;
  @Input() color: string;

}
