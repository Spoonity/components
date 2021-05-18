import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownComponent } from '../../../sp-components/src/app/Components/Molecules/dropdown/dropdown.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/DropDown',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
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
