import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { HeaderComponent } from '../../../sp-components/src/app/Components/Organisms/header/header.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'Content',
  backTitle: '',
  breadcrumbs: null,
  btnTitle: null,
  search: false,
};

export const WithBack = Template.bind({});
WithBack.args = {
  title: 'Content',
  backTitle: 'Back',
  breadcrumbs: null,
  btnTitle: null,
  search: false,
};

export const WithBreadcrumb = Template.bind({});
WithBreadcrumb.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: 'Title',
  btnTitle: null,
  search: false,
};
export const DefaultPlusButton = Template.bind({});
DefaultPlusButton.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: null,
  btnTitle: 'Button',
  search: false,
};

export const WithBackPlusButton = Template.bind({});
WithBackPlusButton.args = {
  title: 'Content',
  backTitle: 'Back',
  breadcrumbs: null,
  btnTitle: 'Button',
  search: false,
};

export const WithBreadcrumbPlusButton = Template.bind({});
WithBreadcrumbPlusButton.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: 'Title',
  btnTitle: 'Button',
  search: false,
};

export const DefaultPlusButtonPlusSearch = Template.bind({});
DefaultPlusButtonPlusSearch.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: null,
  btnTitle: 'Button',
  search: true,
};

export const WithBackPlusButtonPlusSearch = Template.bind({});
WithBackPlusButtonPlusSearch.args = {
  title: 'Content',
  backTitle: 'Back',
  breadcrumbs: null,
  btnTitle: 'Button',
  search: true,
};

export const WithBreadcrumbPlusButtonPlusSearch = Template.bind({});
WithBreadcrumbPlusButtonPlusSearch.args = {
  title: 'Content',
  backTitle: null,
  breadcrumbs: 'Title',
  btnTitle: 'Button',
  search: true,
};
