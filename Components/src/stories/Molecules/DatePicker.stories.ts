import { Story, Meta } from '@storybook/angular/types-6-0';
import { DatePickerComponent } from '../../../sp-components/src/app/Components/Molecules/date-picker/date-picker.component';

export default {
  title: 'Molecules/DatePicker',
  component: DatePickerComponent
} as Meta;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
