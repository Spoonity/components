import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from '../../../sp-components/src/app/Components/Atoms/divider/divider.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Divider',
  component: DividerComponent,
  argTypes: {
    type: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<spt-divider [type]="type"></spt-divider>`
      }
    }
  }
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Divider = Template.bind({});
Divider.args = {
    type: 'horizontal'
};

