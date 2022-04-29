import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabComponent } from '../../../sp-components/src/app/Components/Atoms/tab/tab.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Tabs',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-tab [tabs]="tabs"></sp-tab>`
      }
    }
  }
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

export const Tabs = Template.bind({});
Tabs.args = {
    tabs
};

