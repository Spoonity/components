import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { UploadComponent } from '../../../sp-components/src/app/Components/Organisms/upload/upload.component';
import { UploadExampleComponent } from '../../../src/app/organisms/upload-example/upload-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Upload',
  component: UploadExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-upload></sp-upload>
        <sp-button type="Upload File" type="primary" (click)="createModalU()">
        </sp-button>`
      }
    }
  }
} as Meta;

const Template: Story<UploadExampleComponent> = (args: UploadExampleComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
