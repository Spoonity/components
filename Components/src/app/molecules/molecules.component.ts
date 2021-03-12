import { Component, OnInit } from '@angular/core';
import { ButtonSize, ButtonType, TagType } from '../utils/enums';

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

  tagType: TagType = TagType.default;

  enumButtonType = ButtonType;
  enumButtonSize = ButtonSize;

  enumTagType = TagType;

  banners: IBanner[] = [];

  onClose(): void {
    console.log('tag was closed.');
  }

  checkChange(e: boolean): void {
    console.log(e);
  }

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

