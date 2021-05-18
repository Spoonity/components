import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from '../../../sp-components/src/app/Components/Organisms/table/table.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Dialogs',
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

export const Default = Template.bind({});
Default.args = {
  checkboxOn: false,
  rows: [],
  dataSet: [],
};
