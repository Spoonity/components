import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from '../../../sp-components/src/app/Components/Organisms/table/table.component';

export default {
  title: 'Organisms/Dialogs',
  component: TableComponent
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  checkboxOn: false,
  rows: [],
  dataSet: [],
};
