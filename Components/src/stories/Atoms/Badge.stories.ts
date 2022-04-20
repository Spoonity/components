import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BadgeComponent } from '../../../sp-components/src/app/Components/Atoms/badge/badge.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      source: {
        code: `<spt-badge [color]="color" [name]="name"></spt-badge>`
      }
    }
  }
} as Meta;

const Template: Story<BadgeComponent> = (args: BadgeComponent) => ({
  props: args
});

export const Badge = Template.bind({});
Badge.args = {
    name: 'Badge',
    color: '#FF9900'
};
