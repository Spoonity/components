import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormsModule } from '@angular/forms';
import { SearchStoryExampleComponent } from '../../../src/app/molecules/search-story-example/search-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Search',
  component: SearchStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule, FormsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <spt-search [size]="size"
                placeholder="Search fruits or vegetables"
                [(ngModel)]="SearchModel"
                [selectedItems]="SelectedItems"
                (filter)="filter()"
                (itemSelected)="ItemSelected($event)"
                (itemRemoved)="ItemRemoved($event)">
          <spt-search-option [value]="f" *ngFor="let f of FilteredList">
              <span>{{f.name}} - </span>
              <span class="light"><em>{{f.type}} </em></span>
              <span class="light">(color: {{f.color}})</span>
          </spt-search-option>
        </spt-search>`
      }
    }
  }
} as Meta;

const Template: Story<SearchStoryExampleComponent> = (args: SearchStoryExampleComponent) => ({
  props: args,
});

export const Search = Template.bind({});
Search.args = {
 size: 'medium'
};
