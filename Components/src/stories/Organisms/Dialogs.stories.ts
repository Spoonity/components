import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { DialogsComponent } from '../../../sp-components/src/app/Components/Organisms/dialogs/dialogs.component';
// import { DialogsExampleComponent } from '../../../sp-components/src/app/Components/Organisms/dialogs-example/dialogs-example.component';
import { DialogsExampleComponent } from '../../../src/app/organisms/dialogs-example/dialogs-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Dialogs',
  component: DialogsExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-dialogs></sp-dialogs>
        <sp-button text="Open Dialog" type="primary" (click)="createModal()">
        </sp-button>`
      }
    }
  }
} as Meta;

const Template: Story<DialogsExampleComponent> = (args: DialogsExampleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
