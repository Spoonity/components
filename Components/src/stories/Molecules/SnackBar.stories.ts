import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SnackBarExampleComponent } from '../../../src/app/molecules/snack-bar-example/snack-bar-example.component';
import { SpComponentsModule } from 'sp-components/public_api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
  title: 'Molecules/Snackbar',
  component: SnackBarExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    snackbar: {
      table: {
        disable: true
      }
    },
    ngOnInit: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <sp-snackbar></sp-snackbar>
        <spt-button type="primary" text='Open Snackbar' (click)="OnOpenSnackbar()"></spt-button>`
      }
    }
  }
} as Meta;

const Template: Story<SnackBarExampleComponent> = (args: SnackBarExampleComponent) => ({
  props: args,
});

export const Snackbar = Template.bind({});
Snackbar.args = {

};
