import { Story, Meta } from '@storybook/angular/types-6-0';
import { DividerComponent } from '../../../sp-components/src/app/Components/Atoms/divider/divider.component';

export default {
  title: 'Atoms/Divider',
  component: DividerComponent
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
    type: 'Horizontal'
};
export const Vertical = Template.bind({});
Vertical.args = {
    type: 'Vertical'
};