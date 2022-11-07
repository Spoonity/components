import { Component } from '@angular/core';
export class SpacingComponent {
    constructor() {
        this.spacing = [
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
        this.spacing = this.getSpacing();
    }
    ngOnInit() {
    }
    getSpacing() {
        const spacing = [];
        const offsetArr = [1, 2, 3, 6, 8, 10, 14];
        const sections = [
            { label: '(around)', className: 'spt-spacing' },
            { label: '(vertical)', className: 'spt-spacing-y' },
            { label: '(horizontal)', className: 'spt-spacing-x' },
            { label: '(top)', className: 'spt-spacing-top' },
            { label: '(bottom)', className: 'spt-spacing-bottom' },
            { label: '(left)', className: 'spt-spacing-left' },
            { label: '(right)', className: 'spt-spacing-right' },
        ];
        offsetArr.forEach((offset, i) => {
            const size = 8 * offset;
            const currentSections = Array.from(sections, s => {
                return {
                    label: `${size}px ${s.label}`,
                    className: `${s.className}--${i + 1}`
                };
            });
            const newSection = {
                sectionClassName: `spacing--${size}`,
                sectionName: `${size}px`,
                sections: currentSections
            };
            spacing.push(newSection);
        });
        return spacing;
    }
}
SpacingComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-spacing',
                template: "<div class=\"spacing\">\n    <div *ngFor=\"let section of spacing\" class=\"spacing-section\">\n        <h3>{{ section.sectionName }}</h3>\n        <div class=\"spacing-container\">\n            <div *ngFor=\"let subsection of section.sections\" class=\"spacing-example\">\n                <div class=\"spacing-wrapper spt-elevation--2 {{ section.sectionClassName }} {{subsection.className}}\">\n                    <div class=\"spacing-box\">\n                        <p class=\"spacing-label\">{{ subsection.label }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".spacing .spacing-section{padding-top:20px}.spacing .spacing-section .spacing-container{display:flex;align-content:center;flex-wrap:wrap}.spacing .spacing-section .spacing-container .spacing-example{text-align:center;padding:10px}.spacing .spacing-section .spacing-container .spacing-example .spacing--8{background-color:rgba(239,83,80,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--16{background-color:rgba(236,64,122,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--24{background-color:rgba(171,71,188,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--48{background-color:rgba(126,87,194,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--64{background-color:rgba(92,107,192,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--80{background-color:rgba(66,165,245,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--112{background-color:rgba(38,198,218,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper{width:-moz-fit-content;width:fit-content;margin:0 auto}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box{width:80px;height:80px;background-color:#fff;display:flex;align-items:center;justify-content:center}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box p{font-size:12px}"]
            },] }
];
SpacingComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvQXRvbXMvc3BhY2luZy9zcGFjaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBYW5ELE1BQU0sT0FBTyxnQkFBZ0I7SUErQjNCO1FBN0JBLFlBQU8sR0FBZTtZQUNwQjtnQkFDRSxXQUFXLEVBQUUsS0FBSztnQkFDbEIsZ0JBQWdCLEVBQUUsWUFBWTtnQkFDOUIsUUFBUSxFQUFFO29CQUNSLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7b0JBQ3RELEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtvQkFDMUQsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO29CQUM1RCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFO29CQUN2RCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFO29CQUM3RCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFO29CQUN6RCxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFO2lCQUM1RDthQUNGO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLGdCQUFnQixFQUFFLGFBQWE7Z0JBQy9CLFFBQVEsRUFBRTtvQkFDUixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO29CQUN2RCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFO29CQUN4RCxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUU7b0JBQzFELEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtvQkFDNUQsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRTtvQkFDOUQsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtvQkFDMUQsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxzQkFBc0IsRUFBRTtpQkFDN0Q7YUFDRjtTQUNGLENBQUM7UUFHQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFHRCxVQUFVO1FBQ1IsTUFBTSxPQUFPLEdBQWUsRUFBRSxDQUFDO1FBQy9CLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtZQUMvQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBQztZQUNsRCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtZQUNyRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1lBQ2hELEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUU7WUFDdEQsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtZQUNsRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO1NBQ3JELENBQUM7UUFFRixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBYyxFQUFFLENBQVMsRUFBRSxFQUFFO1lBQzlDLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDeEIsTUFBTSxlQUFlLEdBQXlDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUM3RSxDQUFDLENBQUMsRUFBRTtnQkFDRixPQUFPO29CQUNMLEtBQUssRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUM3QixTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7aUJBQ3RDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUVQLE1BQU0sVUFBVSxHQUFhO2dCQUMzQixnQkFBZ0IsRUFBRSxZQUFZLElBQUksRUFBRTtnQkFDcEMsV0FBVyxFQUFFLEdBQUcsSUFBSSxJQUFJO2dCQUN4QixRQUFRLEVBQUUsZUFBZTthQUMxQixDQUFDO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG9vQkFBdUM7O2FBRXhDIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBJU3BhY2luZyB7XG4gIHNlY3Rpb25OYW1lOiBzdHJpbmc7XG4gIHNlY3Rpb25DbGFzc05hbWU6IHN0cmluZztcbiAgc2VjdGlvbnM6IHtsYWJlbDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZ31bXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXNwYWNpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BhY2luZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwYWNpbmcuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGFjaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBzcGFjaW5nOiBJU3BhY2luZ1tdID0gW1xuICAgIHtcbiAgICAgIHNlY3Rpb25OYW1lOiAnOHB4JyxcbiAgICAgIHNlY3Rpb25DbGFzc05hbWU6ICdzcGFjaW5nLS04JyxcbiAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgIHsgbGFiZWw6ICc4cHggKGFyb3VuZCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy0tMScgfSxcbiAgICAgICAgeyBsYWJlbDogJzhweCAodmVydGljYWwpJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmcteS0tMScgfSxcbiAgICAgICAgeyBsYWJlbDogJzhweCAoaG9yaXpvbnRhbCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy14LS0xJyB9LFxuICAgICAgICB7IGxhYmVsOiAnOHB4ICh0b3ApJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmctdG9wLS0xJyB9LFxuICAgICAgICB7IGxhYmVsOiAnOHB4IChib3R0b20pJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmctYm90dG9tLS0xJyB9LFxuICAgICAgICB7IGxhYmVsOiAnOHB4IChsZWZ0KScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLWxlZnQtLTEnIH0sXG4gICAgICAgIHsgbGFiZWw6ICc4cHggKHJpZ2h0KScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLXJpZ2h0LS0xJyB9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VjdGlvbk5hbWU6ICcxNnB4JyxcbiAgICAgIHNlY3Rpb25DbGFzc05hbWU6ICdzcGFjaW5nLS0xNicsXG4gICAgICBzZWN0aW9uczogW1xuICAgICAgICB7IGxhYmVsOiAnMTZweCAoYXJvdW5kKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLS0yJyB9LFxuICAgICAgICB7IGxhYmVsOiAnMTZweCAodG9wKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLXRvcC0tMicgfSxcbiAgICAgICAgeyBsYWJlbDogJzhweCAodmVydGljYWwpJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmcteS0tMicgfSxcbiAgICAgICAgeyBsYWJlbDogJzhweCAoaG9yaXpvbnRhbCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy14LS0yJyB9LFxuICAgICAgICB7IGxhYmVsOiAnMTZweCAoYm90dG9tKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLWJvdHRvbS0tMicgfSxcbiAgICAgICAgeyBsYWJlbDogJzE2cHggKGxlZnQpJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmctbGVmdC0tMicgfSxcbiAgICAgICAgeyBsYWJlbDogJzE2cHggKHJpZ2h0KScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLXJpZ2h0LS0yJyB9LFxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNwYWNpbmcgPSB0aGlzLmdldFNwYWNpbmcoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICBnZXRTcGFjaW5nKCk6IElTcGFjaW5nW10ge1xuICAgIGNvbnN0IHNwYWNpbmc6IElTcGFjaW5nW10gPSBbXTtcbiAgICBjb25zdCBvZmZzZXRBcnIgPSBbMSwgMiwgMywgNiwgOCwgMTAsIDE0XTtcbiAgICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICAgIHsgbGFiZWw6ICcoYXJvdW5kKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nJyB9LFxuICAgICAgeyBsYWJlbDogJyh2ZXJ0aWNhbCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy15J30sXG4gICAgICB7IGxhYmVsOiAnKGhvcml6b250YWwpJywgY2xhc3NOYW1lOiAnc3B0LXNwYWNpbmcteCcgfSxcbiAgICAgIHsgbGFiZWw6ICcodG9wKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLXRvcCcgfSxcbiAgICAgIHsgbGFiZWw6ICcoYm90dG9tKScsIGNsYXNzTmFtZTogJ3NwdC1zcGFjaW5nLWJvdHRvbScgfSxcbiAgICAgIHsgbGFiZWw6ICcobGVmdCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy1sZWZ0JyB9LFxuICAgICAgeyBsYWJlbDogJyhyaWdodCknLCBjbGFzc05hbWU6ICdzcHQtc3BhY2luZy1yaWdodCcgfSxcbiAgICBdO1xuXG4gICAgb2Zmc2V0QXJyLmZvckVhY2goKG9mZnNldDogbnVtYmVyLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHNpemUgPSA4ICogb2Zmc2V0O1xuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb25zOiB7bGFiZWw6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmd9W10gPSBBcnJheS5mcm9tKHNlY3Rpb25zLFxuICAgICAgICAgIHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGFiZWw6IGAke3NpemV9cHggJHtzLmxhYmVsfWAsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7cy5jbGFzc05hbWV9LS0ke2kgKyAxfWBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5ld1NlY3Rpb246IElTcGFjaW5nID0ge1xuICAgICAgICBzZWN0aW9uQ2xhc3NOYW1lOiBgc3BhY2luZy0tJHtzaXplfWAsXG4gICAgICAgIHNlY3Rpb25OYW1lOiBgJHtzaXplfXB4YCxcbiAgICAgICAgc2VjdGlvbnM6IGN1cnJlbnRTZWN0aW9uc1xuICAgICAgfTtcblxuICAgICAgc3BhY2luZy5wdXNoKG5ld1NlY3Rpb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNwYWNpbmc7XG4gIH1cblxufVxuIl19