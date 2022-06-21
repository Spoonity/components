import {Component, OnInit, ViewChild} from '@angular/core';
import {IBreadCrumbItem} from 'sp-components/src/app/Components/Molecules/breadcrumb/breadcrumb.component';
import {ISnackbar, SnackbarComponent} from 'sp-components/src/app/Components/Molecules/snackbar/snackbar.component';
import {ISteps} from 'sp-components/src/app/Components/Molecules/steps/steps.component';
import {ButtonSize, ButtonType, TagType} from 'sp-components/src/app/utils/enums';


interface IBanner {
  id: number;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

@Component({
  selector: 'spt-molecules',
  templateUrl: './molecules.component.html',
  styleUrls: ['./molecules.component.less']
})
export class MoleculesComponent implements OnInit {

  constructor() { }

  buttonType: ButtonType = ButtonType.secondary;
  buttonSize: ButtonSize = ButtonSize.medium;
  buttonInverted: ButtonType = ButtonType.inverted;

  tagType: TagType = TagType.default;

  enumButtonType = ButtonType;
  enumButtonSize = ButtonSize;

  enumTagType = TagType;

  currentStep = 0;
  currentStep1 = 0;
  banners: IBanner[] = [];
  steps: ISteps[] = []
  breadcrumbItems: IBreadCrumbItem[] = [];

  openSnackbar = false;

  @ViewChild('snackbar') snackbar?: SnackbarComponent;


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

  onIndexChange1(event: number) {
    this.currentStep1 = event;
  }

  backAction(): void {
    console.log('back pressed');
  }

}

