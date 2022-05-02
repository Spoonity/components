import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BackNavigationComponent } from '../../../sp-components/src/app/Components/Molecules/back-navigation/back-navigation.component';
import { SpComponentsModule } from 'sp-components/public_api';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Molecules/Back Navigation',
  component: BackNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule, RouterModule.forRoot([], { useHash: true })],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '#',
        }
      ]
    })
  ],
  parameters: {
    docs: {
      source: {
        code: `<sp-back-navigation [title]="title" [subTitle]="subTitle"></sp-back-navigation>`
      }
    }
  }
} as Meta;

const Template: Story<BackNavigationComponent> = (args: BackNavigationComponent) => ({
  props: args,
});

export const BackNavigation = Template.bind({});
BackNavigation.args = {};
