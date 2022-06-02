import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spt-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  constructor() { }

  /* current step index */
  @Input() current: number;

  /* list of steps */
  @Input() steps: Array<ISteps>;

  /* type */
  @Input() type: 'default' | 'navigation' = 'navigation';

  /* steps direction */
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  /* if steps after the current should be disabled */
  @Input() preventFutureSteps: boolean;

  /* action when the step item has changed */
  @Output() onIndexChangeEvent = new EventEmitter<number>();

  ngOnInit() {
  }

  onIndexChange(event: number): void {
    this.onIndexChangeEvent.emit(event);
  }
}

export interface ISteps {
  title: string;
  description: string;
  status?: 'wait' | 'process' | 'finish' | 'error';
}
