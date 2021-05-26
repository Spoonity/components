import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from '../../../sp-components/src/app/Components/Atoms/divider/divider.component';
import { DividerType } from 'sp-components/src/app/utils/enums';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-divider [type]="type"></sp-divider>`
      }
    }
  }
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
    type: DividerType.horizontal
};

