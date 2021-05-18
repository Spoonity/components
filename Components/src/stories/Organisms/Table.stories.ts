import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from '../../../sp-components/src/app/Components/Organisms/table/table.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

const dataRow = [
  'Name',
  'Date',
  'Description',
  'Amount',
  'Status',
  'Invoice'
];

const dataTable = [
  {
    number: 3455,
    date: 'Jan 1, 2012',
    description: 'January Monthly Fees',
    amount: '$1200.00 CAD',
    status: true,
    invoice: 'PDF'
  },
  {
    number: 4556,
    date: 'Dec 1, 2012',
    description: 'December Monthly Fees',
    amount: '$1200.00 CAD',
    status: true,
    invoice: 'PDF'
  },
  {
    number: 2689,
    date: 'Nov 1, 2012',
    description: 'November Monthly Fees',
    amount: '$1200.00 CAD',
    status: true,
    invoice: 'PDF'
  },
  {
    number: 2469,
    date: 'Oct 1, 2012',
    description: 'October Monthly Fees',
    amount: '$1200.00 CAD',
    status: true,
    invoice: 'PDF'
  }
];

export const Default = Template.bind({});
Default.args = {
  checkboxOn: false,
  rows: dataRow,
  dataSet: dataTable,
};
