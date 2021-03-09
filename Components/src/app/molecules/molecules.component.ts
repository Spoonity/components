import { Component, OnInit } from '@angular/core';
import { ButtonSize, ButtonType, TagType } from '../utils/enums';

@Component({
  selector: 'app-molecules',
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

  onClose(): void {
    console.log('tag was closed.');
  }

  checkChange(e: boolean): void {
    console.log(e);
  }


  ngOnInit() {
  }


}

