import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DropdownComponent } from '../../../sp-components/src/app/Components/Molecules/dropdown/dropdown.component';
import { DropdownStoryExampleComponent } from '../../../src/app/molecules/dropdown-story-example/dropdown-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';
import {FormControl, FormGroup} from '@angular/forms';
import { NzDropDownModule, NzContextMenuServiceModule } from 'ng-zorro-antd/dropdown';

export default {
  title: 'Molecules/DropDown',
  component: DropdownStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' }
    },
    options: {
      table: {
        disable: true
      }
    },
    selectMultiple: {
      table: {
        disable: true
      }
    },
    ngOnInit: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <spt-dropdown 
          label="Dropdown Example" 
          size="medium"
          startIcon="favorite" 
          selectMultiple="false">
        <sp-option *ngFor="let o of options" [value]="o.id" [text]="o.value"></sp-option>
        </spt-dropdown>`
      }
    }
  }
} as Meta;

const Template: Story<DropdownStoryExampleComponent> = (args: DropdownStoryExampleComponent) => ({
  props: args,
});

export const Single = Template.bind({});
Single.args = {
  label: 'Dropdown Example',
  size: 'medium',
  isDisabled: false
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Dropdown Example',
  size: 'medium',
  isDisabled: false,
  selectMultiple: true
};
