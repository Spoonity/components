import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SidebarComponent } from '../../../sp-components/src/app/Components/Organisms/sidebar/sidebar.component';
import { SpComponentsModule } from 'sp-components/public_api';
import { appHomeIcon } from 'sp-components/src/app/svg/Action/home';
import { appPeopleIcon } from 'sp-components/src/app/svg/Social/people';
import { appPlaceIcon } from 'sp-components/src/app/svg/Maps/place';
import { appRedeemIcon } from 'sp-components/src/app/svg/Action/redeem';
import { appRecentActorsIcon } from 'sp-components/src/app/svg/AV/recent_actors';
import { appSettingsIcon } from 'sp-components/src/app/svg/Action/settings';
import { appSendIcon } from 'sp-components/src/app/svg/Content/send';

export default {
  title: 'Organisms/SideBar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

const user = {
  name: 'Alex Orekhvo',
  id: '12126',
  email: 'alexorekhvo1998@gmail.com',
  title: 'Brandins Breakfast',
  company: 'Bonanza'
};

const users = [
  {
    name: 'Alex Orekhvo',
    id: '12126',
    email: 'alexorekhvo1998@gmail.com',
    title: 'Brandins Breakfast',
    company: 'Bonanza'
  },
  {
    name: 'Emilia Mann',
    id: '20201',
    email: 'emiliamann@gmail.com',
    title: 'Brandins Dinner',
    company: 'Partner'
  },
  {
    name: 'Bruno Martinez',
    id: '30302',
    email: 'brunomartinez@gmail.com',
    title: 'Brandins Lunch',
    company: 'Partner'
  }
];

const options = [
  { title: 'Home', icon: appHomeIcon, isActive: true },
  { title: 'Customers', icon: appPeopleIcon, isActive: false },
  { title: 'EGift Management', icon: appRedeemIcon, isActive: false },
  { title: 'Locations', icon: appPlaceIcon, isActive: false },
  { title: 'Users', icon: appRecentActorsIcon, isActive: false },
  { title: 'Setup', icon: appSettingsIcon, isActive: false },
  { title: 'Campaigns', icon: appSendIcon, isActive: false }
];

export const Default = Template.bind({});
Default.args = {
  sidebarData: user,
  optionsData: options,
};

export const MultiAccount = Template.bind({});
MultiAccount.args = {
  sidebarData: users,
  optionsData: options,
};
