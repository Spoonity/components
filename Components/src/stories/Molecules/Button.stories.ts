import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonSize, ButtonType } from 'sp-components/src/app/utils/enums';
import { ButtonComponent } from '../../../sp-components/src/app/Components/Molecules/button/button.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-button [type]="type" [text]="text" [size]="size" [leftIcon]="leftIcon" [rightIcon]="rightIcon" [disabled]="disabled"></sp-button>`
      }
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.primary,
  size: ButtonSize.medium,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: ButtonType.secondary,
  size: ButtonSize.medium,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: ButtonType.tertiary,
  size: ButtonSize.medium,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  type: ButtonType.primary,
  size: ButtonSize.large,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  type: ButtonType.primary,
  size: ButtonSize.medium,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};

export const Small = Template.bind({});
Small.args = {
  type: ButtonType.primary,
  size: ButtonSize.small,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: false,
};
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  type: ButtonType.primary,
  size: ButtonSize.small,
  leftIcon: 'sms',
  rightIcon: null,
  text: 'Button',
  disabled: false,
};
export const RightIcon = Template.bind({});
RightIcon.args = {
  type: ButtonType.primary,
  size: ButtonSize.small,
  leftIcon: null,
  rightIcon: 'sms',
  text: 'Button',
  disabled: false,
};

export const Disable = Template.bind({});
Disable.args = {
  type: ButtonType.primary,
  size: ButtonSize.medium,
  leftIcon: null,
  rightIcon: null,
  text: 'Button',
  disabled: true,
};

