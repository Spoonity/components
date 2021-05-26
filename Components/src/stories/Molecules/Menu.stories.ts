import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuComponent } from '../../../sp-components/src/app/Components/Molecules/menu/menu.component';
import { MenuStoryExampleComponent } from '../../../src/app/molecules/menu-story-example/menu-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Menu',
  component: MenuStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `
        <sp-button text="menu" [spMenuTrigger]="menu"></sp-button>
        <sp-menu #menu [multiple]="multiple" [search]="search"
          [(selectedItems)]="selectedItems"
          [(searchModel)]="searchModel"
          [selectAllOption]="selectAllOption"
          (searchModelChange)="filter()"
          (toggleSelectAll)="toggleSelectAll($event)">
          <sp-menu-item [startIcon]="iconName" *ngFor="let f of filteredMenuItems" (click)="actionSelected(f.text, 3)">{{f.text}}</sp-menu-item>
        </sp-menu>`
      }
    }
  }
} as Meta;

const Template: Story<MenuStoryExampleComponent> = (args: MenuStoryExampleComponent) => ({
  props: args,
});


export const SingleSelection = Template.bind({});
SingleSelection.args = {
  // multiple: false,
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const SingleSelectionWithIcon = Template.bind({});
SingleSelectionWithIcon.args = {
  iconName: 'favorite'
  // multiple: false,
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const SingleSelectionWithSearch = Template.bind({});
SingleSelectionWithSearch.args = {
  search: true
  // multiple: false,
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const SingleSelectionWithSearchAndIcon = Template.bind({});
SingleSelectionWithSearchAndIcon.args = {
  iconName: 'favorite',
  search: true
  // multiple: false,
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  multiple: true
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};


export const MultipleSelectionWithIcon = Template.bind({});
MultipleSelectionWithIcon.args = {
  iconName: 'favorite',
  multiple: true
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const MultipleSelectionWithSearchAndIcon = Template.bind({});
MultipleSelectionWithSearchAndIcon.args = {
  iconName: 'favorite',
  search: true,
  multiple: true
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

export const MultipleSelectionWithSearchAndSelectAll = Template.bind({});
MultipleSelectionWithSearchAndSelectAll.args = {
  search: true,
  multiple: true,
  selectAllOption: true
  // closeOnItemClick: true,
  // search: false,
  // selectAllOption: false,
  // searchModel: 'Example',
  // selectedItems: []
};

