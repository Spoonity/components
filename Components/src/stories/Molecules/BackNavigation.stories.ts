import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BackNavigationComponent } from '../../../sp-components/src/app/Components/Molecules/back-navigation/back-navigation.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/BackNavigation',
  component: BackNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-back-navigation [title]="title" [subTitle]="subTitle"></sp-back-navigation>`
      }
    }
  }
} as Meta;

const Template: Story<BackNavigationComponent> = (args: BackNavigationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Back',
  subTitle: ''
};
