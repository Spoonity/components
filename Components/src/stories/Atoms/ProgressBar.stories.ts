import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProgressBarComponent } from '../../../sp-components/src/app/Components/Atoms/progress-bar/progress-bar.component';

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBarComponent
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  props: args,
});

export const Line = Template.bind({});
Line.args = {
    percent: 50,
    info: false,
    type: 'line'
};
export const Circle = Template.bind({});
Circle.args = {
    percent: 50,
    info: false,
    type: 'circle'
};
export const Info = Template.bind({});
Info.args = {
    percent: 50,
    info: true,
    type: 'line'
};