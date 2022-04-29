import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent } from '../../../sp-components/src/app/Components/Atoms/icon/icon.component';
import { SpComponentsModule } from 'sp-components/public_api';
import { appSmsIcon } from 'sp-components/src/app/svg/Notification/sms';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  argTypes: {
    color: { control: 'color' }
  },
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
      declarations: []
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<spt-icon [toolTipTitle]="name" [name]="name" [color]="color"></spt-icon>`
      }
    }
  }
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

const smsIcon = appSmsIcon.name;

export const Icon = Template.bind({});
Icon.args = {
  name: smsIcon,
  color: '#0C0D0B'
};
