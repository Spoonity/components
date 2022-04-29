import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RadioComponent } from '../../../sp-components/src/app/Components/Atoms/radio/radio.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Radio',
  component: RadioComponent,
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    }
  },
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
      declarations: []
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-radio [(ngModel)]="model" [options]="options" direction="vertical"></sp-radio>`
      }
    }
  }
} as Meta;

const Template: Story<RadioComponent> = (args: RadioComponent) => ({
  props: args,
});

export const Radio = Template.bind({});
Radio.args = {
  direction: 'horizontal',
  options: [
    {value: 'A', text: 'Option A'},
    {value: 'B', text: 'Option B'},
    {value: 'C', text: 'Option C'},
    {value: 'D', text: 'Option D'}
  ]
};
