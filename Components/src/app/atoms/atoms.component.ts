import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as ic from '../utils/icons';

interface ISpacing {
  sectionName: string;
  sectionClassName: string;
  sections: {label: string, className: string}[];
}
@Component({
  selector: 'app-atoms',
  templateUrl: './atoms.component.html',
  styleUrls: ['./atoms.component.less']
})
export class AtomsComponent implements OnInit {
  icons = [];

  title = 'Components';

  colors = [
    { name: 'GRAY', color: '#706F6E' },
    { name: 'RED', color: '#EF5350' },
    { name: 'PINK', color: '#EC407A' },
    { name: 'PURPLE', color: '#AB47BC' },
    { name: 'DEEP PURPLE', color: '#7E57C2' },
    { name: 'INDIGO', color: '#5C6BC0' },
    { name: 'BLUE', color: '#42A5F5' },
    { name: 'CYAN', color: '#26C6DA' },
    { name: 'TEAL', color: '#26A69A' },
    { name: 'GREEN', color: '#66BB6A' },
    { name: 'LIGHT GREEN', color: '#9CCC65' },
    { name: 'AMBER', color: '#FFB300' },
    { name: 'DEEP ORANGE', color: '#FF7043' }
  ];

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

  spacing: ISpacing[] = [
    {
      sectionName: '8px',
      sectionClassName: 'spacing--8',
      sections: [
        { label: '8px (around)', className: 'sp-spacing--1' },
        { label: '8px (vertical)', className: 'sp-spacing-y--1' },
        { label: '8px (horizontal)', className: 'sp-spacing-x--1' },
        { label: '8px (top)', className: 'sp-spacing-y-top--1' },
        { label: '8px (bottom)', className: 'sp-spacing-y-bottom--1' },
        { label: '8px (left)', className: 'sp-spacing-y-left--1' },
        { label: '8px (right)', className: 'sp-spacing-y-right--1' },
      ]
    },
    {
      sectionName: '16px',
      sectionClassName: 'spacing--16',
      sections: [
        { label: '16px (around)', className: 'sp-spacing--2' },
        { label: '16px (top)', className: 'sp-spacing-y-top--2' },
        { label: '8px (vertical)', className: 'sp-spacing-y--2' },
        { label: '8px (horizontal)', className: 'sp-spacing-x--2' },
        { label: '16px (bottom)', className: 'sp-spacing-y-bottom--2' },
        { label: '16px (left)', className: 'sp-spacing-y-left--2' },
        { label: '16px (right)', className: 'sp-spacing-y-right--2' },
      ]
    }
  ];


  constructor() {

    this.icons = this.getIcons();
    this.spacing = this.getSpacing();
  }
  ngOnInit(): void {

  }

  getIcons() {
    let icons = [];
    icons = icons.concat(ic.actionIcons, ic.alertIcons, ic.avIcons,
      ic.communicationIcons, ic.contentIcons, ic.fileIcons,
      ic.hardwareIcons, ic.imageIcons, ic.mapsIcons, ic.navigationIcons,
      ic.notificationIcons, ic.socialIcons, ic.toggleIcons);
    return icons;
  }

  getSpacing(): ISpacing[] {
    const spacing: ISpacing[] = [];
    const offsetArr = [1, 2, 3, 6, 8, 10, 14];
    const sections = [
      { label: '(around)', className: 'sp-spacing' },
      { label: '(vertical)', className: 'sp-spacing-y'},
      { label: '(horizontal)', className: 'sp-spacing-x' },
      { label: '(top)', className: 'sp-spacing-y-top' },
      { label: '(bottom)', className: 'sp-spacing-y-bottom' },
      { label: '(left)', className: 'sp-spacing-y-left' },
      { label: '(right)', className: 'sp-spacing-y-right' },
    ];

    offsetArr.forEach((offset: number, i: number) => {
      const size = 8 * offset;
      const currentSections: {label: string; className: string}[] = Array.from(sections,
          s => {
            return {
              label: `${size}px ${s.label}`,
              className: `${s.className}--${i + 1}`
            };
          });

      const newSection: ISpacing = {
        sectionClassName: `spacing--${size}`,
        sectionName: `${size}px`,
        sections: currentSections
      };

      spacing.push(newSection);
    });

    return spacing;
  }


}
