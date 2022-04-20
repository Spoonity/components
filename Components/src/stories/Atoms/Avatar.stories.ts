// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AvatarComponent } from 'sp-components/src/app/Components/Atoms/avatar/avatar.component';
import { SpComponentsModule } from 'sp-components/public_api';

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
  parameters: {
    docs: {
      source: {
        code: `<spt-avatar [size]="size" [text]="text" [backgroundColor]="backgroundColor"></spt-avatar>`
      }
    }
  }
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Avatar = Template.bind({});
Avatar.args = {
    size: 40,
    text: 'A',
    textColor: '#0000000',
    backgroundColor: '#ff9900'
};
