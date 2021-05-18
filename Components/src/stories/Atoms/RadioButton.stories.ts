import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from '../../../sp-components/src/app/Components/Atoms/radio-button/radio-button.component';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButtonComponent
} as Meta;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
  props: args,
});

export const ModelA = Template.bind({});
ModelA.args = {
    model: 'A'
};
export const ModelB = Template.bind({});
ModelB.args = {
    model: 'B'
};