import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
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
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'link', 'inverted'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' },
    },
    color: {
      control: 'color'
    },
    iconColor: {
      control: 'color'
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<spt-button type="primary" text="BUTTON" size="medium" leftIcon="favorite"></spt-button>`
      }
    }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Button = Template.bind({});
Button.args = {
  type: 'primary',
  size: 'medium',
  text: 'BUTTON',
  leftIcon: 'favorite',
  disabled: false,
};
