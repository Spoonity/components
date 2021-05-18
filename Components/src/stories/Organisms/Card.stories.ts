import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from '../../../sp-components/src/app/Components/Organisms/card/card.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});


const campaignData = {
  type: 'campaign',
  title: 'Sales',
  targetGroup: 'Elders',
  plataform: 'sms',
  dateCreated: '04/04/20',
  isSend: true,
  sendCount: 10,
  openCount: 6,
  visitCount: 4,
  spendCount: 40
};

const customersData = {
  type: 'customer',
  name: 'Andres Mann',
  dateCreated: '01/11/20',
  isSelect: false,
  email: 'alexmann@gmail.com',
  phone: '(123) 456-7890'
};

const giftManagementsData = {
  type: 'giftManagement',
  id: '12126',
  name: 'Andres Mann',
  dateCreated: '01/11/20',
  deliverProcess: 'pending',
  email: 'alexmann@gmail.com',
  phone: '(123) 456-7890'
};

export const Campaign = Template.bind({});
Campaign.args = {
  campaign: campaignData,
  customer: null,
  giftManagement: null,

  // option: () => {
  //   alert("options");
  // },
};

export const Customer = Template.bind({});
Customer.args = {
  campaign: null,
  customer: customersData,
  giftManagement: null,

};

export const GiftManagement = Template.bind({});
GiftManagement.args = {
  campaign: null,
  customer: null,
  giftManagement: giftManagementsData,

  // cancel: () => {
  //   alert("Cancel");
  // },
  // goToGuest: () => {
  //   alert("Going to guest");
  // }
};
