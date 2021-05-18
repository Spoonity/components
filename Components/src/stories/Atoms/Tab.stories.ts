import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabComponent } from '../../../sp-components/src/app/Components/Atoms/tab/tab.component';

export default {
  title: 'Atoms/Tabs',
  component: TabComponent
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

const tabs = [
    {
      name: 'Tab 1',
      disabled: false
    },
    {
      name: 'Tab 2',
      disabled: true
    },
    {
      name: 'Tab 3',
      disabled: false
    }
  ];

export const On = Template.bind({});
On.args = {
    tabs: tabs
};

