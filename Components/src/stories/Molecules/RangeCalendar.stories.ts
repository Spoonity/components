import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpComponentsModule } from 'sp-components/public_api';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RangeCalendarComponent } from '../../../sp-components/src/app/Components/Molecules/range-calendar/range-calendar.component';

export default {
  title: 'Molecules/Range Calendar',
  component: RangeCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule, BrowserAnimationsModule, NoopAnimationsModule],
    }),
  ],
  argTypes: {
    ngOnInit: {
      table: {
        disable: true
      }
    },
    ngOnChanges: {
      table: {
        disable: true
      }
    },
    range: {
      table: {
        disable: true
      }
    },
    disabledDate: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: ` <spt-range-calendar [startDate]="startDate" [endDate]="endDate"></spt-range-calendar>`
      }
    }
  }
} as Meta;

const Template: Story<RangeCalendarComponent> = (args: RangeCalendarComponent) => ({
  props: args,
});

const startDate = new Date();
const endDate = new Date(startDate.getTime() - 300000);

export const RangeCalendar = Template.bind({});
RangeCalendar.args = {
  startDate: startDate,
  endDate: endDate,
};
