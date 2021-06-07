import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'spt-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() on: boolean = false;
  @Output() onChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  change() {
    this.onChanged.emit(this.on);
  }
}
