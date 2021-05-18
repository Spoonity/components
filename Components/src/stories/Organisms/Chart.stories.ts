import { Story, Meta } from '@storybook/angular/types-6-0';
import { ChartComponent, ChartType } from '../../../sp-components/src/app/Components/Organisms/chart/chart.component';

export default {
  title: 'Organisms/Chart',
  component: ChartComponent
} as Meta;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: {},
  data: [],
  labels: [],
  type: ChartType,
};
