import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BreadcrumbComponent } from '../../../sp-components/src/app/Components/Molecules/breadcrumb/breadcrumb.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Breadcrumbs',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-breadcrumb [items]="items"></sp-breadcrumb>`
      }
    }
  }
} as Meta;

const Template: Story<BreadcrumbComponent> = (args: BreadcrumbComponent) => ({
  props: args,
});

const breadcrumbItems = [
  { label: 'Page1', route: ''},
  { label: 'Page2', route: ''},
  { label: 'Page3', route: ''}
]

export const Default = Template.bind({});
Default.args = {
  items: breadcrumbItems
};
