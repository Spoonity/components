import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppRoutingModule } from './app-routing.module';
import { SpComponentsModule } from "sp-components/public_api";
import { AtomsComponent } from './atoms/atoms.component';
import { OrganismsComponent } from './organisms/organisms.component';
import { MoleculesComponent } from './molecules/molecules.component';

import { TextFieldExampleComponent } from './molecules/text-field-example/text-field-example.component';
import { MenuExampleComponent } from './molecules/menu-example/menu-example.component';
import { SearchExampleComponent } from './molecules/search-example/search-example.component';
import { DropdownExampleComponent } from './molecules/dropdown-example/dropdown-example.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuService, NzSubmenuService, } from 'ng-zorro-antd/menu';


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
    DropdownExampleComponent
  ],
  imports: [
    BrowserModule,
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
