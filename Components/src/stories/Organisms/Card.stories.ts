import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from '../../../sp-components/src/app/Components/Organisms/card/card.component';

export default {
  title: 'Organisms/Card',
  component: CardComponent
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Campaign = Template.bind({});
Campaign.args = {
  campaign: {},
  customer: null,
  giftManagement: null,

  option: () => {},
  cancel: () => {},
  goToGuest: () => {}
};

export const Customer = Template.bind({});
Customer.args = {
  campaign: null,
  customer: {},
  giftManagement: null,

  option: () => {},
  cancel: () => {},
  goToGuest: () => {}
};

export const GiftManagement = Template.bind({});
GiftManagement.args = {
  campaign: null,
  customer: null,
  giftManagement: {},

  option: () => {},
  cancel: () => {},
  goToGuest: () => {}
};
