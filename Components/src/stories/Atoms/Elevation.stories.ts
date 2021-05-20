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
        code: `
        <div class="elevation-container">
                <p>01 dp</p>
                <div class="sp-elevation--1 elevation-box"></div>
            </div>
            <div class="elevation-container">
                <p>02 dp</p>
                <div class="sp-elevation--2 elevation-box"></div>
            </div>
            <div class="elevation-container">
                <p>06 dp</p>
                <div class="sp-elevation--3 elevation-box"></div>
            </div>
            <div class="elevation-container">
                <p>08 dp</p>
                <div class="sp-elevation--4 elevation-box"></div>
            </div>
            <div class="elevation-container">
                <p>12 dp</p>
                <div class="sp-elevation--5 elevation-box"></div>
            </div>
            <div class="elevation-container">
                <p>24 dp</p>
                <div class="sp-elevation--6 elevation-box"></div>
            </div>
        </div>`
      }
    }
  }
} as Meta;

const Template: Story<ElevationComponent> = (args: ElevationComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {

};
