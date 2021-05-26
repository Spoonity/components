import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ButtonSize, ButtonType } from '../../utils/enums';

@Component({
  selector: 'spt-text-field-example',
  templateUrl: './text-field-example.component.html',
  styleUrls: ['./text-field-example.component.less']
})
export class TextFieldExampleComponent implements OnInit {


  sampleForm: FormGroup;
  sampleForm2: FormGroup;

  model1 = 'example (ngModel 1)';
  model2 = 'example (ngModel 2)';
  model3: string;
  model4 = 'initialized value';

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  showValues: boolean;
  savedValues1: any = {};
  savedValues2: any = {};

  constructor() { }

  ngOnInit() {
    this._initializeSampleForm();
  }

  private _initializeSampleForm() {
    this.sampleForm = new FormGroup({
      largeField1: new FormControl('This is an example (#1)'),
      largeField2: new FormControl('This is an example (#2)'),
      largeFieldDisabled2: new FormControl(),
      largeField3: new FormControl('This is an example (#3)'),
      largeFieldDisabled: new FormControl({value: 'disabled field', disabled: true}),
      mediumField1: new FormControl('This is an example (#1)'),
      mediumField2: new FormControl('This is an example (#2)'),
      mediumField3: new FormControl('This is an example (#3)'),
      mediumField4: new FormControl('This is an example (#4)')
    });

    this.sampleForm2 = new FormGroup({
      field1: new FormControl(),
      field2: new FormControl('initialized value')
    });
  }

  saveTextField() {
    this.showValues = true;
    this.savedValues1 = {... this.sampleForm2.value};
    this.savedValues2 = {
      model1: this.model3,
      model2: this.model4
    };
  }
}
