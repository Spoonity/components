// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from 'sp-components/src/app/Components/Atoms/avatar/avatar.component';
import { AvatarSize } from 'sp-components/src/app/utils/enums';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    argTypes: {
      size: {
        control: {
          type: 'radio',
          options: [AvatarSize.large, AvatarSize.medium, AvatarSize.small]
        }
      }
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
        code: `<sp-avatar [size]="size" [text]="text"></sp-avatar>`
      }
    }
  }
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
    size: AvatarSize.large,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const Medium = Template.bind({});
Medium.args = {
    size: AvatarSize.medium,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
export const Small = Template.bind({});
Small.args = {
    size: AvatarSize.small,
    text: 'A',
    color: '#ffffff',
    backgroundColor: '#ff9900'
};
