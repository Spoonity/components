import { Story, Meta } from '@storybook/angular/types-6-0';
import { SideNavigationType } from 'sp-components/src/app/utils/enums';
import { SideNavigationComponent } from '../../../sp-components/src/app/Components/Molecules/side-navigation/side-navigation.component';

export default {
  title: 'Molecules/SideNavigation',
  component: SideNavigationComponent
} as Meta;

const Template: Story<SideNavigationComponent> = (args: SideNavigationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: '',
  text: '',
  disabled: false,
  items: [],
  type: SideNavigationType,

};
