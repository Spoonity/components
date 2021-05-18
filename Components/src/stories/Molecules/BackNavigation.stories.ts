import { Story, Meta } from '@storybook/angular/types-6-0';
import { BackNavigationComponent } from '../../../sp-components/src/app/Components/Molecules/back-navigation/back-navigation.component';

export default {
  title: 'Molecules/BackNavigation',
  component: BackNavigationComponent
} as Meta;

const Template: Story<BackNavigationComponent> = (args: BackNavigationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Back',
  subTitle: 'This is a subtitle',
};
