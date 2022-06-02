import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StepsComponent } from '../../../sp-components/src/app/Components/Molecules/steps/steps.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Steps',
  component: StepsComponent,
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' }
    },
    current: {
      table: {
        disable: true
      }
    },
    navigation: {
      table: {
        disable: true
      }
    },
    ngOnInit: {
      table: {
        disable: true
      }
    },
    onIndexChange: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<spt-steps [current]="current" [steps]="steps" [type]="'type'"
        (onIndexChangeEvent)="onIndexChange($event)" [direction]="direction"></spt-steps>`
      }
    }
  }
} as Meta;

const Template: Story<StepsComponent> = (args: StepsComponent) => ({
  props: args,
});

const stepsList = [
  { title: 'Step 1', description: '' },
  { title: 'Step 2', description: '' },
  { title: 'Step 3', description: '' },
  { title: 'Step 4', description: '' },
  { title: 'Step 5', description: '' }
];

export const Steps = Template.bind({});
Steps.args = {
  current: 0,
  steps: stepsList,
  type: 'navigation',
  direction: 'horizontal',
  preventFutureSteps: true
};
