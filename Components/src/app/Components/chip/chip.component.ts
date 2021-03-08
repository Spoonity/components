import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sp-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.less']
})
export class ChipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text : string;
  @Input() icon : string;
  @Input() mode : string;
  @Output() onCloseEvent = new EventEmitter<any>();

  onClose(){
    this.onCloseEvent.emit(true);
  }




}
