import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from '../../../sp-components/src/app/Components/Atoms/checkbox/checkbox.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    indeterminate: false,
    check: false,
    value: 'A'
};
export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
    check: false,
    value: 'A'
};
export const Checked = Template.bind({});
Checked.args = {
    indeterminate: false,
    check: true,
    value: 'A'
};

