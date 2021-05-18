import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextFieldComponent } from '../../../sp-components/src/app/Components/Molecules/text-field/text-field.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/TextField',
  component: TextFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<TextFieldComponent> = (args: TextFieldComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: '',
  max: 30

};
