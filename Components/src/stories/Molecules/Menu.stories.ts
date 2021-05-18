import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuComponent } from '../../../sp-components/src/app/Components/Molecules/menu/menu.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: args,
});


export const Default = Template.bind({});
Default.args = {
  multiple: false,
  closeOnItemClick: true,
  search: false,
  selectAllOption: false,
  searchModel: 'Example',
  selectedItems: []
};
