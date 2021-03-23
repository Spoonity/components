import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sp-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  @Input() items: [{ label: '', route: '' }];

  ngOnInit() {
  }


}

export interface IBreadCrumbItem {
  label: string;
  route: string;
}
