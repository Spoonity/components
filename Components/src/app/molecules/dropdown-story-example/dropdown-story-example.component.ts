import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-story-example',
  templateUrl: './dropdown-story-example.component.html',
  styleUrls: ['./dropdown-story-example.component.less']
})
export class DropdownStoryExampleComponent implements OnInit {

  @Input() label: string;
  @Input() size: 'large' | 'medium' | 'small';
  @Input() options: {id: string; value: string}[] = [
    { id: 'opt1', value: 'Option 1'},
    { id: 'opt2', value: 'Option 2'},
    { id: 'opt3', value: 'Option 3'},
    { id: 'opt4', value: 'Option 4'},
    { id: 'opt5', value: 'Option 5'},
    { id: 'opt6', value: 'Option 6'},
    { id: 'opt7', value: 'Option 7'},
    { id: 'opt8', value: 'Option 8'},
  ];
  @Input() error: string;
  @Input() isDisabled: boolean;
  @Input() startIcon: string;
  @Input() selectMultiple: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
