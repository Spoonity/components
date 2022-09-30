import {Component, forwardRef, Input, Renderer2} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormFieldManager} from '../../shared/form-field.manager';

@Component({
  selector: 'spt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent extends FormFieldManager {
  /* display direction */
  @Input() direction: 'vertical' | 'horizontal' = 'horizontal';

  /* radio button options */
  @Input() options: {value: any; text: string}[] = [];

  constructor(_renderer: Renderer2) {
    super(_renderer);
  }
}
