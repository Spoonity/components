import {Component, EventEmitter, Input, Output} from '@angular/core';

interface IBanner {
  id: number;
  message: string;
  type: 'error' | 'warning' | 'info' | 'success';
}

@Component({
  selector: 'sp-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.less']
})
export class BannerComponent {
  @Input() bannerList: IBanner[] = [];
  @Output() closeCallback: EventEmitter<any> = new EventEmitter<any>();

  /* icons by type */
  icon: {[key: string]: string} = {
    error: 'error',
    warning: 'warning',
    success: 'check-circle',
    info: 'priority-high'
  };

  /* close state for each banner */
  close: {[key: string]: boolean} = {};

  /* handle close button */
  onCloseButtonClick(id: number) {
    this.close[id] = true;
    setTimeout(() => {
      this._removeBanner(id);
    }, 200);
  }

  /* remove banner */
  private _removeBanner(id: number) {
    const remove = this.bannerList.filter((b: IBanner) => b.id !== id);
    this.bannerList = [...remove];
  }
}
