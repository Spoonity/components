import {Component, Input, OnInit, forwardRef, Renderer2, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormFieldManager} from '../../shared/form-field.manager';

@Component({
  selector: 'spt-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['../../shared/form-field.manager.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent extends FormFieldManager implements OnInit {

  constructor(_renderer: Renderer2) {
    super(_renderer);
  }

  @Input() type: string;
  @Input() step: string;

  /* optional: max length */
  @Input() maxlength: number;

  @Output() focus: EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(): void {
  }

  /**
   * get current value length
   */
  getLength(): number {
    if (!this.value) {
      return 0;
    }

    return this.value.length;
  }
}
