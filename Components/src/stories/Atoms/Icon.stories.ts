import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent } from '../../../sp-components/src/app/Components/Atoms/icon/icon.component';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    toolTipTittle: 'account-box',
    name: 'account-box',
    color: '#0D0C0B'
};