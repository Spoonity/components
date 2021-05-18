import { Story, Meta } from '@storybook/angular/types-6-0';
import { SpacingComponent } from '../../../sp-components/src/app/Components/Atoms/spacing/spacing.component';

export default {
  title: 'Atoms/Spacing',
  component: SpacingComponent
} as Meta;

const Template: Story<SpacingComponent> = (args: SpacingComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
