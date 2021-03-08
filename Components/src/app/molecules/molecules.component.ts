import { Component, OnInit } from '@angular/core';
import { ButtonSize, ButtonType } from '../utils/enums';

@Component({
  selector: 'app-molecules',
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.less']
})
export class MoleculesComponent implements OnInit {

  constructor() { }

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize= ButtonSize.medium;

  enumButtonType = ButtonType;
  enumButtonSize = ButtonSize;


  ngOnInit() {
  }


}

