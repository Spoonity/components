import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../../../sp-components/src/app/Components/Organisms/header/header.component';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: null,
  btnTitle: null,
  search: false,
  action: () => {}
};
