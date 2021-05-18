// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AvatarComponent } from '../../../sp-components/src/app/Components/Atoms/avatar/avatar.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

export default {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [
  //   moduleMetadata({
  //     imports: [NzAvatarModule],
  //   }),
  // ],
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
    size: 48,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const Medium = Template.bind({});
Medium.args = {
    size: 40,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const Small = Template.bind({});
Large.args = {
    size: 32,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
