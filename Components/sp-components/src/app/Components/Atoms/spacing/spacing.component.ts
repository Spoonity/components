 import { Component, OnInit } from '@angular/core';

interface ISpacing {
  sectionName: string;
  sectionClassName: string;
  sections: {label: string, className: string}[];
}

@Component({
  selector: 'spt-spacing',
  templateUrl: './spacing.component.html',
  styleUrls: ['./spacing.component.less']
})
export class SpacingComponent implements OnInit {

  spacing: ISpacing[] = [
    {
      sectionName: '8px',
      sectionClassName: 'spacing--8',
      sections: [
        { label: '8px (around)', className: 'spt-spacing--1' },
        { label: '8px (vertical)', className: 'spt-spacing-y--1' },
        { label: '8px (horizontal)', className: 'spt-spacing-x--1' },
        { label: '8px (top)', className: 'spt-spacing-top--1' },
        { label: '8px (bottom)', className: 'spt-spacing-bottom--1' },
        { label: '8px (left)', className: 'spt-spacing-left--1' },
        { label: '8px (right)', className: 'spt-spacing-right--1' },
      ]
    },
    {
      sectionName: '16px',
      sectionClassName: 'spacing--16',
      sections: [
        { label: '16px (around)', className: 'spt-spacing--2' },
        { label: '16px (top)', className: 'spt-spacing-top--2' },
        { label: '8px (vertical)', className: 'spt-spacing-y--2' },
        { label: '8px (horizontal)', className: 'spt-spacing-x--2' },
        { label: '16px (bottom)', className: 'spt-spacing-bottom--2' },
        { label: '16px (left)', className: 'spt-spacing-left--2' },
        { label: '16px (right)', className: 'spt-spacing-right--2' },
      ]
    }
  ];

  constructor() {
    this.spacing = this.getSpacing();
  }

  ngOnInit() {
  }


  getSpacing(): ISpacing[] {
    const spacing: ISpacing[] = [];
    const offsetArr = [1, 2, 3, 6, 8, 10, 14];
    const sections = [
      { label: '(around)', className: 'spt-spacing' },
      { label: '(vertical)', className: 'spt-spacing-y'},
      { label: '(horizontal)', className: 'spt-spacing-x' },
      { label: '(top)', className: 'spt-spacing-top' },
      { label: '(bottom)', className: 'spt-spacing-bottom' },
      { label: '(left)', className: 'spt-spacing-left' },
      { label: '(right)', className: 'spt-spacing-right' },
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
