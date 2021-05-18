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
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  props: args,
});

export const On = Template.bind({});
On.args = {
    on: true
};
export const Off = Template.bind({});
Off.args = {
    on: false
};
