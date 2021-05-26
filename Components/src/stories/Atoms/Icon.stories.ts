import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { IconComponent } from '../../../sp-components/src/app/Components/Atoms/icon/icon.component';
import { SpComponentsModule } from 'sp-components/public_api';
import { appSmsIcon } from 'sp-components/src/app/svg/Notification/sms';
import { SvgIconRegistryService } from 'angular-svg-icon';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
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
        code: `<sp-icon [toolTipTittle]="name" [name]="name"></sp-icon>`
      }
    }
  }
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

const smsIcon = appSmsIcon.name;

export const Default = Template.bind({});
Default.args = {
  name: smsIcon,
};
