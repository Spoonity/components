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
  parameters: {
    docs: {
      source: {
        code: `
        <sp-dropdown 
        [label]="label" 
        [size]="size" 
        [error]="error" 
        [isDisabled]="isDisabled" 
        [startIcon]="startIcon" 
        [selectMultiple]="selectMultiple">
        <sp-option *ngFor="let o of options" [value]="o.id" [text]="o.value"></sp-option>
        </sp-dropdown>`
      }
    }
  }
} as Meta;

const Template: Story<DropdownStoryExampleComponent> = (args: DropdownStoryExampleComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
  label: 'No Icon',
  size: 'large',
  
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  label: 'No Icon',
  size: 'large',
  startIcon: 'favorite',
  
};

export const LargeError = Template.bind({});
LargeError.args = {
  label: 'No Icon',
  size: 'large',
  error: 'error Message',

};

export const LargeDisabled = Template.bind({});
LargeDisabled.args = {
  label: 'No Icon',
  size: 'large',
  isDisables: true

};

export const Medium = Template.bind({});
Medium.args = {
  label: 'No Icon',
  size: 'large',
  
};

export const MediumWithIcon = Template.bind({});
MediumWithIcon.args = {
  label: 'No Icon',
  size: 'large',
  startIcon: 'favorite',
  
};

export const MediumError = Template.bind({});
MediumError.args = {
  label: 'No Icon',
  size: 'large',
  error: 'error Message',

};

export const MediumDisabled = Template.bind({});
MediumDisabled.args = {
  label: 'No Icon',
  size: 'large',
  isDisables: true

};

export const Small = Template.bind({});
Small.args = {
  label: 'No Icon',
  size: 'large',
  
};

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  label: 'No Icon',
  size: 'large',
  startIcon: 'favorite',
  
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: 'No Icon',
  size: 'large',
  error: 'error Message',

};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  label: 'No Icon',
  size: 'large',
  isDisables: true

};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'No Icon',
  size: 'large',
  selectMultiple: true

};

