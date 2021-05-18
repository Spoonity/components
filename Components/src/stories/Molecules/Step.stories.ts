import { Story, Meta } from '@storybook/angular/types-6-0';
import { StepsComponent } from '../../../sp-components/src/app/Components/Molecules/steps/steps.component';

export default {
  title: 'Molecules/Steps',
  component: StepsComponent
} as Meta;

const Template: Story<StepsComponent> = (args: StepsComponent) => ({
  props: args,
});

const stepsList = [
  { title: 'Step 1', description: '' },
  { title: 'Step 2', description: '' },
  { title: 'Step 3', description: '' },
  { title: 'Step 4', description: '' },
  { title: 'Step 5', description: '' }
];

export const Default = Template.bind({});
Default.args = {
  current: 0,
  steps: stepsList,
  type: 'navigation',
  direction: 'horizontal',
};
