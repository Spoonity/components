import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpComponentsModule } from 'sp-components/public_api';
import { BadgeComponent } from '../../../sp-components/src/app/Components/Atoms/badge/badge.component';

export default {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: args,
});

export const Color = Template.bind({});
Color.args = {
    name: 'Badge',
    color: '#42A5F5',
};
