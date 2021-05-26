import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TextFieldComponent } from '../../../sp-components/src/app/Components/Molecules/text-field/text-field.component';
import { TextFieldStoryExampleComponent } from '../../../src/app/molecules/text-field-story-example/text-field-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/TextField',
  component: TextFieldStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-text-field [size]="size"
                   [label]="label"
                   [max]="maxLength"
                   [startIcon]="startIcon"
                   [startIcon]="endIcon"
                   [error]="isError? 'example error message' : ''"
                   [hint]="isDisable? 'disabled' : ''">
        </sp-text-field>`
      }
    }
  }
} as Meta;

const Template: Story<TextFieldStoryExampleComponent> = (args: TextFieldStoryExampleComponent) => ({
  props: args,
});

export const LargeNoIcon = Template.bind({});
LargeNoIcon.args = {
  size: 'large',
  label: 'no Icon',
  maxLength: 30
};

export const LargeError = Template.bind({});
LargeError.args = {
  size: 'large',
  label: 'no Icon',
  maxLength: 30,
  isError: true
};

export const LargeDisable = Template.bind({});
LargeDisable.args = {
  size: 'large',
  label: 'no Icon',
  maxLength: 30,
  isDisable: true
};

export const LargeStartIcon = Template.bind({});
LargeDisable.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  startIcon: 'favorite'
};

export const LargeStartIconError = Template.bind({});
LargeStartIconError.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  startIcon: 'favorite'
};

export const LargeStartIconDisable = Template.bind({});
LargeStartIconDisable.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  startIcon: 'favorite'
};

export const LargeEndIcon = Template.bind({});
LargeEndIcon.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  endIcon: 'favorite'
};

export const LargeEndIconError = Template.bind({});
LargeEndIconError.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  endIcon: 'favorite'
};

export const LargeEndIconDisable = Template.bind({});
LargeEndIconDisable.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  endIcon: 'favorite'
};

export const LargeStartEndIcon = Template.bind({});
LargeStartEndIcon.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  startIcon: 'favorite',
  endIcon: 'favorite'
};

export const LargeStartEndIconError = Template.bind({});
LargeStartEndIconError.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  startIcon: 'favorite',
  endIcon: 'favorite'
};

export const LargeStartEndIconDisable = Template.bind({});
LargeStartEndIconDisable.args = {
  size: 'large',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  startIcon: 'favorite',
  endIcon: 'favorite'
};

// medium

export const MediumNoIcon = Template.bind({});
MediumNoIcon.args = {
  size: 'medium',
  label: 'no Icon',
  maxLength: 30
};

export const MediumError = Template.bind({});
MediumError.args = {
  size: 'medium',
  label: 'no Icon',
  maxLength: 30,
  isError: true
};

export const MediumDisable = Template.bind({});
MediumDisable.args = {
  size: 'medium',
  label: 'no Icon',
  maxLength: 30,
  isDisable: true
};

export const MediumStartIcon = Template.bind({});
MediumDisable.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  startIcon: 'favorite'
};

export const MediumStartIconError = Template.bind({});
MediumStartIconError.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  startIcon: 'favorite'
};

export const MediumStartIconDisable = Template.bind({});
MediumStartIconDisable.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  startIcon: 'favorite'
};

export const MediumEndIcon = Template.bind({});
MediumEndIcon.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  endIcon: 'favorite'
};

export const MediumEndIconError = Template.bind({});
MediumEndIconError.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  endIcon: 'favorite'
};

export const MediumEndIconDisable = Template.bind({});
MediumEndIconDisable.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  endIcon: 'favorite'
};

export const MediumStartEndIcon = Template.bind({});
MediumStartEndIcon.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  startIcon: 'favorite',
  endIcon: 'favorite'
};

export const MediumStartEndIconError = Template.bind({});
MediumStartEndIconError.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isError: true,
  startIcon: 'favorite',
  endIcon: 'favorite'
};

export const MediumStartEndIconDisable = Template.bind({});
LargeStartEndIconDisable.args = {
  size: 'medium',
  label: 'Start Icon',
  maxLength: 30,
  isDisable: true,
  startIcon: 'favorite',
  endIcon: 'favorite'
};
