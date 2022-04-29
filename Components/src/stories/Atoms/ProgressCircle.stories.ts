import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProgressCircleComponent, SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/ProgressCircle',
  component: ProgressCircleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    color: { control: 'color' }
  },
  parameters: {
    docs: {
      source: {
        code: `<spt-progress-circle [percent]="percent" [showPercent]="true" [color]="color" [width]="45" [strokeWidth]="9"></spt-progress-circle>`
      }
    }
  }
} as Meta;

const Template: Story<ProgressCircleComponent> = (args: ProgressCircleComponent) => ({
  props: args,
});

export const ProgressCircle = Template.bind({});
ProgressCircle.args = {
  percent: 50,
  showPercent: true,
  color: '#FF9900',
  width: 45,
  strokeWidth: 9
};
