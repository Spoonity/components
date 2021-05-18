import { Story, Meta } from '@storybook/angular/types-6-0';
import { BannerComponent } from '../../../sp-components/src/app/Components/Molecules/banner/banner.component';

export default {
  title: 'Molecules/Banner',
  component: BannerComponent
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
});

const banners = [
  { id: 0, message: 'Error', type: 'error' },
  { id: 1, message: 'Warning', type: 'warning' },
  { id: 2, message: 'Success', type: 'success' },
  { id: 3, message: 'Informational', type: 'info' }
];

export const Default = Template.bind({});
Default.args = {
  BannerList: banners,
};
