import { Story, Meta } from '@storybook/angular/types-6-0';
import { BreadcrumbComponent } from '../../../sp-components/src/app/Components/Molecules/breadcrumb/breadcrumb.component';

export default {
  title: 'Molecules/Breadcrumbs',
  component: BreadcrumbComponent
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
