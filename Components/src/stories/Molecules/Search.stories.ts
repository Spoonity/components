import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { SearchComponent } from '../../../sp-components/src/app/Components/Molecules/search/search.component';
import { SearchStoryExampleComponent } from '../../../src/app/molecules/search-story-example/search-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Search',
  component: SearchStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-search [size]="size"
                placeholder="Search fruits or vegetables"
                [(ngModel)]="SearchModel"
                [selectedItems]="SelectedItems"
                (filter)="filter(filterSize)"
                (itemSelected)="ItemSelected($event)"
                (itemRemoved)="ItemRemoved($event)">
          <sp-search-option [value]="f" *ngFor="let f of FilteredList">
              <span>{{f.name}} - </span>
              <span class="light"><em>{{f.type}} </em></span>
              <span class="light">(color: {{f.color}})</span>
          </sp-search-option>
        </sp-search>`
      }
    }
  }
} as Meta;

const Template: Story<SearchStoryExampleComponent> = (args: SearchStoryExampleComponent) => ({
  props: args,
});

export const Large = Template.bind({});
Large.args = {
 size: 'large',
 filterSize: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
 size: 'medium',
 filterSize: 'medium'
};

export const Small = Template.bind({});
Small.args = {
 size: 'small',
 filterSize: 'small'
};

export const NoDropdown = Template.bind({});
NoDropdown.args = {
 size: 'medium',
 filterSize: 'noDropdown'
};
