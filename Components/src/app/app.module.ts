import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
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
import { BannerComponent } from './Components/banner/banner.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MoleculesComponent,
    AtomsComponent,
    OrganismsComponent,
    ChipComponent,
    ButtonComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
