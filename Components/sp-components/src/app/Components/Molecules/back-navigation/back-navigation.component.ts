import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'spt-back-navigation',
  templateUrl: './back-navigation.component.html',
  styleUrls: ['./back-navigation.component.less']
})
export class BackNavigationComponent implements OnInit {

  constructor(private _location: Location, private _router: Router) { }

  @Input() title: string;
  @Input() subTitle: string;
  @Input() route: string;

  ngOnInit() {
  }

  onBack(route): void {
    if (route) {
      this._router.navigate([route]);
    } else {
      this._location.back();
    }
  }
}
