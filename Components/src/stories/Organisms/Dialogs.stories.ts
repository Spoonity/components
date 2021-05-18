import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DialogsComponent } from '../../../sp-components/src/app/Components/Organisms/dialogs/dialogs.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Dialogs',
  component: DialogsComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<DialogsComponent> = (args: DialogsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Header',
  content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
};
