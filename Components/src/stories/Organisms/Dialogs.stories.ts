import { Story, Meta } from '@storybook/angular/types-6-0';
import { DialogsComponent } from '../../../sp-components/src/app/Components/Organisms/dialogs/dialogs.component';

export default {
  title: 'Organisms/Dialogs',
  component: DialogsComponent
} as Meta;

const Template: Story<DialogsComponent> = (args: DialogsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
