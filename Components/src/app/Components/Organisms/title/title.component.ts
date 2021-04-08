import { Component, Input, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from 'src/app/utils/enums';
import { IBreadCrumbItem } from '../../Molecules/breadcrumb/breadcrumb.component';

@Component({
  selector: 'sp-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.less']
})
export class TitleComponent implements OnInit {


  @Input() title: string;
  @Input() backTitle: string;
  @Input() breadcrumbs: string;
  @Input() btnTitle: string;
  @Input() search: boolean;
  
  constructor() { }


  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  ngOnInit() {}

  

}
