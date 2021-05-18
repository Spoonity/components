import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ISnackbar, SnackbarComponent } from '../../../sp-components/src/app/Components/Molecules/snackbar/snackbar.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/SnackBar',
  component: SnackbarComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<SnackbarComponent> = (args: SnackbarComponent) => ({
  props: args,
});

// const snackbar = {
//   message: 'Message',
//   description: 'Description',
//   actionMessage: 'Action',
//   actionEvent: () => {alert('callback')}
// };
// snackbar.createSnackbar(snackbar);

export const Default = Template.bind({});
Default.args = {

};
