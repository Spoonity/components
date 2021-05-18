import { Story, Meta } from '@storybook/angular/types-6-0';
import { BadgeComponent } from '../../../sp-components/src/app/Components/Atoms/badge/badge.component';

export default {
  title: 'Atoms/Badge',
  component: BadgeComponent,
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
    color: '#ff0000',
};