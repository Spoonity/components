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
import { ChipComponent } from './Components/Molecules/chip/chip.component';
import { ButtonComponent } from './Components/Molecules/button/button.component';
import { TextFieldComponent } from './Components/Molecules/text-field/text-field.component';
import { TextFieldExampleComponent } from './molecules/text-field-example/text-field-example.component';
import { BannerComponent } from './Components/Molecules/banner/banner.component';
import { DropdownExampleComponent } from './molecules/dropdown-example/dropdown-example.component';
import { DropdownComponent } from './Components/Molecules/dropdown/dropdown.component';
import { OptionComponent } from './Components/Molecules/dropdown/option/option.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayTemplateComponent } from './Components/shared/overlay-template/overlay-template.component';
import { SideNavigationComponent } from './Components/Molecules/side-navigation/side-navigation.component';
import { SearchComponent } from './Components/Molecules/search/search.component';
import { SearchExampleComponent } from './molecules/search-example/search-example.component';
import { SearchTemplateComponent } from './Components/Molecules/search/search-template/search-template.component';
import { SearchOptionComponent } from './Components/Molecules/search/search-option/search-option.component';
import { StepsComponent } from './Components/Molecules/steps/steps.component';
import { MenuExampleComponent } from './molecules/menu-example/menu-example.component';
import { MenuComponent } from './Components/Molecules/menu/menu.component';
import { MenuTriggerDirective } from './Components/Molecules/menu/menu-trigger.directive';
import { MenuItemComponent } from './Components/Molecules/menu/menu-item/menu-item.component';
import { BackNavigationComponent } from './Components/Molecules/back-navigation/back-navigation.component';
import { BreadcrumbComponent } from './Components/Molecules/breadcrumb/breadcrumb.component';
import { SnackbarComponent } from './Components/Molecules/snackbar/snackbar.component';
import { AvatarComponent } from './Components/Atoms/avatar/avatar.component';
import { BadgeComponent } from './Components/Atoms/badge/badge.component';
import { DividerComponent } from './Components/Atoms/divider/divider.component';
import { ProgressBarComponent } from './Components/Atoms/progress-bar/progress-bar.component';
import { CheckboxComponent } from './Components/Atoms/checkbox/checkbox.component';
import { RadioButtonComponent } from './Components/Atoms/radio-button/radio-button.component';
import { SwitchComponent } from './Components/Atoms/switch/switch.component';
import { SliderComponent } from './Components/Atoms/slider/slider.component';
import { TabComponent } from './Components/Atoms/tab/tab.component';
import { TooltipComponent } from './Components/Atoms/tooltip/tooltip.component';
import { ElevationComponent } from './Components/Atoms/elevation/elevation.component';
import { SpacingComponent } from './Components/Atoms/spacing/spacing.component';
import { IconComponent } from './Components/Atoms/icon/icon.component';
import { DataVisualizationComponent } from './Components/Organisms/data-visualization/data-visualization.component';
import { ChartComponent } from './Components/Organisms/chart/chart.component';
import { ChartsModule,ThemeService} from 'ng2-charts';
import { DialogsComponent } from './Components/Organisms/dialogs/dialogs.component';
import { SidebarComponent } from './Components/Organisms/sidebar/sidebar.component';
import { TableComponent } from './Components/Organisms/table/table.component';
import { UploadComponent } from './Components/Organisms/upload/upload.component';
import { HeaderComponent } from './Components/Organisms/header/header.component';
import { CardComponent } from './Components/Organisms/card/card.component';

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
    SideNavigationComponent,
    StepsComponent,
    DropdownExampleComponent,
    DropdownComponent,
    OptionComponent,
    OverlayTemplateComponent,
    SideNavigationComponent,
    SearchComponent,
    SearchExampleComponent,
    SearchTemplateComponent,
    SearchOptionComponent,
    BackNavigationComponent,
    BreadcrumbComponent,
    SnackbarComponent,
    MenuExampleComponent,
    MenuComponent,
    MenuTriggerDirective,
    MenuItemComponent,
    AvatarComponent,
    BadgeComponent,
    DividerComponent,
    ProgressBarComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SwitchComponent,
    SliderComponent,
    TabComponent,
    TooltipComponent,
    ElevationComponent,
    SpacingComponent,
    IconComponent,
    DataVisualizationComponent,
    ChartComponent,
    DialogsComponent,
    SidebarComponent,
    TableComponent,
    UploadComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    OverlayModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US},ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
