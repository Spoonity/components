import { Story, Meta } from '@storybook/angular/types-6-0';
import { SliderComponent } from '../../../sp-components/src/app/Components/Atoms/slider/slider.component';

export default {
  title: 'Atoms/Slider',
  component: SliderComponent
} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    max: 100,
    disable: false,
    step: 10,
    start: 0
};
export const Disable = Template.bind({});
Disable.args = {
    max: 100,
    disable: true,
    step: 10,
    start: 50
};