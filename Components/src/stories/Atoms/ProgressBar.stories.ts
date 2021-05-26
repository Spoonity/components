import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProgressBarComponent } from '../../../sp-components/src/app/Components/Atoms/progress-bar/progress-bar.component';
import { SpComponentsModule } from 'sp-components/public_api';
import { ProgressType } from 'sp-components/src/app/utils/enums';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-progress-bar [percent]="percent" [info]="info" [type]="type"></sp-progress-bar>`
      }
    }
  }
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const Line = Template.bind({});
Line.args = {
    percent: 50,
    info: false,
    type: ProgressType.line
};
export const Circle = Template.bind({});
Circle.args = {
    percent: 50,
    info: false,
    type: ProgressType.circle
};
export const Info = Template.bind({});
Info.args = {
    percent: 50,
    info: true,
    type: ProgressType.line
};
