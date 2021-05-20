import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
// import { SnackbarComponent } from '../../../sp-components/src/app/Components/Molecules/snackbar/snackbar.component';
import { SnackBarExampleComponent } from '../../../src/app/molecules/snack-bar-example/snack-bar-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/SnackBar',
  component: SnackBarExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-snackbar></sp-snackbar>
      <sp-button type="primary" text='Open Snackbar' (click)="OnOpenSnackbar()"></sp-button>`
      }
    }
  }
} as Meta;

const Template: Story<SnackBarExampleComponent> = (args: SnackBarExampleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
