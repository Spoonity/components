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
  argTypes: {
    mode: {
      options: ['default', 'closeable', 'checkable'],
      control: {type: 'select'},
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<spt-chip text="Example" icon="favorite" (onCloseEvent)="onClose()" [disabled]="disabled"></spt-chip>`
      }
    }
  }
} as Meta;

const Template: Story<ChipComponent> = (args: ChipComponent) => ({
  props: args,
});

export const Chip = Template.bind({});
Chip.args = {
  text: 'Example',
  mode: TagType.default,
  checked: false,
  disabled: false,
  icon: 'favorite'
};
