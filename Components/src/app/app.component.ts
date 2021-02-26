import { Component } from '@angular/core';
import { SvgIconRegistry } from '@ngneat/svg-icon';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { appAccountBoxIcon } from './svg/Action/account_box';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private iconReg: SvgIconRegistryService) {
    this.iconReg.addSvg( appAccountBoxIcon.name,appAccountBoxIcon.data);
  }
  title = 'Components';

  colors = [{ name: 'GRAY', color: '#706F6E' }, { name: 'RED', color: '#EF5350' }, { name: 'PINK', color: '#EC407A' }, { name: 'PURPLE', color: '#AB47BC' }, { name: 'DEEP PURPLE', color: '#7E57C2' }, { name: 'INDIGO', color: '#5C6BC0' }, { name: 'BLUE', color: '#42A5F5' }, { name: 'CYAN', color: '#26C6DA' }, { name: 'TEAL', color: '#26A69A' }, { name: 'GREEN', color: '#66BB6A' }, { name: 'LIGHT GREEN', color: '#9CCC65' }, { name: 'AMBER', color: '#FFB300' }, { name: 'DEEP ORANGE', color: '#FF7043' }];
  tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];
}

