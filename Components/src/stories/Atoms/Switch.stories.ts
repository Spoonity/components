import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SwitchComponent } from '../../../sp-components/src/app/Components/Atoms/switch/switch.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-switch [on]="on"></sp-switch>`
      }
    }
  }
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  props: args,
});

export const Switch = Template.bind({});
Switch.args = {
    on: true
};
