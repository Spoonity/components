import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IBreadCrumbItem } from '../Components/breadcrumb/breadcrumb.component';
import { ISnackbar, SnackbarComponent } from '../Components/snackbar/snackbar.component';
import { ISteps } from '../Components/steps/steps.component';
import { ButtonSize, ButtonType, TagType } from '../utils/enums';

interface IBanner {
  id: number;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

@Component({
  selector: 'sp-molecules',
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.less']
})
export class MoleculesComponent implements OnInit {

  constructor() { }

  buttonType: ButtonType = ButtonType.primary;
  buttonSize: ButtonSize = ButtonSize.medium;

  tagType: TagType = TagType.default;

  enumButtonType = ButtonType;
  enumButtonSize = ButtonSize;

  enumTagType = TagType;

  currentStep = 0;
  banners: IBanner[] = [];
  steps: ISteps[] = []
  breadcrumbItems: IBreadCrumbItem[] = [];

  openSnackbar = false;

  @ViewChild('snackbar', { static: false }) snackbar?: SnackbarComponent;


  onClose(): void {
    console.log('tag was closed.');
  }

  checkChange(e: boolean): void {
    console.log(e);
  }

  OnOpenSnackbar() {
    let snackbar: ISnackbar = {
      message: 'Message',
      description: 'Description',
      actionMessage: 'Action',
      actionEvent: () => {alert('callback')}
    };
    this.snackbar.createSnackbar(snackbar);
  }

  ngOnInit() {
    this.banners = this.getBanner();
    this.steps = this.getSteps();
    this.breadcrumbItems = this.getBreadcrumbsItems();
  }

  getBanner(): IBanner[] {
    return [
      { id: 0, message: 'Error', type: 'error' },
      { id: 1, message: 'Warning', type: 'warning' },
      { id: 2, message: 'Success', type: 'success' },
      { id: 3, message: 'Informational', type: 'info' }
    ];
  }

  getSteps(): ISteps[] {
    return [
      { title: 'Step 1', description: '' },
      { title: 'Step 2', description: '' },
      { title: 'Step 3', description: '' },
      { title: 'Step 4', description: '' },
      { title: 'Step 5', description: '' }
    ];
  }

  getBreadcrumbsItems(): IBreadCrumbItem[] {
    return [
      { label: 'Page 1', route: '' },
      { label: 'Page 2', route: '' },
      { label: 'Page 3', route: '' }
    ];
  }

  resetBanner() {
    this.banners = [];
    setTimeout(() => {
      this.banners = this.getBanner();
    }, 100);
  }

  onIndexChange(event: number) {
    this.currentStep = event;
  }

}

