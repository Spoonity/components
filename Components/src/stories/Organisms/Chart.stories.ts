import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ChartComponent, ChartType } from '../../../sp-components/src/app/Components/Organisms/chart/chart.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Chart',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  props: args,
});

const  chartData = [
  { data: [330, 600, 260, 700], label: 'Account A' },
  { data: [120, 455, 100, 340], label: 'Account B' }
];

const chartLabels = ['January', 'February', 'Mars', 'April'];
const type1: ChartType = ChartType.line;

export const Default = Template.bind({});
Default.args = {
  options: {},
  data: chartData,
  labels: chartLabels,
  type: type1,
};
