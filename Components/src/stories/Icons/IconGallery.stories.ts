import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {AppModule} from '../../app/app.module';
import {IconGalleryComponent} from '../../app/atoms/icon-gallery/icon-gallery.component';
import {SpComponentsModule} from '../../../sp-components/dist';

export default {
  title: 'Icon Gallery',
  component: IconGalleryComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
      declarations: []
    }),
  ],
  parameters: {}
} as Meta;

const Template: Story<IconGalleryComponent> = (args: IconGalleryComponent) => ({
  props: args,
});


export const IconGallery = Template.bind({});
IconGallery.args = {};
