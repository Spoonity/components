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
  parameters: {
  }
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
  template: `
    <spt-checkbox 
        [indeterminate]="indeterminate"
        [text]="text" 
        [check]="check" 
        (onChangeEvent)="onChecked()">
    </spt-checkbox>
  `
});

// export const defaultArgs_ = {
//   indeterminate: false,
//   check: false,
//   text: 'test',
//   onChecked: () => {
//     // DO CHECK
//   }
// };

export const Checkbox = Template.bind({});
Checkbox.args = {
  indeterminate: false,
  check: false,
  text: 'test',
  checked: false,
  onChecked: (value: boolean) => {
    // DO CHECK
    // this.checked = value;
  }
};
