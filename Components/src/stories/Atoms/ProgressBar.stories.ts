import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProgressBarComponent } from '../../../sp-components/src/app/Components/Atoms/progress-bar/progress-bar.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Progress Bar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<spt-progress-bar [percent]="percent" [info]="info"></spt-progress-bar>`
      }
    }
  }
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const ProgressBar = Template.bind({});
ProgressBar.args = {
    percent: 50,
    info: false
};
