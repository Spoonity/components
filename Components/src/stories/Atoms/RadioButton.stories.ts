import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioButtonComponent } from '../../../sp-components/src/app/Components/Atoms/radio-button/radio-button.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-radio-button [model]="model"></sp-radio-button>`
      }
    }
  }
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
