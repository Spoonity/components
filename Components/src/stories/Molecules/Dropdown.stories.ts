import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownComponent } from '../../../sp-components/src/app/Components/Molecules/dropdown/dropdown.component';

export default {
  title: 'Molecules/DropDown',
  component: DropdownComponent
} as Meta;

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selectMultiple: false,
};

export const SelectMultiple = Template.bind({});
SelectMultiple.args = {
  selectMultiple: true,
};
