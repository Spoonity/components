import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DatePickerComponent } from '../../../sp-components/src/app/Components/Molecules/date-picker/date-picker.component';
import { SpComponentsModule } from 'sp-components/public_api';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

export default {
  title: 'Molecules/Date Picker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule, BrowserAnimationsModule, NoopAnimationsModule],
    }),
  ],
  argTypes: {
    formattedDate: {
      table: {
        disable: true
      }
    },
    disabledDate: {
      table: {
        disable: true
      }
    },
    writeValue: {
      table: {
        disable: true
      }
    },
    nzDatePickerComponent: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: ` <spt-date-picker [(ngModel)]="date" label="date" size="large"></spt-date-picker>`
      }
    }
  }
} as Meta;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  props: args,
});

export const DatePicker = Template.bind({});
DatePicker.args = {

};
