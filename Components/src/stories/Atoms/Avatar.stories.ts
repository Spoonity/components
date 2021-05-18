// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from '../../../sp-components/src/app/Components/Atoms/avatar/avatar.component';

export default {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
    size: 48,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const MediumAvatar = Template.bind({});
MediumAvatar.args = {
    size: 40,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const SmallAvatar = Template.bind({});
LargeAvatar.args = {
    size: 32,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};