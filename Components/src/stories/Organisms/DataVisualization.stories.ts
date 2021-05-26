
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DataVisualizationComponent } from '../../../sp-components/src/app/Components/Organisms/data-visualization/data-visualization.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/DataVisualization',
  component: DataVisualizationComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-data-visualization [title]="title" [description]="description">`
      }
    }
  }
} as Meta;

const Template: Story<DataVisualizationComponent> = (args: DataVisualizationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'label'
};
