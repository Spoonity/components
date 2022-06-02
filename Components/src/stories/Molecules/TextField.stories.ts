import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpComponentsModule, TextFieldComponent } from 'sp-components/public_api';

export default {
  title: 'Molecules/Text Field',
  component: TextFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: {type: 'select'}
    },
    ngOnInit: {
      table: {
        disable: true
      }
    },
    isDisable: {
      table: {
        disable: true
      }
    },
    isError: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <sp-text-field [size]="size"
                   [label]="label"
                   [max]="maxLength"
                   [startIcon]="startIcon"
                   [endIcon]="endIcon"
                   [hint]="hint"
                   [error]="error">
        </sp-text-field>`
      }
    }
  }
} as Meta;

const Template: Story<TextFieldComponent> = (args: TextFieldComponent, {argTypes}) => ({
  props: args,
});

export const TextField = Template.bind({});
TextField.args = {
  size: 'large',
  label: 'Textfield',
  maxLength: 30,
  endIcon: '',
  startIcon: '',
  hint: 'hint',
  error: 'this is an error message'
};
