import { Component, OnInit } from '@angular/core';
import * as ic from 'sp-components/src/app/utils/icons';
import { DividerType, ProgressType } from 'sp-components/src/app/utils/enums';

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

  dividerT = DividerType;

  progressT = ProgressType;

  icons = [];

  title = 'Components';

  colors = [
    { name: 'GRAY BADGE', color: '#706F6E' },
    { name: 'RED BADGE', color: '#EF5350' },
    { name: 'PINK BADGE', color: '#EC407A' },
    { name: 'PURPLE BADGE', color: '#AB47BC' },
    { name: 'DEEP PURPLE BADGE', color: '#7E57C2' },
    { name: 'INDIGO BADGE', color: '#5C6BC0' },
    { name: 'BLUE BADGE', color: '#42A5F5' },
    { name: 'CYAN BADGE', color: '#26C6DA' },
    { name: 'TEAL BADGE', color: '#26A69A' },
    { name: 'GREEN BADGE', color: '#66BB6A' },
    { name: 'LIGHT GREEN BADGE', color: '#9CCC65' },
    { name: 'AMBER BADGE', color: '#FFB300' },
    { name: 'DEEP ORANGE BADGE', color: '#FF7043' }
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

  tabsWithIcon = [
    {
      name: 'Tab 1',
      disabled: false,
      icon: 'circle'
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
        { label: '8px (around)', className: 'spt-spacing--1' },
        { label: '8px (vertical)', className: 'spt-spacing-y--1' },
        { label: '8px (horizontal)', className: 'spt-spacing-x--1' },
        { label: '8px (top)', className: 'spt-spacing-y-top--1' },
        { label: '8px (bottom)', className: 'spt-spacing-y-bottom--1' },
        { label: '8px (left)', className: 'spt-spacing-y-left--1' },
        { label: '8px (right)', className: 'spt-spacing-y-right--1' },
      ]
    },
    {
      sectionName: '16px',
      sectionClassName: 'spacing--16',
      sections: [
        { label: '16px (around)', className: 'spt-spacing--2' },
        { label: '16px (top)', className: 'spt-spacing-y-top--2' },
        { label: '8px (vertical)', className: 'spt-spacing-y--2' },
        { label: '8px (horizontal)', className: 'spt-spacing-x--2' },
        { label: '16px (bottom)', className: 'spt-spacing-y-bottom--2' },
        { label: '16px (left)', className: 'spt-spacing-y-left--2' },
        { label: '16px (right)', className: 'spt-spacing-y-right--2' },
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
      ic.hardwareIcons, ic.imageIcons, ic.mapsIcons, ic.miscIcons, ic.navigationIcons,
      ic.notificationIcons, ic.socialIcons, ic.toggleIcons);
    return icons;
  }

  getSpacing(): ISpacing[] {
    const spacing: ISpacing[] = [];
    const offsetArr = [1, 2, 3, 6, 8, 10, 14];
    const sections = [
      { label: '(around)', className: 'spt-spacing' },
      { label: '(vertical)', className: 'spt-spacing-y'},
      { label: '(horizontal)', className: 'spt-spacing-x' },
      { label: '(top)', className: 'spt-spacing-y-top' },
      { label: '(bottom)', className: 'spt-spacing-y-bottom' },
      { label: '(left)', className: 'spt-spacing-y-left' },
      { label: '(right)', className: 'spt-spacing-y-right' },
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
