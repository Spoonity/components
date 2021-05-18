import { Story, Meta } from '@storybook/angular/types-6-0';
import { SidebarComponent } from '../../../sp-components/src/app/Components/Organisms/sidebar/sidebar.component';

export default {
  title: 'Organisms/SideBar',
  component: SidebarComponent
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  sidebarData: {},
  optionsData: [],
};
