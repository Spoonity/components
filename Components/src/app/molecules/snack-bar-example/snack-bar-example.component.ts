import { Component, OnInit, ViewChild } from '@angular/core';
import { SnackbarComponent } from 'sp-components/src/app/Components/Molecules/snackbar/snackbar.component';

@Component({
  selector: 'app-snack-bar-example',
  templateUrl: './snack-bar-example.component.html',
  styleUrls: ['./snack-bar-example.component.less']
})
export class SnackBarExampleComponent implements OnInit {

  @ViewChild(SnackbarComponent) snackbar?: SnackbarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  OnOpenSnackbar() {
    let snackbar = {
      message: 'Message',
      description: 'Description',
      actionMessage: 'Action',
      actionEvent: () => {alert('callback')}
    };
    this.snackbar.createSnackbar(snackbar);
  }


}
