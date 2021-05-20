import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownComponent } from '../../../sp-components/src/app/Components/Molecules/dropdown/dropdown.component';
import { DropdownExampleComponent } from '../../../src/app/molecules/dropdown-example/dropdown-example.component';
import { SpComponentsModule } from 'sp-components/public_api';
import {FormControl, FormGroup} from '@angular/forms';

export default {
  title: 'Molecules/DropDown',
  component: DropdownExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: ``
      }
    }
  }
} as Meta;

const Template: Story<DropdownExampleComponent> = (args: DropdownExampleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};

// export const SelectMultiple = Template.bind({});
// SelectMultiple.args = {
//   selectMultiple: true,
// };
