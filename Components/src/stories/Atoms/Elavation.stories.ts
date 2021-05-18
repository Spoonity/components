import { Story, Meta } from '@storybook/angular/types-6-0';
import { ElevationComponent } from '../../../sp-components/src/app/Components/Atoms/elevation/elevation.component';

export default {
  title: 'Atoms/Spacing',
  component: ElevationComponent
} as Meta;

const Template: Story<ElevationComponent> = (args: ElevationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    
};