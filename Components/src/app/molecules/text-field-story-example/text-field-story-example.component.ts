import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field-story-example',
  templateUrl: './text-field-story-example.component.html',
  styleUrls: ['./text-field-story-example.component.less']
})
export class TextFieldStoryExampleComponent implements OnInit {

  @Input() size: string = 'medium';
  @Input() label: string;
  @Input() maxLength: number;
  @Input() isError: boolean = false;
  @Input() isDisable: boolean = false;
  @Input() startIcon: string = null;
  @Input() endIcon: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
