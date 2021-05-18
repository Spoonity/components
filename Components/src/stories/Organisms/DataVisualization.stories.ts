import { Story, Meta } from '@storybook/angular/types-6-0';
import { DataVisualizationComponent } from '../../../sp-components/src/app/Components/Organisms/data-visualization/data-visualization.component';

export default {
  title: 'Organisms/DataVisualization',
  component: DataVisualizationComponent
} as Meta;

const Template: Story<DataVisualizationComponent> = (args: DataVisualizationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: '',
  description: ''
};
