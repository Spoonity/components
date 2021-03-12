import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MoleculesComponent } from './molecules/molecules.component';
import { AtomsComponent } from './atoms/atoms.component';
import { AppRoutingModule } from './app-routing.module';
import { OrganismsComponent } from './organisms/organisms.component';
import { ChipComponent } from './Components/chip/chip.component';
import { ButtonComponent } from './Components/button/button.component';
import { TextFieldComponent } from './Components/text-field/text-field.component';
import { TextFieldExampleComponent } from './molecules/text-field-example/text-field-example.component';
import { BannerComponent } from './Components/banner/banner.component';
import { DropdownExampleComponent } from './molecules/dropdown-example/dropdown-example.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { OptionComponent } from './Components/dropdown/option/option.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownTemplateComponent } from './Components/dropdown/dropdown-template/dropdown-template.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MoleculesComponent,
    AtomsComponent,
    OrganismsComponent,
    ChipComponent,
    ButtonComponent,
    TextFieldComponent,
    TextFieldExampleComponent,
    BannerComponent,
    DropdownExampleComponent,
    DropdownComponent,
    OptionComponent,
    DropdownTemplateComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    OverlayModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
