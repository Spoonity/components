import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextFieldComponent } from '../../../sp-components/src/app/Components/Molecules/text-field/text-field.component';

export default {
  title: 'Molecules/TextField',
  component: TextFieldComponent
} as Meta;

const Template: Story<TextFieldComponent> = (args: TextFieldComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: '',
  max: 30

};
