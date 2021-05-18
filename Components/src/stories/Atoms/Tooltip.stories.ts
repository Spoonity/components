import { Story, Meta } from '@storybook/angular/types-6-0';
import { TooltipComponent } from '../../../sp-components/src/app/Components/Atoms/tooltip/tooltip.component';

export default {
  title: 'Atoms/Tooltip',
  component: TooltipComponent
} as Meta;

const Template: Story<TooltipComponent> = (args: TooltipComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    title: '',
    content: ''
};