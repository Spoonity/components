import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuStoryExampleComponent } from '../../app/molecules/menu-story-example/menu-story-example.component';
import { SpComponentsModule } from 'sp-components/public_api';

export default {
  title: 'Molecules/Menu',
  component: MenuStoryExampleComponent,
  decorators: [
    moduleMetadata({
      imports: [SpComponentsModule],
    }),
  ],
  argTypes: {
    multiple: {
      table: {
        disable: true
      }
    },
    selectAllOption: {
      table: {
        disable: true
      }
    },
    closeOnItemClick: {
      table: {
        disable: true
      }
    },
    iconName: {
      table: {
        disable: true
      }
    },
    menuItems: {
      table: {
        disable: true
      }
    },
    selectedItems: {
      table: {
        disable: true
      }
    },
    actionText: {
      table: {
        disable: true
      }
    },
    filteredMenuItems: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    searchModel: {
      table: {
        disable: true
      }
    },
    _addSelectedItems: {
      table: {
        disable: true
      }
    },
    _filter: {
      table: {
        disable: true
      }
    },
    actionSelected: {
      table: {
        disable: true
      }
    },
    filter: {
      table: {
        disable: true
      }
    },
    ngOnInit: {
      table: {
        disable: true
      }
    },
    toggleSelectAll: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <sp-button text="MENU" [spMenuTrigger]="menu"></sp-button>
        <spt-menu #menu multiple="true" [search]="search"
          [(selectedItems)]="selectedItems"
          [(searchModel)]="searchModel"
          [selectAllOption]="selectAllOption"
          (searchModelChange)="filter()"
          (toggleSelectAll)="toggleSelectAll($event)">
          <spt-menu-item [itemId]="f" startIcon="favorite" *ngFor="let f of filteredMenuItems" (click)="actionSelected(f.text, 3)">{{f.text}}</spt-menu-item>
        </spt-menu>`
      }
    }
  }
} as Meta;

const Template: Story<MenuStoryExampleComponent> = (args: MenuStoryExampleComponent) => ({
  props: args,
});


export const Single = Template.bind({});
Single.args = {
  multiple: false,
  search: false,
  selectAllOption: false,
  searchModel: 'Example',
  selectedItems: []
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  search: false,
  selectAllOption: false,
  searchModel: 'Example',
  selectedItems: []
};
