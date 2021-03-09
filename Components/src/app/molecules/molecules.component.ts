import { Component, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../utils/enums';

interface IBanner {
  id: number;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

@Component({
  selector: 'sp-molecules',
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.less']
})
export class MoleculesComponent implements OnInit {

  constructor() { }

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  enumButtonType = ButtonType;
  enumButtonSize = ButtonSize;

  banners: IBanner[] = [];

  ngOnInit() {
    this.banners = this.getBanner();
  }

  getBanner(): IBanner[] {
    return [
      {id: 0, message: 'Error', type: 'error'},
      {id: 1, message: 'Warning', type: 'warning'},
      {id: 2, message: 'Success', type: 'success'},
      {id: 3, message: 'Informational', type: 'info'}
    ];
  }

  resetBanner() {
    this.banners = [];
    setTimeout(() => {
      this.banners = this.getBanner();
    }, 100);
  }

}

