import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NZMODULES } from './NgZorroComponents';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChipComponent } from './Components/Molecules/chip/chip.component';
import { ButtonComponent } from './Components/Molecules/button/button.component';
import { TextFieldComponent } from './Components/Molecules/text-field/text-field.component';
import { BannerComponent } from './Components/Molecules/banner/banner.component';
import { DropdownComponent } from './Components/Molecules/dropdown/dropdown.component';
import { OptionComponent } from './Components/Molecules/dropdown/option/option.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayTemplateComponent } from './Components/shared/overlay-template/overlay-template.component';
import { SideNavigationComponent } from './Components/Molecules/side-navigation/side-navigation.component';
import { SearchComponent } from './Components/Molecules/search/search.component';
import { SearchTemplateComponent } from './Components/Molecules/search/search-template/search-template.component';
import { SearchOptionComponent } from './Components/Molecules/search/search-option/search-option.component';
import { StepsComponent } from './Components/Molecules/steps/steps.component';
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
import { ChartsModule, ThemeService } from 'ng2-charts';
import { DialogsComponent } from './Components/Organisms/dialogs/dialogs.component';
import { SidebarComponent } from './Components/Organisms/sidebar/sidebar.component';
import { TableComponent } from './Components/Organisms/table/table.component';
import { UploadComponent } from './Components/Organisms/upload/upload.component';
import { HeaderComponent } from './Components/Organisms/header/header.component';
import { CardComponent } from './Components/Organisms/card/card.component';
import { RouterModule } from '@angular/router';
import { SpComponentsComponent } from './sp-component/sp-components.component';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { DatePickerComponent } from './Components/Molecules/date-picker/date-picker.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    SpComponentsComponent,
    ChipComponent,
    ButtonComponent,
    TextFieldComponent,
    BannerComponent,
    SideNavigationComponent,
    StepsComponent,
    DropdownComponent,
    OptionComponent,
    OverlayTemplateComponent,
    SidebarComponent,
    SearchComponent,
    SearchTemplateComponent,
    SearchOptionComponent,
    BackNavigationComponent,
    BreadcrumbComponent,
    SnackbarComponent,
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
    TableComponent,
    UploadComponent,
    HeaderComponent,
    CardComponent,
    DatePickerComponent
  ],
  exports: [
    SpComponentsComponent,
    ChipComponent,
    ButtonComponent,
    TextFieldComponent,
    BannerComponent,
    SideNavigationComponent,
    StepsComponent,
    DropdownComponent,
    OptionComponent,
    OverlayTemplateComponent,
    SidebarComponent,
    SearchComponent,
    SearchTemplateComponent,
    SearchOptionComponent,
    BackNavigationComponent,
    BreadcrumbComponent,
    SnackbarComponent,
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
    TableComponent,
    UploadComponent,
    HeaderComponent,
    CardComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    ReactiveFormsModule,
    PortalModule,
    OverlayModule,
    ...NZMODULES,
  ],
   providers: [{ provide: NZ_I18N, useValue: en_US}, ThemeService],

})
export class SpComponentsModule { }
