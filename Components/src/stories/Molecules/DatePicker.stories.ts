import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DatePickerComponent } from '../../../sp-components/src/app/Components/Molecules/date-picker/date-picker.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/DatePicker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
