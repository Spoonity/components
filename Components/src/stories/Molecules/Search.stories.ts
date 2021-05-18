import { Story, Meta } from '@storybook/angular/types-6-0';
import { BannerComponent } from '../../../sp-components/src/app/Components/Molecules/banner/banner.component';

export default {
  title: 'Molecules/Search',
  component: BannerComponent
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
});

const items = [
  {id: 0, name: 'banana', color: 'yellow', type: 'fruit'},
  {id: 1, name: 'apple', color: 'red', type: 'fruit'},
  {id: 2, name: 'orange', color: 'orange', type: 'fruit'},
  {id: 3, name: 'strawberry', color: 'pink', type: 'fruit'},
  {id: 4, name: 'blueberry', color: 'blue', type: 'fruit'},
  {id: 5, name: 'kale', color: 'green', type: 'vegetable'},
  {id: 6, name: 'carrot', color: 'orange', type: 'vegetable'},
  {id: 7, name: 'broccoli', color: 'green', type: 'vegetable'},
  {id: 8, name: 'spinach', color: 'green', type: 'vegetable'},
  {id: 9, name: 'asparagus', color: 'green', type: 'vegetable'},
];

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search fruits or vegetables',
  selectedItems:  items,
  maximumSelection: null
};
