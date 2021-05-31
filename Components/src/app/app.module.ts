import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { SpComponentsModule } from 'sp-components/public_api';
import { AtomsComponent } from './atoms/atoms.component';
import { OrganismsComponent } from './organisms/organisms.component';
import { MoleculesComponent } from './molecules/molecules.component';

import { TextFieldExampleComponent } from './molecules/text-field-example/text-field-example.component';
import { MenuExampleComponent } from './molecules/menu-example/menu-example.component';
import { SearchExampleComponent } from './molecules/search-example/search-example.component';
import { DropdownExampleComponent } from './molecules/dropdown-example/dropdown-example.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuService, NzSubmenuService, } from 'ng-zorro-antd/menu';
import { DatePickerExampleComponent } from './molecules/date-picker-example/date-picker-example.component';
import { DialogsExampleComponent } from './organisms/dialogs-example/dialogs-example.component';
import { UploadExampleComponent } from './organisms/upload-example/upload-example.component';
import { SnackBarExampleComponent } from './molecules/snack-bar-example/snack-bar-example.component';
import { MenuStoryExampleComponent } from './molecules/menu-story-example/menu-story-example.component';
import { SearchStoryExampleComponent } from './molecules/search-story-example/search-story-example.component';
import { TextFieldStoryExampleComponent } from './molecules/text-field-story-example/text-field-story-example.component';
import { DropdownStoryExampleComponent } from './molecules/dropdown-story-example/dropdown-story-example.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AtomsComponent,
    OrganismsComponent,
    MoleculesComponent,
    TextFieldExampleComponent,
    MenuExampleComponent,
    SearchExampleComponent,
    DropdownExampleComponent,
    DatePickerExampleComponent,
    DropdownStoryExampleComponent,
    DialogsExampleComponent,
    UploadExampleComponent,
    SnackBarExampleComponent,
    MenuStoryExampleComponent,
    SearchStoryExampleComponent,
    TextFieldStoryExampleComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NzLayoutModule,
    SpComponentsModule

  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
