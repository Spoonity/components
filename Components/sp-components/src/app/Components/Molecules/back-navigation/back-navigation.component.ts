import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'spt-back-navigation',
  templateUrl: './back-navigation.component.html',
  styleUrls: ['./back-navigation.component.less']
})
export class BackNavigationComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() subTitle: string;
  @Input() route: string;

  ngOnInit() {
  }

}
