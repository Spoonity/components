import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ElevationComponent } from '../../../sp-components/src/app/Components/Atoms/elevation/elevation.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Atoms/Elevation',
  component: ElevationComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<div class="sp-elevation--1"></div>`
      }
    }
  }
} as Meta;

const Template: Story<ElevationComponent> = (args: ElevationComponent) => ({
  props: args,
});

export const Elevation = Template.bind({});
Elevation.args = {

};
