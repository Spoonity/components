import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = 12

  colors = [
    { name: 'GRAY', color: '#706F6E' },
    { name: 'RED', color: '#EF5350' },
    { name: 'PINK', color: '#EC407A' },
    { name: 'PURPLE', color: '#AB47BC' },
    { name: 'DEEP PURPLE', color: '#7E57C2' },
    { name: 'INDIGO', color: '#5C6BC0' },
    { name: 'BLUE', color: '#42A5F5' },
    { name: 'CYAN', color: '#26C6DA' },
    { name: 'TEAL', color: '#26A69A' },
    { name: 'GREEN', color: '#66BB6A' },
    { name: 'LIGHT GREEN', color: '#9CCC65' },
    { name: 'AMBER', color: '#FFB300' },
    { name: 'DEEP ORANGE', color: '#FF7043' }
  ];

}
