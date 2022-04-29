import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpacingComponent } from '../../../sp-components/src/app/Components/Atoms/spacing/spacing.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Spacing',
  component: SpacingComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<div class="spt-spading-y--1"></div>`
      }
    }
  }
} as Meta;

const Template: Story<SpacingComponent> = (args: SpacingComponent) => ({
  props: args,
});

export const Spacing = Template.bind({});
Spacing.args = {

};
