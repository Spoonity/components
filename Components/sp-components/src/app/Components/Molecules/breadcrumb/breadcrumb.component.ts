import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spt-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  @Input() items: { label: string, route: string }[];

  ngOnInit() {
  }


}

export interface IBreadCrumbItem {
  label: string;
  route: string;
}
