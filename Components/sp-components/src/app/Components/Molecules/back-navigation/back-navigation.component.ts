import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'spt-back-navigation',
  templateUrl: './back-navigation.component.html',
  styleUrls: ['./back-navigation.component.less']
})
export class BackNavigationComponent {
  /* text beside the arrow */
  @Input() text: string = 'Back';

  /* route to navigate to when clicked */
  @Input() route: string;

  constructor(
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  onBack(): void {
    if (this.route) {
      this._router.navigate([this.route], {relativeTo: this._route});
    } else {
      this._location.back();
    }
  }
}
