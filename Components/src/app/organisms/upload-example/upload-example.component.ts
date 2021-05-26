import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadComponent } from 'sp-components/src/app/Components/Organisms/upload/upload.component';

@Component({
  selector: 'app-upload-example',
  templateUrl: './upload-example.component.html',
  styleUrls: ['./upload-example.component.less']
})
export class UploadExampleComponent implements OnInit {

  @ViewChild(UploadComponent) upload?: UploadComponent;

  constructor() { }

  ngOnInit(): void {
  }

  createModalU() {
    let upload = {
      title: 'Upload',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Closing') },
      action1Label: 'Close',
    }
    this.upload.createModalUpload(upload);
  }

}
