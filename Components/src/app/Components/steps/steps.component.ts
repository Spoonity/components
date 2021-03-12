import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sp-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  constructor() { }

  @Input() current: number;
  @Input() steps: Array<ISteps>;
  @Input() navigation : string = 'horizontal';
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
}
