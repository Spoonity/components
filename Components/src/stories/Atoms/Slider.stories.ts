import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SliderComponent } from '../../../sp-components/src/app/Components/Atoms/slider/slider.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
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
