import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from 'src/app/utils/enums';
import { IBreadCrumbItem } from '../../Molecules/breadcrumb/breadcrumb.component';

@Component({
  selector: 'sp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() backTitle: string;
  @Input() breadcrumbs: string;
  @Input() btnTitle: string;
  @Input() search: boolean;
  @Input() action: () => {};

  constructor() { }

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  ngOnInit() {}
  
}
