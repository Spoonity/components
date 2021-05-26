import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogsComponent } from 'sp-components/src/app/Components/Organisms/dialogs/dialogs.component';

@Component({
  selector: 'app-dialogs-example',
  templateUrl: './dialogs-example.component.html',
  styleUrls: ['./dialogs-example.component.less']
})
export class DialogsExampleComponent implements OnInit {

  @ViewChild(DialogsComponent) dialog?: DialogsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  createModal() {
    let dialog = {
      title: 'Dialog Header',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Action 1') },
      action2: () => { alert('Action 1') },
      action1Label: 'Action 1',
      action2Label: 'Action 2'
    }
    this.dialog.createModal(dialog);
  }

}
