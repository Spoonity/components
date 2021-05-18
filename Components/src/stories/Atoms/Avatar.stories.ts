// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpComponentsModule } from 'sp-components/public_api';
import { AvatarComponent } from 'sp-components/src/app/Components/Atoms/avatar/avatar.component';


export default {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
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
