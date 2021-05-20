import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TooltipComponent } from '../../../sp-components/src/app/Components/Atoms/tooltip/tooltip.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Tooltip',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-tooltip [title]="title" [content]="content"></sp-tooltip>`
      }
    }
  }
} as Meta;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    title: 'And this is a tooltip',
    content: 'This is sonme text'
};
