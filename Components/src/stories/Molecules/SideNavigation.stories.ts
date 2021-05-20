import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SideNavigationType } from 'sp-components/src/app/utils/enums';
import { SideNavigationComponent } from '../../../sp-components/src/app/Components/Molecules/side-navigation/side-navigation.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/SideNavigation',
  component: SideNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: ``
      }
    }
  }
} as Meta;

const Template: Story<SideNavigationComponent> = (args: SideNavigationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'sms',
  text: 'Example',
  disabled: false,
  items: [
    {icon: 'sms', text: 'test1', link: ''},
    {icon: 'sms', text: 'test2', link: ''},
    {icon: 'sms', text: 'test3', link: ''}
  ],
  type: SideNavigationType.menu,

};
