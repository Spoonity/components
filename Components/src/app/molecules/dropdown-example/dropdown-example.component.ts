import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ButtonType, ButtonSize } from 'sp-components/src/app/utils/enums';


@Component({
  selector: 'spt-dropdown-example',
  templateUrl: './dropdown-example.component.html',
  styleUrls: ['./dropdown-example.component.less']
})
export class DropdownExampleComponent implements OnInit {

  sampleForm: FormGroup;
  sampleForm2: FormGroup;
  model1 = 'opt6';
  model2 = 'opt4';
  model3 = ['opt4', 'opt5'];

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  showValues: boolean;

  savedValues1: {[key: string]: any};
  savedValues2: {[key: string]: any};

  options: {id: string; value: string}[] =  [
    { id: 'opt1', value: 'Option 1'},
    { id: 'opt2', value: 'Option 2'},
    { id: 'opt3', value: 'Option 3'},
    { id: 'opt4', value: 'Option 4'},
    { id: 'opt5', value: 'Option 5'},
    { id: 'opt6', value: 'Option 6'},
    { id: 'opt7', value: 'Option 7'},
    { id: 'opt8', value: 'Option 8'},
  ];

  constructor() { }

  ngOnInit() {
    this._initializeSampleForm();
  }

  private _initializeSampleForm() {
    this.sampleForm = new FormGroup({
      largeField1: new FormControl('opt1'),
      largeField2: new FormControl('opt2'),
      mediumField1: new FormControl('opt3'),
      mediumField2: new FormControl('opt4'),
      smallField1: new FormControl('opt5'),
      smallField2: new FormControl('opt6'),
      largeMultiple: new FormControl(['opt1', 'opt2', 'opt3']),
      mediumMultiple: new FormControl(['opt4', 'opt5', 'opt6']),
      smallMultiple: new FormControl(['opt', 'opt8']),
    });

    this.sampleForm.get('largeField1').valueChanges.subscribe(s => console.log(s));

    this.sampleForm2 = new FormGroup({
      field1: new FormControl('opt1'),
      field2: new FormControl(),
      field3: new FormControl(['opt2', 'opt3']),
      field4: new FormControl()
    });
  }

  saveTextField() {
    this.showValues = true;
    this.savedValues1 = {... this.sampleForm2.value};
    this.savedValues2 = {
      model1: this.model2,
      model2: this.model3
    };
  }
}
