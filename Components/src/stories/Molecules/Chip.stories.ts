import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TagType } from 'sp-components/src/app/utils/enums';
import { ChipComponent } from '../../../sp-components/src/app/Components/Molecules/chip/chip.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Chip',
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-chip [text]="text" [icon]="icon" [mode]="mode" [checked]="checked" (onCloseEvent)="onClose()"
        [disabled]="disabled"></sp-chip>`
      }
    }
  }
} as Meta;

const Template: Story<ChipComponent> = (args: ChipComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Example',
  icon: null,
  mode: TagType.default,
  checked: false,
  disabled: false,
};

export const Closable = Template.bind({});
Closable.args = {
  text: 'Example',
  icon: null,
  mode: TagType.closeable,
  checked: false,
  disabled: false,
};

export const Checkable = Template.bind({});
Checkable.args = {
  text: 'Example',
  icon: null,
  mode: TagType.checkable,
  checked: false,
  disabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Example',
  icon: '',
  mode: TagType.default,
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  text: 'Example',
  icon: '',
  mode: TagType.default,
  checked: true,
  disabled: false,
};

export const Disable = Template.bind({});
Disable.args = {
  text: 'Example',
  icon: '',
  mode: TagType.default,
  checked: false,
  disabled: true,
};

