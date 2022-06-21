import { EventEmitter, Component, Input, Output, Directive, Renderer2, ViewChild, forwardRef, HostListener, Injectable, HostBinding, ContentChildren, TemplateRef, ViewContainerRef, ViewEncapsulation, NgModule } from '@angular/core';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule, NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule, NzContextMenuServiceModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Location, registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { SvgIconRegistryService, AngularSvgIconModule } from 'angular-svg-icon';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { differenceInCalendarDays } from 'date-fns';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';

const NZMODULES = [
    NzAffixModule,
    NzAlertModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDividerModule,
    NzDropDownModule,
    NzContextMenuServiceModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzProgressModule,
    NzRadioModule,
    NzSelectModule,
    NzSliderModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzUploadModule,
    NzMessageModule,
];

class ChipComponent {
    constructor() {
        /* chip mode*/
        this.mode = 'default';
        /* emit action if the close button is clicked */
        this.onCloseEvent = new EventEmitter();
        /* emit action if the chip is checked */
        this.onCheckEvent = new EventEmitter();
    }
    ngOnInit() {
        this.styles = { 'width.px': 20, 'height.px': 20, fill: '#0D0C0B' };
    }
    onClose() {
        this.onCloseEvent.emit(true);
    }
    checkChange(e) {
        this.checked = e;
        this.onCheckEvent.emit(e);
    }
}
ChipComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-chip',
                template: "<nz-tag\n  [nzMode]=\"mode\"\n  [nzChecked]=\"checked\"\n  [nzColor]=\"color\"\n  (nzOnClose)=\"onClose()\"\n  (nzCheckedChange)=\"checkChange($event)\"\n  [attr.disabled]=\"disabled\"\n>\n  <svg-icon\n    *ngIf=\"icon || checked\"\n    nz-icon\n    [name]=\"checked ? 'check' : icon\"\n    [svgStyle]=\"styles\"\n  ></svg-icon>\n  <span class=\"spt-spacing-x--1\">{{ text }}</span>\n</nz-tag>\n",
                styles: [".ant-tag{height:32px!important;line-height:32px!important;font-size:14px}"]
            },] }
];
ChipComponent.ctorParameters = () => [];
ChipComponent.propDecorators = {
    text: [{ type: Input }],
    color: [{ type: Input }],
    icon: [{ type: Input }],
    mode: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    onCloseEvent: [{ type: Output }],
    onCheckEvent: [{ type: Output }]
};

class ButtonComponent {
    constructor() {
        /* button type (default: primary) */
        this.type = 'primary';
        /* button size (default: medium) */
        this.size = 'medium';
    }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-button',
                template: "<button nz-button nzNoAnimation [disabled]=\"disabled\"\n        [nzType]=\"type === 'secondary' ? 'default' : (type == 'inverted' ? 'primary' : type)\"\n        [ngClass]=\"{\n          'ant-btn-secondary': type == 'default' || type == 'secondary',\n          'ant-btn-tertiary': type == 'link',\n          'with-text': text != null,\n          'button-sm': size === 'small',\n          'button-md': size === 'medium',\n          'button-lg': size == 'large'\n        }\"\n        [style.color]=\"type == 'inverted' ? '#FFFFFF' : '#0D0C0B'\"\n        [style.backgroundColor]=\"color\"\n        [style.borderColor]=\"type == 'inverted' ? '#FFFFFF' : color\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\" [color]=\"iconColor\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\" [color]=\"iconColor\"></spt-icon>\n</button>\n",
                styles: [".leftIcon{margin-left:10px}.rightIcon{margin-right:10px}.ant-btn[disabled]{background-color:transparent}.ant-btn[disabled] span{color:#b1b1b1!important}.button-sm{height:34px!important;padding-top:4px!important;padding-bottom:4px!important;box-shadow:none}.button-md{height:42px!important;padding-top:8px!important;padding-bottom:8px!important;box-shadow:none}.button-lg{height:50px!important;padding-top:12px!important;padding-bottom:12px!important;box-shadow:none}"]
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    type: [{ type: Input }],
    size: [{ type: Input }],
    leftIcon: [{ type: Input }],
    rightIcon: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    color: [{ type: Input }],
    iconColor: [{ type: Input }]
};

class FormFieldManager {
    constructor(_renderer) {
        this._renderer = _renderer;
        /* size specification (large or medium) -- default to medium if not provided */
        this.size = 'medium';
        /* value */
        this.value = null;
        /* ControlValueAccessor: onChange function **/
        this.onChange = () => { };
        /* ControlValueAccessor: onTouched function */
        this.onTouched = () => { };
    }
    ngOnChanges(changes) {
        if (changes.isDisabled) {
            this.setDisabledState(changes.isDisabled.currentValue);
        }
    }
    /**
     * ControlValueAccessor override: registerOnChange
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * ControlValueAccessor override: registerOnTouched
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * ControlValueAccessor override: writeValue
     */
    writeValue(obj) {
        if (obj !== undefined) {
            this.value = obj;
            this.checkDirty();
        }
    }
    /**
     * on change action
     */
    changeAction($event) {
        this.onChange($event);
        this.checkDirty();
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.textInput) {
            this._renderer.setProperty(this.textInput.nativeElement, 'disabled', isDisabled);
        }
    }
    /**
     * check dirty
     */
    checkDirty() {
        if (typeof this.value === 'string' || this.value instanceof String) {
            this.isDirty = this.value.trim() !== '';
        }
        else {
            this.isDirty = this.value != null;
        }
    }
}
FormFieldManager.decorators = [
    { type: Directive }
];
FormFieldManager.ctorParameters = () => [
    { type: Renderer2 }
];
FormFieldManager.propDecorators = {
    size: [{ type: Input }],
    label: [{ type: Input }],
    error: [{ type: Input }],
    startIcon: [{ type: Input }],
    endIcon: [{ type: Input }],
    hint: [{ type: Input }],
    placeholder: [{ type: Input }],
    isDisabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    readonly: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    textInput: [{ type: ViewChild, args: ['input',] }]
};

class TextFieldComponent extends FormFieldManager {
    constructor(_renderer) {
        super(_renderer);
        this.focus = new EventEmitter();
    }
    ngOnInit() {
    }
    /**
     * get current value length
     */
    getLength() {
        if (!this.value) {
            return 0;
        }
        return this.value.length;
    }
}
TextFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-text-field',
                template: "<div class=\"spt-input-container text-field-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input #input nz-input [ngClass]=\"{'dirty': isDirty,\n                                'error': !!error,\n                                'has-left-icon': !!startIcon,\n                                'has-right-icon': !!endIcon,\n                                'has-length': !!max,\n                                'disabled-state': isDisabled,\n                                'show-placeholder': !label\n                                }\"\n           (click)=\"isDisabled ? $event.stopPropagation() : null\"\n           (focus)=\"focus.emit()\"\n           [(ngModel)]=\"value\"\n           (ngModelChange)=\"changeAction($event)\"\n           [attr.type]=\"type\"\n           [attr.step]=\"step\"\n           [attr.min]=\"min\"\n           [attr.max]=\"max\"\n           [attr.maxlength]=\"maxlength\"\n           [class]=\"size\" placeholder=\"{{placeholder}}\"\n           [disabled]=\"isDisabled\"\n           [readonly]=\"isDisabled || readonly\"\n           [style.background-color]=\"backgroundColor\">\n\n    <!-- label -->\n    <label *ngIf=\"label\" class=\"text-field-label label\" [style.background-color]=\"backgroundColor\">{{ label }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- maxlength -->\n    <label class=\"text-field-bottom-label length-label\" *ngIf=\"maxlength\">{{getLength()}}/{{maxlength}}</label>\n\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!endIcon && !error\" class=\"text-field-icon right-icon\">\n        <svg-icon name=\"{{endIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n</div>\n\n\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TextFieldComponent),
                        multi: true
                    }
                ],
                styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
TextFieldComponent.ctorParameters = () => [
    { type: Renderer2 }
];
TextFieldComponent.propDecorators = {
    type: [{ type: Input }],
    step: [{ type: Input }],
    maxlength: [{ type: Input }],
    focus: [{ type: Output }]
};

class BannerComponent {
    constructor() {
        this.bannerList = [];
        this.closeCallback = new EventEmitter();
        /* icons by type */
        this.icon = {
            error: 'error',
            warning: 'warning',
            success: 'check-circle',
            info: 'priority-high'
        };
        /* close state for each banner */
        this.close = {};
    }
    /* handle close button */
    onCloseButtonClick(id) {
        this.close[id] = true;
        setTimeout(() => {
            this._removeBanner(id);
        }, 200);
    }
    /* remove banner */
    _removeBanner(id) {
        const remove = this.bannerList.filter((b) => b.id !== id);
        this.bannerList = [...remove];
    }
}
BannerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-banner',
                template: "<div *ngFor=\"let banner of bannerList\" class=\"spt-spacing-y--1\">\n    <div class=\"spt-elevation--6 banner-component banner-{{banner.type}}\" [ngClass]=\"{'banner-hide': close[banner.id]}\">\n        <div class=\"banner-icon\">\n            <svg-icon name=\"{{icon[banner.type]}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n        <div class=\"banner-message banner-message-action\">{{banner.message}}</div>\n        <div class=\"banner-close-action\" (click)=\"onCloseButtonClick(banner.id)\">\n            <nz-divider nzType=\"vertical\"></nz-divider>\n            <div class=\"banner-icon close-icon\">\n                <svg-icon name=\"clear\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".banner-component{min-height:48px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;left:16px;top:16px;border-radius:4px;padding:12px 16px;display:flex;align-items:center}.banner-component.banner-hide{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out}.banner-component.banner-error{background-color:#ef5350}.banner-component.banner-warning{background-color:#f7ad00}.banner-component.banner-info{background-color:#067bc2}.banner-component.banner-success{background-color:#4caf50}.banner-component .banner-message{color:#fff;padding-left:10px}.banner-component .banner-message.banner-message-action{padding-right:16px}.banner-component .banner-icon{height:24px}.banner-component .banner-icon svg path:last-child{fill:#fff}.banner-component .banner-close-action{margin-left:auto;display:flex;align-items:center;cursor:pointer}.banner-component .banner-close-action .ant-divider.ant-divider-vertical{height:24px!important;margin:0!important;background-color:hsla(0,0%,100%,.32);top:0}.banner-component .banner-close-action .close-icon{padding-left:16px}"]
            },] }
];
BannerComponent.propDecorators = {
    bannerList: [{ type: Input }],
    closeCallback: [{ type: Output }]
};

class OverlayTemplateComponent {
    constructor(overlay) {
        this.overlay = overlay;
        this.showing = false;
    }
    ngOnInit() {
    }
    show() {
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.contentTemplate);
        this.syncWidth();
        this.overlayRef.backdropClick().subscribe(() => this.hide());
        this.showing = true;
    }
    hide() {
        this.overlayRef.detach();
        this.showing = false;
    }
    onWinResize() {
        this.syncWidth();
    }
    visibilityChange() {
        if (document.hidden) {
            if (this.overlayRef) {
                this.hide();
            }
        }
    }
    onFocus() {
        if (this.overlayRef) {
            this.hide();
        }
    }
    syncWidth() {
        if (!this.overlayRef) {
            return;
        }
        const refRect = this.reference.getBoundingClientRect();
        this.overlayRef.updateSize({ width: refRect.width });
    }
    getOverlayConfig() {
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.reference)
            .withPush(false)
            .withPositions([{
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            }, {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            }]);
        return new OverlayConfig({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });
    }
}
OverlayTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-overlay-template',
                template: "<ng-template cdk-portal=\"\">\n    <ng-content></ng-content>\n</ng-template>\n"
            },] }
];
OverlayTemplateComponent.ctorParameters = () => [
    { type: Overlay }
];
OverlayTemplateComponent.propDecorators = {
    reference: [{ type: Input }],
    contentTemplate: [{ type: ViewChild, args: [CdkPortal, { static: true },] }],
    onWinResize: [{ type: HostListener, args: ['window:resize',] }],
    visibilityChange: [{ type: HostListener, args: ['document:visibilitychange',] }],
    onFocus: [{ type: HostListener, args: ['window:blur',] }]
};

class DropdownService {
    register(select) {
        this.select = select;
    }
    getSelect() {
        return this.select;
    }
}
DropdownService.decorators = [
    { type: Injectable }
];

class OptionComponent {
    constructor(_dropdownService) {
        this._dropdownService = _dropdownService;
        /* bind class.active */
        this.active = false;
        this.select = this._dropdownService.getSelect();
    }
    /* bind class.selected */
    get selected() {
        return this.select.single_selectedOption === this;
    }
    /* click event listener */
    onClick(event) {
        if (!this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            this.select.selectOption(this);
        }
    }
    ngOnInit() {
    }
    /**
     * get option label
     */
    getLabel() {
        return this.text;
    }
    /**
     * set active status
     */
    setActiveStyles() {
        this.active = true;
    }
    /**
     * set inactive status
     */
    setInactiveStyles() {
        this.active = false;
    }
    /**
     * select option item
     */
    selectItem() {
        this.select.selectOption(this);
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-option',
                template: "<div class=\"option-container\" [ngClass]=\"{'disabled': disabled, 'enabled': !disabled}\">\n    <!--- multiple selection (include checkbox) -->\n    <div *ngIf=\"select.selectMultiple\" nz-col nzSpan=\"8\">\n        <label nz-checkbox nzValue=\"{{value}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\">{{text}}</label>\n    </div>\n\n    <!-- single selection -->\n    <div *ngIf=\"!select.selectMultiple\">{{text}}</div>\n</div>\n",
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}:host{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}:host div{padding:0 5px}:host.active,:host.selected{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host.selected{background-color:#f3f3f3}}:host .enabled:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host .enabled:hover{background-color:#f3f3f3}}:host.selected{font-weight:700}:host .disabled{color:#93a1aa;cursor:auto}:host .disabled:focus,:host .disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){:host .disabled:focus,:host .disabled:hover{background-color:#fff}}.option-container{display:flex}"]
            },] }
];
OptionComponent.ctorParameters = () => [
    { type: DropdownService }
];
OptionComponent.propDecorators = {
    value: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class DropdownComponent extends FormFieldManager {
    constructor(_dropdownService, _renderer) {
        super(_renderer);
        this._dropdownService = _dropdownService;
        /* dropdown selection has changed */
        this.dropdownChange = new EventEmitter();
        /* multiple selection: list of selected OptionComponent */
        this.multiple_selectedOptions = [];
        /* multiple selection: list of selected option values */
        this.multiple_selected = [];
        this._dropdownService.register(this);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.selectMultiple) {
                this._initializeValueOnMultiple();
            }
            else {
                this._initializeValueOnSingle();
                this.keyManager = new ActiveDescendantKeyManager(this.options)
                    .withHorizontalOrientation('ltr')
                    .withVerticalOrientation()
                    .withWrap();
            }
            this.checkDirty();
        }, 100);
    }
    _initializeValueOnMultiple() {
        this.options.toArray().forEach((o) => {
            if (this.multiple_selected.includes(o.value)) {
                if (!this.multiple_selected.includes(o.value)) {
                    this.multiple_selected.push(o.value);
                }
                if (!this.multiple_selectedOptions.find((o1) => o1.value === o.value)) {
                    this.multiple_selectedOptions.push(o);
                    o.checkboxModel = true;
                }
            }
        });
        this.value = this.multiple_selectedOptions.length ?
            Array.from(this.multiple_selectedOptions, (o) => o.text).join(', ')
            : '';
    }
    _initializeValueOnSingle() {
        this.single_selectedOption = this.options.toArray().find(option => option.value === this.single_selected);
        this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
    }
    /**
     *  override: inherited writeValue
     *  called on form control setValue and form initialize
     */
    writeValue(obj) {
        if (obj !== undefined) {
            if (this.selectMultiple) {
                if (Array.isArray(obj)) {
                    this.multiple_selected = [...obj];
                    if (this.options) {
                        this._initializeValueOnMultiple();
                    }
                }
            }
            else {
                this.single_selected = obj;
                if (this.options) {
                    this._initializeValueOnSingle();
                }
            }
            this.checkDirty();
        }
    }
    /**
     * show dropdown action
     */
    showDropdown() {
        this.dropdown.show();
        if (!this.options.length) {
            return;
        }
        // set highlighted item only for single selection
        // -- highlight selected item or first item
        if (!this.selectMultiple) {
            if (this.single_selected) {
                this.keyManager.setActiveItem(this.single_selectedOption);
            }
            else {
                this.keyManager.setFirstItemActive();
            }
        }
    }
    /**
     * hide dropdown action
     */
    hideDropdown() {
        this.dropdown.hide();
    }
    /**
     * action when clicking the chevron icon (on the right)
     * @param event
     */
    onDropMenuIconClick(event) {
        event.stopPropagation();
        setTimeout(() => {
            this.input.nativeElement.focus();
            this.input.nativeElement.click();
        }, 10);
    }
    /**
     * select option
     * @param option
     */
    selectOption(option) {
        if (this.selectMultiple) {
            // already selected -- unselect item
            if (this.multiple_selectedOptions.find((o) => o.value === option.value)) {
                this.multiple_selectedOptions = [...this.multiple_selectedOptions.filter((o) => o.value !== option.value)];
                this.multiple_selected = [...this.multiple_selected.filter((s) => s !== option.value)];
                option.checkboxModel = false;
            }
            else {
                // not yet selected -- select item
                if (!this.multiple_selected.includes(option.value)) {
                    this.multiple_selected.push(option.value);
                }
                this.multiple_selectedOptions.push(option);
                option.checkboxModel = true;
            }
            this.value = this.multiple_selectedOptions.length ?
                Array.from(this.multiple_selectedOptions, (o) => o.text).join(', ')
                : '';
        }
        else {
            this.keyManager.setActiveItem(option);
            this.single_selected = option.value;
            this.single_selectedOption = option;
            this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
            this.hideDropdown();
            this.input.nativeElement.blur();
        }
        this.checkDirty();
        this.onChange(this.selectMultiple ? this.multiple_selected : option.value);
        this.dropdownChange.emit(this.value);
    }
    /**
     * keydown event (applies only to single selection items)
     * @param event
     */
    onKeyDown(event) {
        if (this.selectMultiple) {
            return;
        }
        if (['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up'].indexOf(event.key) > -1) {
            if (!this.dropdown.showing) {
                this.showDropdown();
                return;
            }
            if (!this.options.length) {
                event.preventDefault();
                return;
            }
        }
        if (event.key === 'Enter' || event.key === ' ') {
            this.single_selectedOption = this.keyManager.activeItem;
            this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
            this.hideDropdown();
            this.onChange();
            this.checkDirty();
        }
        else if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.dropdown.showing) {
                this.hideDropdown();
            }
        }
        else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
            .indexOf(event.key) > -1) {
            this.keyManager.onKeydown(event);
        }
        else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
            if (this.dropdown.showing) {
                event.preventDefault();
            }
        }
    }
    /**
     * on change action
     */
    changeAction_($event) {
        this.changeAction($event);
        this.dropdownChange.emit($event);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-dropdown',
                template: "<div #dropReference class=\"spt-input-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input #input [ngClass]=\"{'dirty': isDirty,\n                              'error': !!error,\n                              'has-left-icon': !!startIcon,\n                              'has-right-icon': !!endIcon,\n                              'has-length': !!max,\n                              'disabled-state': isDisabled,\n                              'show-placeholder': !label\n                            }\"\n           (click)=\"showDropdown()\"\n           [(ngModel)]=\"value\"\n           [style.background-color]=\"backgroundColor\"\n           (ngModelChange)=\"changeAction($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           placeholder=\"{{placeholder}}\"\n           class=\"{{size}} has-right-icon\"\n           [disabled]=\"!!isDisabled ? isDisabled : null\" readonly autocomplete=\"off\">\n\n    <!-- label -->\n    <label class=\"text-field-label label\" *ngIf=\"label\"\n           [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- right icon (arrow) -->\n    <div *ngIf=\"!error\" class=\"text-field-icon right-icon\" (click)=\"onDropMenuIconClick($event)\">\n        <svg-icon name=\"expand-more\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </div>\n\n    <spt-overlay-template [reference]=\"dropReference\" #dropdownComp>\n        <div class=\"dropdown-options-container spt-elevation--5\">\n            <ng-content select=\"spt-option\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    DropdownService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DropdownComponent),
                        multi: true
                    }
                ],
                styles: [".dropdown-options-container{width:100%;max-height:200px;overflow:auto}.spt-input-container input:focus~.right-icon,.spt-input-container input~.right-icon{transition:all .2s ease,background-color .2s ease-in}.spt-input-container input:focus~.right-icon{transform:rotate(180deg) translateY(50%)}.spt-input-container input:focus~.right-icon svg path:last-child{fill:#f90}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: DropdownService },
    { type: Renderer2 }
];
DropdownComponent.propDecorators = {
    selectMultiple: [{ type: Input }],
    dropdownChange: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input',] }],
    dropdown: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [OptionComponent,] }]
};

class SideNavigationComponent {
    constructor() {
        this.items = new Array();
    }
    ngOnInit() {
    }
}
SideNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-side-navigation',
                template: "<!-- Menu Item -->\n<ng-container *ngIf=\"type == 'menuItem'\">\n  <li nz-menu-item class=\"side-navigation-component\">\n    <span>\n      <svg-icon\n        *ngIf=\"icon\"\n        nz-icon\n        [svgStyle]=\"{ 'height.px': 20 }\"\n        [name]=\"icon\"\n      ></svg-icon\n    ></span>\n    <span class=\"text\">{{ text }}</span>\n  </li>\n</ng-container>\n\n<!-- Sub Menu -->\n<ng-container *ngIf=\"type == 'subMenu'\">\n  <li nzOpen nz-submenu>\n    <span title\n      ><span>\n        <svg-icon\n          *ngIf=\"icon\"\n          nz-icon\n          [svgStyle]=\"{ 'height.px': 20 }\"\n          [name]=\"icon\"\n        ></svg-icon></span\n      ><span>{{ text }}</span></span\n    >\n    <ul>\n      <ng-container *ngFor=\"let item of items\">\n        <li nz-menu-item>\n          <span>\n            <svg-icon\n              *ngIf=\"item.icon\"\n              nz-icon\n              [svgStyle]=\"{ 'height.px': 20 }\"\n              [name]=\"item.icon\"\n            ></svg-icon\n          ></span>\n          <span class=\"text\">{{ item.text }}</span>\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n</ng-container>\n\n<!-- Menu -->\n<ng-container *ngIf=\"type == 'menu'\">\n  <ul nz-menu></ul>\n</ng-container>\n",
                styles: ["li[nz-menu-item] .text{font-size:16px;line-height:3px;font-weight:700;margin-left:34px}li[nz-menu-item]:hover{background-color:#f3f3f3;border-radius:0 28px 28px 0;cursor:pointer}li[nz-menu-item].active{background-color:#fff3e0}li[nz-menu-item].active svg-icon svg path:last-child{fill:#f90}.ant-menu-submenu-active{outline-style:none!important}svg-icon{transform:translateY(2px)}"]
            },] }
];
SideNavigationComponent.ctorParameters = () => [];
SideNavigationComponent.propDecorators = {
    icon: [{ type: Input }],
    text: [{ type: Input }],
    disabled: [{ type: Input }],
    items: [{ type: Input }],
    type: [{ type: Input }]
};

class SearchService {
    register(select) {
        this.search = select;
    }
    getSearch() {
        return this.search;
    }
}
SearchService.decorators = [
    { type: Injectable }
];

class SearchOptionComponent {
    constructor(_searchService) {
        this._searchService = _searchService;
        /* bind class.active */
        this.active = false;
        this.search = this._searchService.getSearch();
    }
    /* bind class.selected */
    get selected() {
        return this.search.selected === this;
    }
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.search.select(this.value);
    }
    ngOnInit() {
    }
    /**
     * set active status
     */
    setActiveStyles() {
        this.active = true;
    }
    /**
     * set inactive status
     */
    setInactiveStyles() {
        this.active = false;
    }
}
SearchOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-search-option',
                template: "<div class=\"search-option-container spt-spacing-x--1\">\n    <ng-content></ng-content>\n</div>\n",
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.search-option-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.search-option-container div{padding:0 5px}.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3}}"]
            },] }
];
SearchOptionComponent.ctorParameters = () => [
    { type: SearchService }
];
SearchOptionComponent.propDecorators = {
    value: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class SearchComponent extends FormFieldManager {
    constructor(_searchService, _renderer) {
        super(_renderer);
        this._searchService = _searchService;
        /* selected items (chips) */
        this.selectedItems = [];
        /* filter action */
        this.filter = new EventEmitter();
        /* item selected action */
        this.itemSelected = new EventEmitter();
        /* item removed action */
        this.itemRemoved = new EventEmitter();
        /* chip clicked */
        this.chipClicked = new EventEmitter();
        this._searchService.register(this);
    }
    ngAfterViewInit() {
    }
    /**
     * override: on change action
     */
    changeAction($event) {
        this.onChange($event);
        this.checkDirty();
        if (this.value.length > 0) {
            if (!this.search.showing) {
                this.showDropdown();
            }
        }
        else {
            this.hideDropdown();
        }
        this.filterAction();
    }
    /**
     * focus action
     */
    focusAction() {
        if (this.launchOnFocus) {
            this.search.show();
        }
        this.focus = true;
    }
    /**
     * blur action
     */
    blurAction() {
        this.focus = false;
    }
    /**
     * show options action
     */
    showDropdown() {
        this.search.show();
    }
    /**
     * hide options action
     */
    hideDropdown() {
        this.search.hide();
        this.focus = false;
    }
    /**
     * keydown event
     */
    onKeyDown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.search.showing) {
                this.hideDropdown();
            }
        }
    }
    /**
     * on select item
     */
    select(selection) {
        this.itemSelected.emit(selection);
        this.hideDropdown();
    }
    /**
     * on filter action
     */
    filterAction() {
        this.filter.emit();
    }
    /**
     * on close item
     * @param selection
     */
    onClose(selection) {
        this.itemRemoved.emit(selection);
    }
    /**
     * chip item clicked
     * @param selection
     */
    onChipSelected(selection) {
        this.chipClicked.emit(selection);
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-search',
                template: "<div #searchReference class=\"spt-input-container search-container\" [ngClass]=\"{'disabled-container': isDisabled}\" (click)=\"launchOnFocus ? focusAction() : null\">\n    <div class=\"search-wrapper {{size}} \" [ngClass]=\"{'item-focus': focus}\"\n         [style.background-color]=\"backgroundColor\">\n        <!-- search icon -->\n        <div class=\"search-icon left-icon\" *ngIf=\"!hideSearchIcon\">\n            <svg-icon name=\"search\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n\n        <!-- selected items (chips) -->\n        <div class=\"selected-items spt-spacing-x--1\" *ngIf=\"selectedItems.length\">\n            <div class=\"selected-item\" *ngFor=\"let s of selectedItems\">\n                <spt-tooltip [title]=\"s.tooltip\">\n                    <spt-chip [text]=\"s.text\"\n                              [icon]=\"s.icon\" mode=\"closeable\"\n                              [color]=\"s.color\"\n                              (click)=\"onChipSelected(s)\"\n                              (onCloseEvent)=\"onClose(s)\"></spt-chip>\n                </spt-tooltip>\n            </div>\n        </div>\n        <input #input *ngIf=\"(maximumSelection ? selectedItems.length < maximumSelection : true) && !readonly\"\n               (focus)=\"focusAction()\" (blur)=\"blurAction()\"\n               [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'disabled-state': isDisabled}\"\n               [style.background-color]=\"backgroundColor\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"changeAction($event)\"\n               (keydown)=\"onKeyDown($event)\"\n               placeholder=\"{{placeholder}}\" autocomplete=\"off\" [readonly]=\"readonly\">\n\n        <!-- because input is hidden on readonly mode display the placeholder separately -->\n        <p class=\"font-60\" *ngIf=\"readonly\" style=\"margin: 0; cursor: default\">{{placeholder}}</p>\n    </div>\n\n    <spt-overlay-template [reference]=\"searchReference\" #searchComp>\n        <div class=\"search-options-container spt-elevation--5\">\n            <ng-content select=\"spt-search-option\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n            <ng-content select=\"div.search-override\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                providers: [
                    SearchService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SearchComponent),
                        multi: true
                    }
                ],
                styles: [".spt-input-container input::-moz-placeholder{visibility:visible!important;color:#909090!important}.spt-input-container input::placeholder{visibility:visible!important;color:#909090!important}.search-options-container{width:100%;max-height:200px;overflow:auto}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
SearchComponent.ctorParameters = () => [
    { type: SearchService },
    { type: Renderer2 }
];
SearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    selectedItems: [{ type: Input }],
    maximumSelection: [{ type: Input }],
    launchOnFocus: [{ type: Input }],
    hideSearchIcon: [{ type: Input }],
    filter: [{ type: Output }],
    itemSelected: [{ type: Output }],
    itemRemoved: [{ type: Output }],
    chipClicked: [{ type: Output }],
    search: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    options: [{ type: ContentChildren, args: [SearchOptionComponent,] }]
};

class SearchTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-search-template',
                template: "<ng-template cdk-portal=\"\">\n    <ng-content></ng-content>\n</ng-template>\n",
                styles: [""]
            },] }
];
SearchTemplateComponent.ctorParameters = () => [];

class StepsComponent {
    constructor() {
        /* type */
        this.type = 'navigation';
        /* steps direction */
        this.direction = 'horizontal';
        /* action when the step item has changed */
        this.onIndexChangeEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    onIndexChange(event) {
        this.onIndexChangeEvent.emit(event);
    }
}
StepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-steps',
                template: "<nz-steps [nzCurrent]=\"current\" [nzType]=\"type\" (nzIndexChange)=\"onIndexChange($event)\" [nzDirection]=\"direction\">\n    <ng-container *ngFor=\"let step of steps; let idx = index\">\n        <!--- if status is not provided, do default -->\n        <nz-step *ngIf=\"!step.status\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n\n        <!--- if status is provided, use that status -->\n        <nz-step *ngIf=\"step.status\" [nzStatus]=\"current === idx ? 'process' : (step.status || 'wait')\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n    </ng-container>\n</nz-steps>\n",
                styles: ["nz-step .ant-steps-item-finish .ant-steps-item-icon{background-color:#fff;border-color:#4caf50!important}nz-step{-webkit-user-select:none;-moz-user-select:none;user-select:none}"]
            },] }
];
StepsComponent.ctorParameters = () => [];
StepsComponent.propDecorators = {
    current: [{ type: Input }],
    steps: [{ type: Input }],
    type: [{ type: Input }],
    direction: [{ type: Input }],
    preventFutureSteps: [{ type: Input }],
    onIndexChangeEvent: [{ type: Output }]
};

class MenuService {
    register(menu) {
        this.menu = menu;
    }
    getMenu() {
        return this.menu;
    }
}
MenuService.decorators = [
    { type: Injectable }
];

class MenuItemComponent {
    constructor(_menuService) {
        this._menuService = _menuService;
        /* bind class.active */
        this.active = false;
        this.menu = this._menuService.getMenu();
    }
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.isChecked = !this.isChecked;
        this.menu.selectMenuItem(this);
    }
    ngOnInit() {
        // verify input
        if (this.menu.multiple) {
            if (this.itemId == null) {
                throw new Error('spt-menu-item: missing attribute: itemId for multiple selection');
            }
        }
    }
    /**
     * set active status
     */
    setActiveStyles() {
        this.active = true;
    }
    /**
     * set inactive status
     */
    setInactiveStyles() {
        this.active = false;
    }
    /**
     * select menu item
     */
    selectItem() {
        this.menu.selectMenuItem(this);
    }
    /**
     * if multiple items can be selected
     */
    isMultiple() {
        return this.menu.multiple;
    }
}
MenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-menu-item',
                template: "<div class=\"menu-item\" [ngClass]=\"{'multiple-menu-item': isMultiple(), 'single-menu-item': !isMultiple(), 'selected-item': isMultiple() && isChecked && !unselectable}\">\n\n    <!---- start icon ---->\n    <div class=\"menu-icon\" *ngIf=\"!!startIcon\">\n        <svg-icon *ngIf=\"!!startIcon\" nz-icon [name]=\"startIcon\" [svgStyle]=\"{ 'width.px':20, 'height.px':20 }\"></svg-icon>\n    </div>\n\n    <!---- left checkbox (if there is no start icon) ---->\n    <div *ngIf=\"isMultiple() && !startIcon && !unselectable\">\n        <label nz-checkbox nzValue=\"{{isChecked}}\" [(ngModel)]=\"isChecked\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n\n    <!---- label ---->\n    <div [ngClass]=\"{'label': !!startIcon || isMultiple()}\"><ng-content></ng-content></div>\n\n    <!---- right checkbox (if there is a start icon) ---->\n    <div *ngIf=\"isMultiple() && !!startIcon && !unselectable\" class=\"right-checkbox\">\n        <label nz-checkbox nzValue=\"{{isChecked}}\" [(ngModel)]=\"isChecked\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n</div>\n",
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}"]
            },] }
];
MenuItemComponent.ctorParameters = () => [
    { type: MenuService }
];
MenuItemComponent.propDecorators = {
    itemId: [{ type: Input }],
    startIcon: [{ type: Input }],
    preventClose: [{ type: Input }],
    isChecked: [{ type: Input }],
    unselectable: [{ type: Input }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class MenuComponent {
    constructor(_menuService) {
        this._menuService = _menuService;
        /* close menu when item is clicked */
        this.closeOnItemClick = true;
        /* toggle select all */
        this.toggleSelectAll = new EventEmitter();
        /* searchModel change event (two-way binding) */
        this.searchModelChange = new EventEmitter();
        /* selected items list (two-way binding) */
        this.selectedItems = [];
        /* selected items list change event (two-way binding) */
        this.selectedItemsChange = new EventEmitter();
        /* on menu hide */
        this.onMenuHide = new EventEmitter();
        /* is the menu showing */
        this._menuShowing = false;
        this._menuService.register(this);
    }
    ngOnInit() {
    }
    /**
     * toggle show state of the menu items
     */
    toggleMenu() {
        this._menuShowing = !this.isShowing();
        if (this._menuShowing) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    }
    /**
     * show menu action
     */
    showMenu() {
        this.menu.show();
        if (this.search) {
            try {
                this.searchEl.nativeElement.focus();
            }
            catch (e) { }
        }
    }
    /**
     * hide menu action
     */
    hideMenu() {
        this.menu.hide();
        this.searchModel = '';
        this.searchModelChange.emit(this.searchModel);
        this.onMenuHide.emit();
    }
    /**
     * visibility state of the overlay template
     */
    isShowing() {
        return this.menu ? this.menu.showing : false;
    }
    /**
     * change model action
     */
    change() {
        this.searchModelChange.emit(this.searchModel);
    }
    /**
     * select menu item
     */
    selectMenuItem(item) {
        if (!this.selectedItems) {
            this.selectedItems = [];
        }
        this.selectedItem = item;
        if (!this.multiple) {
            if (this.closeOnItemClick) {
                this.hideMenu();
            }
        }
        else {
            if (item.unselectable) {
                this.hideMenu();
                return;
            }
            if (item.isChecked) {
                if (!this.selectedItems.includes(item.itemId.toString())) {
                    this.selectedItems.push(item.itemId.toString());
                }
            }
            else {
                this.selectedItems = Array.from(this.selectedItems.filter(s => s.toString() !== item.itemId.toString()));
                if (this.selectAllOption) {
                    this.selectAll = false;
                }
            }
            this.selectedItemsChange.emit(this.selectedItems);
        }
    }
    /**
     * keydown event (escape is pressed)
     */
    onKeyDown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            if (this.menu.showing) {
                this.hideMenu();
            }
        }
    }
    /**
     * toggle select all
     */
    toggleSelectAllAction(fromCheckbox) {
        if (!fromCheckbox) {
            this.selectAll = !this.selectAll;
        }
        this.toggleSelectAll.emit(this.selectAll);
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-menu',
                template: "<div #menuReference class=\"menu-wrapper\" [ngClass]=\"{'show-menu': isShowing()}\">\n    <spt-overlay-template [reference]=\"menuReference\" #menuComp>\n        <div class=\"menu-container spt-elevation--5\">\n\n            <!---- search ---->\n            <div *ngIf=\"search\" class=\"search-container spt-spacing--1\">\n                <input #searchEl\n                       placeholder=\"Search\"\n                       [(ngModel)]=\"searchModel\"\n                       (ngModelChange)=\"change()\"\n                       (keydown)=\"onKeyDown($event)\"/>\n            </div>\n\n            <!---- select all ---->\n            <div *ngIf=\"multiple && selectAllOption\" class=\"menu-item spt-spacing--1 multiple-menu-item\" (click)=\"toggleSelectAllAction()\">\n                <div>\n                    <label nz-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggleSelectAllAction(true)\"></label>\n                </div>\n                <div class=\"label\">Select All</div>\n            </div>\n\n            <!-- options list -->\n            <ng-content select=\"spt-menu-item\"></ng-content>\n            <ng-content select=\"ng-container\"></ng-content>\n        </div>\n    </spt-overlay-template>\n</div>\n\n",
                providers: [MenuService],
                styles: [".options-container{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;min-height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item div{padding:0 5px}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow-x:hidden;overflow-y:auto;max-height:500px}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}"]
            },] }
];
MenuComponent.ctorParameters = () => [
    { type: MenuService }
];
MenuComponent.propDecorators = {
    multiple: [{ type: Input }],
    closeOnItemClick: [{ type: Input }],
    search: [{ type: Input }],
    selectAllOption: [{ type: Input }],
    toggleSelectAll: [{ type: Output }],
    searchModel: [{ type: Input }],
    searchModelChange: [{ type: Output }],
    selectedItems: [{ type: Input }],
    selectedItemsChange: [{ type: Output }],
    onMenuHide: [{ type: Output }],
    searchEl: [{ type: ViewChild, args: ['searchEl',] }],
    menu: [{ type: ViewChild, args: [OverlayTemplateComponent,] }],
    menuItems: [{ type: ContentChildren, args: [MenuItemComponent,] }]
};

class MenuTriggerDirective {
    /* click event listener */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.spMenuTrigger.toggleMenu();
    }
}
MenuTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[spMenuTrigger]'
            },] }
];
MenuTriggerDirective.propDecorators = {
    spMenuTrigger: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

class BackNavigationComponent {
    constructor(_location, _router, _route) {
        this._location = _location;
        this._router = _router;
        this._route = _route;
        /* text beside the arrow */
        this.text = 'Back';
    }
    onBack() {
        if (this.backAction) {
            this.backAction();
        }
        else {
            if (this.route) {
                this._router.navigate([this.route], { relativeTo: this._route });
            }
            else {
                this._location.back();
            }
        }
    }
}
BackNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-back-navigation',
                template: "<div class=\"back-navigation\" (click)=\"onBack()\">\n    <div class=\"back-icon spt-spacing-right--2\"><spt-icon name=\"arrow-back\"></spt-icon></div>\n    <div class=\"text\">{{text}}</div>\n</div>\n",
                styles: [".back-navigation{display:flex;align-items:center;cursor:pointer;transition:opacity 5ms ease-in-out;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.back-icon{transform:translateY(-1px)}.back-navigation:hover{opacity:.7}"]
            },] }
];
BackNavigationComponent.ctorParameters = () => [
    { type: Location },
    { type: Router },
    { type: ActivatedRoute }
];
BackNavigationComponent.propDecorators = {
    text: [{ type: Input }],
    route: [{ type: Input }],
    backAction: [{ type: Input }]
};

class BreadcrumbComponent {
    constructor() { }
    ngOnInit() {
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-breadcrumb',
                template: "<nz-breadcrumb [nzSeparator]=\"'>'\">\n    <ng-container *ngFor=\"let item of items\">\n        <nz-breadcrumb-item>\n            <a *ngIf=\"item.route\" [routerLink]=\"item.route\">{{item.label}}</a>\n            <span *ngIf=\"!item.route\">{{item.label}}</span>\n        </nz-breadcrumb-item>\n    </ng-container>\n</nz-breadcrumb>",
                styles: [""]
            },] }
];
BreadcrumbComponent.ctorParameters = () => [];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }]
};

class SnackbarComponent {
    constructor(notification) {
        this.notification = notification;
    }
    ngOnInit() {
    }
    createSnackbar(snackbar) {
        this.notification.template(this.template, {
            nzStyle: {
                background: '#0D0C0B',
                color: 'white'
            },
            nzData: snackbar,
            nzPlacement: 'bottomLeft',
            nzClass: this.cssClass
        });
    }
    onAction(callback) {
        callback();
    }
}
SnackbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-snackbar',
                template: "<ng-template #template let-snackbar=\"data\">\n    <div class=\"ant-notification-notice-content\">\n        <div>\n            <div class=\"ant-notification-notice-message\">\n                {{ snackbar.message }}\n            </div>\n            <div *ngIf=\"snackbar.description\" class=\"ant-notification-notice-description\">\n                {{ snackbar.description }}\n            </div>\n        </div>\n\n        <div class=\"action ant-notification-notice-btn\">\n            <span *ngIf=\"snackbar.actionMessage\" (click)=\"onAction(snackbar.actionEvent)\">\n                {{ snackbar.actionMessage | uppercase }}\n            </span>\n        </div>\n    </div>\n</ng-template>\n",
                styles: [".ant-notification-notice-content{background-color:#0d0c0b;color:#fff;display:flex;align-items:center}.action{margin-left:auto}.ant-notification-notice-btn{color:#fff}.ant-notification-notice-message{color:#fff;margin-bottom:0!important}.ant-notification-notice-description{margin-top:5px}.ant-notification-notice-btn{float:left;margin-top:8px;cursor:pointer}"]
            },] }
];
SnackbarComponent.ctorParameters = () => [
    { type: NzNotificationService }
];
SnackbarComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }],
    cssClass: [{ type: Input }]
};

class AvatarComponent {
    constructor() {
        /** avatar component size (default: 40) */
        this.size = 40;
        /** font color (default: #0D0C0B) */
        this.textColor = '#0D0C0B';
        /** background color (default: #FF9900) */
        this.backgroundColor = '#FF9900';
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-avatar',
                template: "<div class=\"avatar-container\"\n     [style.width.px]=\"size < 30 ? 30 : size\"\n     [style.height.px]=\"size < 30 ? 30 : size\"\n     [style.background-color]=\"backgroundColor\">\n    <div class=\"avatar-text\"\n         [style.font-size.px]=\"size <= 45 ? 15 : size - 30\"\n         [style.color]=\"textColor\">{{text[0] | uppercase}}</div>\n</div>\n",
                styles: [".avatar-container{border-radius:100px;display:flex;align-items:center;justify-content:center}.avatar-text{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}"]
            },] }
];
AvatarComponent.ctorParameters = () => [];
AvatarComponent.propDecorators = {
    size: [{ type: Input }],
    text: [{ type: Input }],
    textColor: [{ type: Input }],
    backgroundColor: [{ type: Input }]
};

class BadgeComponent {
    constructor() { }
}
BadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-badge',
                template: "\n<nz-tag class=\"badges\" [nzColor]=\"color\" [style.font-size]=\"'14px'\" [style.line-height]=\"'16px'\">{{name}}</nz-tag>\n",
                styles: [".badges{display:flex}nz-tag{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;padding:3px 12px!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;border:none!important;font-size:12px!important}"]
            },] }
];
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    name: [{ type: Input }],
    color: [{ type: Input }]
};

class DividerComponent {
    constructor() {
        /* divider type */
        this.type = 'horizontal';
    }
}
DividerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-divider',
                template: "<nz-divider class=\"divider\" [nzType]=\"type\"></nz-divider>",
                styles: [".divider{height:1px;margin:0}"]
            },] }
];
DividerComponent.ctorParameters = () => [];
DividerComponent.propDecorators = {
    type: [{ type: Input }]
};

class ProgressBarComponent {
    constructor() { }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-bar',
                template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" nzType=\"line\"></nz-progress>\n",
                styles: [""]
            },] }
];
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    percent: [{ type: Input }],
    info: [{ type: Input }]
};

class CheckboxComponent {
    constructor() {
        /** emits the current boolean statys of the checkbox */
        this.onChangeEvent = new EventEmitter();
    }
    onChange(e) {
        this.onChangeEvent.emit(e);
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-checkbox',
                template: "<div nz-col [nzSpan]=\"8\"><label nz-checkbox [nzIndeterminate]=\"indeterminate\" [ngModel]=\"check\" (ngModelChange)=\"onChange($event)\" [nzValue]=\"value || text\">{{value || text}}</label></div>\n",
                styles: [""]
            },] }
];
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    indeterminate: [{ type: Input }],
    check: [{ type: Input }],
    value: [{ type: Input }],
    text: [{ type: Input }],
    onChangeEvent: [{ type: Output }]
};

class RadioComponent extends FormFieldManager {
    constructor(_renderer) {
        super(_renderer);
        /* display direction */
        this.direction = 'horizontal';
        /* radio button options */
        this.options = [];
    }
}
RadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-radio',
                template: "<nz-radio-group [(ngModel)]=\"value\" (ngModelChange)=\"changeAction($event)\">\n    <div [class]=\"direction\">\n        <label *ngFor=\"let o of options\" nz-radio [nzValue]=\"o.value\">{{ o.text }}</label>\n    </div>\n</nz-radio-group>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => RadioComponent),
                        multi: true
                    }
                ],
                styles: [".horizontal{display:flex}.vertical [nz-radio]{display:block}"]
            },] }
];
RadioComponent.ctorParameters = () => [
    { type: Renderer2 }
];
RadioComponent.propDecorators = {
    direction: [{ type: Input }],
    options: [{ type: Input }]
};

class SwitchComponent {
    constructor() {
        this.on = false;
        this.onChanged = new EventEmitter();
    }
    ngOnInit() {
    }
    change() {
        this.onChanged.emit(this.on);
    }
}
SwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-switch',
                template: "<nz-switch [(ngModel)]=\"on\" (ngModelChange)=\"change()\"></nz-switch>\n",
                styles: ["nz-switch{margin:10px}"]
            },] }
];
SwitchComponent.ctorParameters = () => [];
SwitchComponent.propDecorators = {
    on: [{ type: Input }],
    onChanged: [{ type: Output }]
};

class SliderComponent {
    constructor() { }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-slider',
                template: "<nz-slider [nzMax]=\"max\" [nzDisabled]=\"disable\" [nzStep]=\"step\" [ngModel]=\"start\" nzTooltipVisible=\"never\"></nz-slider>\n",
                styles: [""]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    max: [{ type: Input }],
    disable: [{ type: Input }],
    step: [{ type: Input }],
    start: [{ type: Input }]
};

class TabComponent {
    constructor() {
        this.index = 0;
        this.selectedIndexChange = new EventEmitter();
        this.orientation = 'horizontal';
        this.TAB_POSITION = {
            vertical: 'left',
            horizontal: 'top'
        };
    }
    ngOnInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-tab',
                template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\"\n           [nzTabPosition]=\"TAB_POSITION[orientation]\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"titleTemplate\" [nzDisabled]=\"tab.disabled\">\n        <ng-template #titleTemplate>\n            <spt-tooltip [title]=\"tab.tooltip\">\n                <div class=\"title-container\">\n                    <div *ngIf=\"tab.icon\" class=\"icon\">\n                        <spt-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\" [size]=\"16\" color=\"#FF9900\"></spt-icon>\n                    </div>\n                    <div>{{ tab.name }}</div>\n                </div>\n            </spt-tooltip>\n        </ng-template>\n    </nz-tab>\n</nz-tabset>\n",
                styles: [".icon{transform:translateY(1px)}.title-container{display:flex;align-items:center}"]
            },] }
];
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    tabs: [{ type: Input }],
    index: [{ type: Input }],
    selectedIndexChange: [{ type: Output }],
    orientation: [{ type: Input }]
};

class TooltipComponent {
    constructor() { }
    ngOnInit() {
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-tooltip',
                template: "<span nz-tooltip [nzTooltipTitle]=\"title\">\n  <span *ngIf=\"content\">{{content}}</span>\n  <ng-content></ng-content>\n</span>\n",
                styles: [""]
            },] }
];
TooltipComponent.ctorParameters = () => [];
TooltipComponent.propDecorators = {
    title: [{ type: Input }],
    content: [{ type: Input }]
};

class ElevationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ElevationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-elevation',
                template: "<div class=\"elevation\">\n    <div class=\"elevation-container\">\n        <p>01 dp</p>\n        <div class=\"spt-elevation--1 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>02 dp</p>\n        <div class=\"spt-elevation--2 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>06 dp</p>\n        <div class=\"spt-elevation--3 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>08 dp</p>\n        <div class=\"spt-elevation--4 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>12 dp</p>\n        <div class=\"spt-elevation--5 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>24 dp</p>\n        <div class=\"spt-elevation--6 elevation-box\"></div>\n    </div>\n</div>\n",
                styles: [".elevation{display:flex;flex-wrap:wrap}.elevation .elevation-container{margin-top:20px}.elevation .elevation-container p{margin-bottom:5px}.elevation .elevation-container .elevation-box{width:280px;height:184px;margin:10px}"]
            },] }
];
ElevationComponent.ctorParameters = () => [];

class SpacingComponent {
    constructor() {
        this.spacing = [
            {
                sectionName: '8px',
                sectionClassName: 'spacing--8',
                sections: [
                    { label: '8px (around)', className: 'spt-spacing--1' },
                    { label: '8px (vertical)', className: 'spt-spacing-y--1' },
                    { label: '8px (horizontal)', className: 'spt-spacing-x--1' },
                    { label: '8px (top)', className: 'spt-spacing-top--1' },
                    { label: '8px (bottom)', className: 'spt-spacing-bottom--1' },
                    { label: '8px (left)', className: 'spt-spacing-left--1' },
                    { label: '8px (right)', className: 'spt-spacing-right--1' },
                ]
            },
            {
                sectionName: '16px',
                sectionClassName: 'spacing--16',
                sections: [
                    { label: '16px (around)', className: 'spt-spacing--2' },
                    { label: '16px (top)', className: 'spt-spacing-top--2' },
                    { label: '8px (vertical)', className: 'spt-spacing-y--2' },
                    { label: '8px (horizontal)', className: 'spt-spacing-x--2' },
                    { label: '16px (bottom)', className: 'spt-spacing-bottom--2' },
                    { label: '16px (left)', className: 'spt-spacing-left--2' },
                    { label: '16px (right)', className: 'spt-spacing-right--2' },
                ]
            }
        ];
        this.spacing = this.getSpacing();
    }
    ngOnInit() {
    }
    getSpacing() {
        const spacing = [];
        const offsetArr = [1, 2, 3, 6, 8, 10, 14];
        const sections = [
            { label: '(around)', className: 'spt-spacing' },
            { label: '(vertical)', className: 'spt-spacing-y' },
            { label: '(horizontal)', className: 'spt-spacing-x' },
            { label: '(top)', className: 'spt-spacing-top' },
            { label: '(bottom)', className: 'spt-spacing-bottom' },
            { label: '(left)', className: 'spt-spacing-left' },
            { label: '(right)', className: 'spt-spacing-right' },
        ];
        offsetArr.forEach((offset, i) => {
            const size = 8 * offset;
            const currentSections = Array.from(sections, s => {
                return {
                    label: `${size}px ${s.label}`,
                    className: `${s.className}--${i + 1}`
                };
            });
            const newSection = {
                sectionClassName: `spacing--${size}`,
                sectionName: `${size}px`,
                sections: currentSections
            };
            spacing.push(newSection);
        });
        return spacing;
    }
}
SpacingComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-spacing',
                template: "<div class=\"spacing\">\n    <div *ngFor=\"let section of spacing\" class=\"spacing-section\">\n        <h3>{{ section.sectionName }}</h3>\n        <div class=\"spacing-container\">\n            <div *ngFor=\"let subsection of section.sections\" class=\"spacing-example\">\n                <div class=\"spacing-wrapper spt-elevation--2 {{ section.sectionClassName }} {{subsection.className}}\">\n                    <div class=\"spacing-box\">\n                        <p class=\"spacing-label\">{{ subsection.label }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".spacing .spacing-section{padding-top:20px}.spacing .spacing-section .spacing-container{display:flex;align-content:center;flex-wrap:wrap}.spacing .spacing-section .spacing-container .spacing-example{text-align:center;padding:10px}.spacing .spacing-section .spacing-container .spacing-example .spacing--8{background-color:rgba(239,83,80,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--16{background-color:rgba(236,64,122,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--24{background-color:rgba(171,71,188,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--48{background-color:rgba(126,87,194,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--64{background-color:rgba(92,107,192,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--80{background-color:rgba(66,165,245,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--112{background-color:rgba(38,198,218,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box{width:80px;height:80px;background-color:#fff;display:flex;align-items:center;justify-content:center}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box p{font-size:12px}"]
            },] }
];
SpacingComponent.ctorParameters = () => [];

class IconComponent {
    constructor() {
        this.color = '#0D0C0B';
        this.size = 20;
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-icon',
                template: "<span nz-tooltip [nzTooltipTitle]=\"toolTipTitle\">\n  <svg-icon class=\"icons\" nz-icon [name]=\"name\" [svgStyle]=\"{'height':size + 'px', 'width':size + 'px', 'fill':(color || '#0D0C0B')}\">\n  </svg-icon>\n</span>\n",
                styles: [""]
            },] }
];
IconComponent.ctorParameters = () => [];
IconComponent.propDecorators = {
    toolTipTitle: [{ type: Input }],
    name: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }]
};

class DataVisualizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
DataVisualizationComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-data-visualization',
                template: "<div class=\"data-visualization\">\n  <span class=\"data-visualization-title\">{{ title }}</span>\n  <span class=\"data-visualization-description\">{{ description }}</span>\n  <ng-content></ng-content>\n</div>\n",
                styles: [".data-visualization{border:1px solid #e2e2e2;border-radius:4px;padding:32px;background-color:#fff}.data-visualization-title{display:flex;font-family:Nunito;font-style:normal;font-weight:700;font-size:48px;line-height:56px}.data-visualization-description{display:flex;font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:16px;line-height:24px}"]
            },] }
];
DataVisualizationComponent.ctorParameters = () => [];
DataVisualizationComponent.propDecorators = {
    title: [{ type: Input }],
    description: [{ type: Input }]
};

class DialogsComponent {
    constructor(modal, viewContainerRef) {
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
    }
    createModal(dialog) {
        this.dialog = dialog;
        this.createTplModal(this.tplTitle, this.tplContent, this.tplFooter);
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.modalRef = this.modal.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: true,
        });
    }
    ngOnInit() {
    }
}
DialogsComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-dialogs',
                template: "<ng-template #tplTitle>\n  <span class=\"title\">\n    {{ dialog.title }}\n  </span>\n</ng-template>\n<ng-template #tplContent>\n  <span class=\"content\">\n    {{ dialog.content }}\n  </span>\n</ng-template>\n<ng-template #tplFooter let-ref=\"modalRef\">\n  <button\n    nz-button\n    nzType=\"secondary\"\n    (click)=\"modalRef.destroy(); dialog.action1()\"\n  >\n    {{ dialog.action1Label }}\n  </button>\n  <button\n    nz-button\n    nzType=\"primary\"\n    (click)=\"modalRef.destroy(); dialog.action2()\"\n  >\n    {{ dialog.action2Label }}\n  </button>\n</ng-template>\n",
                styles: [".title{font-family:Nunito;font-weight:700;font-size:24px;line-height:32px;color:#0d0c0b}.content,.title{font-style:normal}.content{font-family:Nunito Sans;font-weight:400;font-size:16px;line-height:24px;color:#4f4e4d}"]
            },] }
];
DialogsComponent.ctorParameters = () => [
    { type: NzModalService },
    { type: ViewContainerRef }
];
DialogsComponent.propDecorators = {
    tplTitle: [{ type: ViewChild, args: ['tplTitle',] }],
    tplContent: [{ type: ViewChild, args: ['tplContent',] }],
    tplFooter: [{ type: ViewChild, args: ['tplFooter',] }]
};

const appExpandMoreIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`,
    name: 'expand-more'
};

const appLogoutIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>`,
    name: 'logout'
};

const appAccountBoxIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg>`,
    name: 'account-box'
};

const appExpandLessIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`,
    name: 'expand-less'
};

const appKeyboardTabIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.71 8.12L8.83 11H21c.55 0 1 .45 1 1s-.45 1-1 1H8.83l2.88 2.88a.996.996 0 11-1.41 1.41L5.71 12.7a.996.996 0 010-1.41L10.3 6.7a.996.996 0 011.41 0c.38.39.39 1.03 0 1.42zM4 7v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1z"/></svg>`,
    name: 'keyboard-tab'
};

var ButtonType;
(function (ButtonType) {
    ButtonType["primary"] = "primary";
    ButtonType["secondary"] = "default";
    ButtonType["tertiary"] = "link";
    ButtonType["inverted"] = "inverted";
})(ButtonType || (ButtonType = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["large"] = "large";
    ButtonSize["medium"] = "medium";
    ButtonSize["small"] = "small";
})(ButtonSize || (ButtonSize = {}));
var SideNavigationType;
(function (SideNavigationType) {
    SideNavigationType["menu"] = "menu";
    SideNavigationType["subMenu"] = "subMenu";
    SideNavigationType["menuGroup"] = "menuGroup";
    SideNavigationType["menuItem"] = "menuItem";
})(SideNavigationType || (SideNavigationType = {}));
var TagType;
(function (TagType) {
    TagType["closeable"] = "closeable";
    TagType["default"] = "default";
    TagType["checkable"] = "checkable";
})(TagType || (TagType = {}));
var ICardType;
(function (ICardType) {
    ICardType["sms"] = "sms";
    ICardType["customer"] = "customer";
    ICardType["gift"] = "giftManagement";
})(ICardType || (ICardType = {}));

class SidebarComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.sidebarData = {};
        this.userDisplay = {};
        this.otherAccounts = [];
        this.AccountsDisplay = this.otherAccounts;
        this.multipleAccounts = false;
        this.keyboarTab = appKeyboardTabIcon.name;
        this.expandLess = appExpandLessIcon.name;
        this.accountBox = appAccountBoxIcon.name;
        this.logoutIcon = appLogoutIcon.name;
        this.expandMore = appExpandMoreIcon.name;
        this.buttonType = ButtonType.secondary;
        this.buttonSize = ButtonSize.medium;
        this.iconColor = '#FFF';
        this.isCollapse = false;
        this.onToggleLogout = false;
        this.multipleAccountsSelection = false;
        this.MenuWidht = '280px';
        this.MenuHeight = '857px';
        this.OptionWidht = '240px';
        this.lineRight = '-20px';
    }
    ngOnInit() {
        if (this.sidebarData.users.length > 1) {
            this.multipleAccounts = true;
        }
        this.sidebarData.users.forEach((user) => {
            this.sidebarData.users.indexOf(user) === 0 ? this.userDisplay = user : this.otherAccounts.push(user);
        });
    }
    onCollapse() {
        if (this.isCollapse) {
            this.isCollapse = false;
            this.MenuWidht = '280px';
            this.OptionWidht = '240px';
            this.lineRight = '-20px';
        }
        else if (!this.isCollapse && this.onToggleLogout) {
            this.isCollapse = true;
            this.MenuWidht = '88px';
            this.OptionWidht = '46px';
            this.lineRight = '-22px';
            this.onToggleLogout = false;
            this.MenuHeight = '857px';
        }
        else {
            this.isCollapse = true;
            this.MenuWidht = '88px';
            this.OptionWidht = '46px';
            this.lineRight = '-22px';
            this.multipleAccountsSelection = false;
        }
    }
    onActive(option) {
        this.optionsData.forEach((e) => {
            if (e.title === option.title) {
                option.isActive = true;
            }
            else {
                e.isActive = false;
            }
        });
        this._router.navigate([option.link], { relativeTo: this._route }).then();
    }
    toggleLogout() {
        if (this.onToggleLogout && !this.isCollapse) {
            this.onToggleLogout = false;
            this.MenuHeight = '857px';
        }
        else {
            this.onToggleLogout = true;
            this.MenuHeight = '780px';
        }
    }
    expandAccounts() {
        if (this.multipleAccountsSelection) {
            this.multipleAccountsSelection = false;
        }
        else {
            this.multipleAccountsSelection = true;
        }
    }
    switchAccount(account) {
        this.userDisplay = {};
        this.otherAccounts = [];
        this.sidebarData.users.forEach((user) => {
            user.id === account.id ? this.userDisplay = user : this.otherAccounts.push(user);
        });
    }
    filter() {
        this.AccountsDisplay = [];
        this.otherAccounts.filter((user) => {
            const test = user.name.toLocaleLowerCase().includes(this.inputFilter.toLocaleLowerCase());
            if (test) {
                this.AccountsDisplay.push(user);
            }
        });
    }
}
SidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-sidebar',
                template: "<div class=\"container\" [ngStyle]=\"{ width: MenuWidht }\">\n  <div class=\"user\">\n    <spt-avatar [text]=\"userDisplay.name.charAt(0).toUpperCase()\"></spt-avatar>\n    <div class=\"text\" *ngIf=\"!isCollapse\">\n      <span>{{ userDisplay.name }}</span>\n      <span>{{ userDisplay.company }}</span>\n    </div>\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"expandMore\"\n      [name]=\"expandMore\"\n      *ngIf=\"multipleAccounts && !isCollapse\"\n      (click)=\"expandAccounts()\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n    <div\n      *ngIf=\"multipleAccountsSelection && !isCollapse\"\n      class=\"multiAccount spt-elevation--3 elevation-box\"\n    >\n      <spt-text-field\n        [placeholder]=\"'Filter by name'\"\n        [(ngModel)]=\"inputFilter\"\n        (ngModelChange)=\"filter()\"\n      ></spt-text-field>\n      {{ inputFilter }}\n      <div\n        class=\"userMultiAccount\"\n        *ngFor=\"let account of AccountsDisplay\"\n        (click)=\"switchAccount(account)\"\n      >\n        <spt-avatar [text]=\"account.title.charAt(0).toUpperCase()\"></spt-avatar>\n        <div class=\"text-multiple-accounts\" *ngIf=\"!isCollapse\">\n          <span>{{ account.name }}</span>\n          <span>{{ account.company }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"menu\" [ngStyle]=\"{ height: MenuHeight }\">\n    <div\n      *ngFor=\"let option of optionsData\"\n      class=\"option\"\n      [ngStyle]=\"{ width: OptionWidht }\"\n      [ngClass]=\"{ active: option.isActive }\"\n      (click)=\"onActive(option)\"\n    >\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"option.title\"\n        [name]=\"option.icon.name\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <span *ngIf=\"!isCollapse\">{{ option.title }}</span>\n      <div\n        class=\"orange-line\"\n        [ngStyle]=\"{ right: lineRight }\"\n        *ngIf=\"option.isActive\"\n      ></div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"collapse\" (click)=\"onCollapse()\">\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"keyboarTab\"\n      [name]=\"keyboarTab\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"user-email\">\n    <div class=\"user\">\n      <div class=\"text\" *ngIf=\"!isCollapse\">\n        <span>{{ userDisplay.name }}</span>\n        <span class=\"small\">{{ userDisplay.email }}</span>\n      </div>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"expandLess\"\n        [name]=\"expandLess\"\n        *ngIf=\"!onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"accountBox\"\n        [name]=\"accountBox\"\n        *ngIf=\"onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n    </div>\n    <div class=\"flex-btn\" *ngIf=\"onToggleLogout && !isCollapse\">\n      <spt-button\n        class=\"btn\"\n        [text]=\"'LOGOUT'\"\n        [type]=\"buttonType\"\n        [size]=\"buttonSize\"\n        [leftIcon]=\"logoutIcon\"\n        (click)=\"sidebarData.logout()\"\n      ></spt-button>\n    </div>\n  </div>\n</div>\n",
                styles: [".container{height:1080px;background-color:#0d0c0b;color:#d2d2d2;font-family:Nunito Sans;font-style:normal;font-size:16px;line-height:24px;z-index:1}.icons{padding-top:4px;margin:10px}.user,.userMultiAccount{position:relative;display:flex;flex-direction:row;align-items:center;padding:20px}.elevation-box{position:absolute;width:280px;left:24px;top:64px;background-color:#fff;z-index:2}.text,.text-multiple-accounts{display:flex;flex-direction:column}.text .small{font-weight:400;font-size:12px;line-height:16px;color:#b1b1b1}.text-multiple-accounts{color:#000}.multiAccount{display:flex;flex-direction:column;padding:20px;justify-content:space-around}.userMultiAccount{margin:10px 0 0;border-radius:4px;padding:12px 6px}.userMultiAccount:hover{background-color:#2e2d2c}.userMultiAccount:hover span{color:#fff}.textFiel{width:80%}.menu{padding:20px}.menu .option{position:relative;display:flex;align-items:center;width:240px;height:48px;padding:12px 6px 12px 6;border-radius:4px;margin:16px 0}.menu .option:hover{background-color:#2e2d2c;color:#f90}.menu .orange-line{position:absolute;right:-20px;background-color:#f90;width:4px;height:40px;border-radius:30px 0 0 30px}.collapse{padding:20px;display:flex;align-items:center;width:240px;height:48px}.active{background-color:#2e2d2c}.user-email{display:flex;flex-direction:column}.flex-btn{display:flex;justify-content:center}spt-icon span svg-icon svg path:last-child{fill:#d2d2d2}"]
            },] }
];
SidebarComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
SidebarComponent.propDecorators = {
    sidebarData: [{ type: Input }],
    optionsData: [{ type: Input }]
};

class TableComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-table',
                template: "<nz-table class=\"table\"\n          [nzShowPagination]=\"false\"\n          [nzFrontPagination]=\"false\"\n          [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-content select=\"tr\"></ng-content>\n  </tbody>\n</nz-table>\n",
                styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border-radius:4px;border:1px solid #e2e2e2;border-bottom:none}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
            },] }
];
TableComponent.ctorParameters = () => [];
TableComponent.propDecorators = {
    checkboxOn: [{ type: Input }],
    rows: [{ type: Input }],
    dataSet: [{ type: Input }]
};

const appUploadFileIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14.8 15H13v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.19.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z"/></svg>`,
    name: 'upload-file'
};

class UploadComponent {
    constructor(modal, viewContainerRef, msg) {
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.msg = msg;
        this.uploadFile = appUploadFileIcon.name;
    }
    createModalUpload(upload) {
        this.upload = upload;
        this.createTplModal(this.tplTitle, this.tplContent, this.tplFooter);
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.modalRef = this.modal.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: true,
        });
    }
    ngOnInit() {
    }
    handleChange({ file, fileList }) {
        const status = file.status;
        if (status === 'done') {
            this.msg.success(`${file.name} file uploaded successfully.`);
        }
        else if (status === 'error') {
            this.msg.error(`${file.name} file upload failed.`);
        }
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-upload',
                template: "<ng-template #tplTitle>\n    <span class=\"title\">\n    {{ upload.title }}\n    </span>\n</ng-template>\n<ng-template #tplContent>\n    <span class=\"content\">\n    {{ upload.content }}\n  </span>\n  <br>\n  <br>\n    <nz-upload\n    nzType=\"drag\"\n    [nzMultiple]=\"true\"\n    nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    (nzChange)=\"handleChange($event)\"\n    class=\"upload-box\"\n  >\n    <div class=\"upload-content\">\n      <spt-icon class=\"icons\" [toolTipTitle]=\"uploadFile\" [name]=\"uploadFile\"></spt-icon>\n      <span>Drag and Drop here</span>\n      <span>or</span>\n      <span><b>BROWSE FILES</b></span>\n\n    </div>\n    </nz-upload>\n\n    <div class=\"under-upload-text\">\n    <span>Accepted files</span>\n    <span>Maximum size</span>\n    </div>\n\n</ng-template>\n<ng-template #tplFooter let-ref=\"modalRef\">\n    <button nz-button nzType=\"secondary\" (click)=\"modalRef.destroy(); upload.action1()\">\n    {{ upload.action1Label }}\n  </button>\n</ng-template>\n",
                styles: [".title{font-family:Nunito;font-weight:700;font-size:24px;line-height:32px;color:#0d0c0b}.content,.title{font-style:normal}.content{font-family:Nunito Sans;font-weight:400;font-size:16px;line-height:24px;color:#4f4e4d}.upload-box{width:468px;height:304px;box-sizing:border-box;border-radius:4px}.upload-box,.upload-content{display:flex;flex-direction:column;align-items:center;justify-content:center}.upload-box:hover{background-color:#f3f3f3}.under-upload-text{display:flex;width:468px;justify-content:space-between;font-size:12px;line-height:16px;color:#909090}.icons{padding-top:4px;margin:10px}"]
            },] }
];
UploadComponent.ctorParameters = () => [
    { type: NzModalService },
    { type: ViewContainerRef },
    { type: NzMessageService }
];
UploadComponent.propDecorators = {
    tplTitle: [{ type: ViewChild, args: ['tplTitle',] }],
    tplContent: [{ type: ViewChild, args: ['tplContent',] }],
    tplFooter: [{ type: ViewChild, args: ['tplFooter',] }]
};

class HeaderComponent {
    constructor() {
        this.buttonType = ButtonType.primary;
        this.buttonSize = ButtonSize.medium;
    }
    ngOnInit() { }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-header',
                template: "<div class=\"header\">\n  <div class=\"sub-header-1\">\n    <spt-back-navigation\n      *ngIf=\"backTitle\"\n      [title]=\"backTitle\"\n    ></spt-back-navigation>\n    <spt-breadcrumb *ngIf=\"breadcrumbs\" [items]=\"breadcrumbs\"></spt-breadcrumb>\n    <span class=\"title\">{{ title }}</span>\n  </div>\n  <div class=\"sub-header-2\" *ngIf=\"search\">\n    <div class=\"search\">\n      <spt-search></spt-search>\n    </div>\n    <spt-button\n      *ngIf=\"btnTitle\"\n      [text]=\"btnTitle\"\n      [type]=\"buttonType\"\n      [size]=\"buttonSize\"\n      (click)=\"action()\"\n    ></spt-button>\n  </div>\n</div>\n",
                styles: [".header{display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center;padding:24px 0}.sub-header-1{display:flex;flex-direction:column}.sub-header-2{display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.search{width:300px;padding-right:30px}.title{font-family:Nunito;font-style:normal;font-weight:700;font-size:32px;line-height:48px;display:flex;align-items:center}"]
            },] }
];
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    title: [{ type: Input }],
    backTitle: [{ type: Input }],
    breadcrumbs: [{ type: Input }],
    btnTitle: [{ type: Input }],
    search: [{ type: Input }],
    action: [{ type: Input }]
};

const appRedeemIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7.6 10.02a.995.995 0 00.22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H20v6z"/></svg>`,
    name: 'redeem'
};

const appCallIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`,
    name: 'call'
};

const appEmailIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    name: 'email'
};

const appSmartphoneIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
    name: 'smartphone'
};

const appEastIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.29 5.71a.996.996 0 000 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 101.41 1.41l5.59-5.59a.996.996 0 000-1.41l-5.6-5.58a.996.996 0 00-1.41 0z"/></svg>`,
    name: 'east'
};

const appMoreVertIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    name: 'more-vert'
};

const appSmsIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>`,
    name: 'sms'
};

const appPeopleIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    name: 'people'
};

var CAMPAIGN_STATUS;
(function (CAMPAIGN_STATUS) {
    CAMPAIGN_STATUS[CAMPAIGN_STATUS["ACTIVE"] = 1] = "ACTIVE";
    CAMPAIGN_STATUS[CAMPAIGN_STATUS["INACTIVE"] = 2] = "INACTIVE";
    CAMPAIGN_STATUS[CAMPAIGN_STATUS["EXPIRED"] = 3] = "EXPIRED";
    CAMPAIGN_STATUS[CAMPAIGN_STATUS["DELETED"] = 4] = "DELETED";
    CAMPAIGN_STATUS[CAMPAIGN_STATUS["COMPLETE"] = 5] = "COMPLETE";
})(CAMPAIGN_STATUS || (CAMPAIGN_STATUS = {}));
class CardComponent {
    constructor() {
        this.onSelect = new EventEmitter();
        this.sms = appSmsIcon.name;
        this.people = appPeopleIcon.name;
        this.send = appEastIcon.name;
        this.moreVert = appMoreVertIcon.name;
        this.email = appEmailIcon.name;
        this.smartphone = appSmartphoneIcon.name;
        this.call = appCallIcon.name;
        this.redeem = appRedeemIcon.name;
        this.CAMPAIGN_STATUS = CAMPAIGN_STATUS;
        this.isSend = true;
        this.white = '#FFEBEE';
        this.red = '#EF5350';
        this.green = '#66BB6A';
        this.grey = '#e0e0e0';
        this.orange = '#FFB300';
        this.btnType = ButtonType.secondary;
        this.buttonSize = ButtonSize.medium;
    }
    ngOnInit() {
        this.isMouseOver = false;
        if (this.customer) {
            this.customer.isSelect = this.checked;
        }
    }
    toggleCard() {
        if (this.isSend) {
            this.isSend = false;
        }
        else {
            this.isSend = true;
        }
    }
    getCampaignStatus(campaign) {
        if (campaign.status.id == CAMPAIGN_STATUS.ACTIVE) {
            this.campaignColor = this.green;
            return 'SENDING';
        }
        if (campaign.status.id == CAMPAIGN_STATUS.INACTIVE) {
            if (this.campaign.date_scheduled) {
                this.campaignColor = this.orange;
                return 'SCHEDULED';
            }
            this.campaignColor = this.grey;
            return 'DRAFT';
        }
        if (campaign.status.id == CAMPAIGN_STATUS.EXPIRED) {
            this.campaignColor = this.red;
            return 'EXPIRED';
        }
        if (campaign.status.id == CAMPAIGN_STATUS.DELETED) {
            this.campaignColor = this.red;
            return 'DELETED';
        }
        this.campaignColor = this.green;
        return 'SENT';
    }
    getCampaignMetric(type, campaign) {
        let metric = campaign.metrics.filter(stat => { return stat.type === type; })[0];
        if (type === 'Send') {
            return (metric.value ? metric.value : 0);
        }
        if (type === 'Open') {
            return (metric.value ? metric.value + '%' : '--');
        }
        if (type === 'Spend') {
            return (metric.value ? "$" + metric.value : '--');
        }
        return (metric.value ? metric.value : '--');
    }
    onSelectEvent($event) {
        this.onSelect.emit($event);
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-card',
                template: "<div\n  [ngClass]=\"{ card: campaign || giftManagement, customerCard: customer }\"\n  (mouseover)=\"isMouseOver = true\"\n  (mouseout)=\"isMouseOver = false\"\n  [ngStyle]=\"{ 'background-color': customer?.isSelect ? '#FFF' : '' }\"\n>\n  <!-- Start Customer Card -->\n  <div class=\"col customer-col\" *ngIf=\"customer\">\n    <div\n      class=\"body\"\n      [ngStyle]=\"{\n        'background-color': !isMouseOver\n          ? customer.isSelect\n            ? '#FFF4E0'\n            : white\n          : null\n      }\"\n    >\n      <spt-avatar\n        [hidden]=\"customer.isSelect || (!disableCheckbox && isMouseOver)\"\n        [text]=\"(customer.first_name | uppercase | slice: 0:1) + (customer.last_name | uppercase | slice: 0:1)\"\n        [size]=\"40\"\n        [backgroundColor]=\"customer.isSelect ? '#FFF4E0' : white\"\n        [textColor]=\"red\"\n      ></spt-avatar>\n      <spt-checkbox\n        [hidden]=\"!customer.isSelect && (disableCheckbox || !isMouseOver)\"\n        [check]=\"customer.isSelect\"\n        (onChangeEvent)=\"onSelectEvent($event)\"\n      ></spt-checkbox>\n    </div>\n    <div class=\"content\">\n      <div class=\"sub-content3\">\n        <div class=\"content-space spt-spacing-x--3 user-content\">\n          <span class=\" spt-spacing-y--1 subTitle1\">{{ customer.first_name + \" \" + customer.last_name }}</span>\n          <span class=\"shadow-text date body2\"\n            >Member Since: {{ customer.date_created * 1000 | date:'mediumDate' }}</span\n          >\n        </div>\n      </div>\n      <div class=\"sub-content3\">\n        <div class=\"content-space \">\n          <div class=\"content-icon\">\n            <spt-icon\n              class=\"icons\"\n              [color]=\"'#4f4e4d'\"\n              [name]=\"email\"\n            ></spt-icon>\n            <span class=\"spt-spacing-y--1 shadow-text padding-left body2\">Email</span>\n          </div>\n          <div class=\"sub-content4 text-email body1\">\n            <span class=\"padding-left\">{{ customer.email }}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"content-space spt-spacing-x--3 sub-content3 \">\n        <div class=\"content-icon\">\n          <spt-icon\n            class=\"icons\"\n            [color]=\"'#4f4e4d'\"\n            [name]=\"call\"\n          ></spt-icon>\n          <span class=\"spt-spacing-y--1 shadow-text padding-left body2\">Phone</span>\n        </div>\n        <div class=\"sub-content4 body1\">\n          <span class=\"padding-left\">{{ customer.phone || '---' }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Customer Card -->\n\n  <!-- Start Campaign Card -->\n  <div class=\"col campaign-col\" *ngIf=\"campaign\">\n    <div class=\"body campaign-body\">\n      <div class=\"campaign-icon\">\n        <spt-icon\n          [size]=\"32\"\n          color=\"#4F4E4D\"\n          [name]=\"\n            campaign.notification_template.medium.id == 1\n              ? email\n              : campaign.notification_template.medium.id == 3\n              ? smartphone\n              : sms\n          \"\n        ></spt-icon>\n        <span class=\"shadow-text\">\n          <b *ngIf=\"campaign.notification_template.medium.name === 'sms'\">{{\n            campaign.notification_template.medium.name | uppercase\n          }}</b>\n          <b *ngIf=\"campaign.notification_template.medium.name !== 'sms'\">{{\n            campaign.notification_template.medium.name | titlecase\n          }}</b>\n        </span>\n      </div>\n    </div>\n    <div class=\"content campaign-content\">\n      <div class=\"sub-content3\" *ngIf=\"campaign\">\n        <div class=\"sub-content1\">\n          <spt-badge\n            class=\"badge\"\n            [color]=\"campaignColor\"\n            [name]=\"getCampaignStatus(campaign)\"\n          ></spt-badge>\n          <span class=\"shadow-text date padding-left\"\n            >Created:\n            {{ campaign.date_created * 1000 | date: \"MMM d, y\" }}</span\n          >\n        </div>\n        <span>{{ campaign.name }}</span>\n        <div class=\"sub-content2 shadow-text\">\n          <ng-content select=\"div.target-group\"></ng-content>\n        </div>\n      </div>\n    </div>\n    <div class=\"content campaign-content\">\n      <span\n        *ngIf=\"campaign.status.id != CAMPAIGN_STATUS.INACTIVE\"\n        style=\"display: flex\"\n      >\n        <div class=\"printer-container\">\n          <span class=\"shadow-text\">Send</span>\n          <div class=\"printer\">\n            <span>{{ getCampaignMetric(\"Send\", campaign) }}</span>\n          </div>\n        </div>\n        <div class=\"sendIcon\">\n          <spt-icon [name]=\"send\"></spt-icon>\n        </div>\n        <div class=\"printer-container\">\n          <span class=\"shadow-text\">Open</span>\n          <div class=\"printer\">\n            <span>{{ getCampaignMetric(\"Open\", campaign) }}</span>\n          </div>\n        </div>\n        <div class=\"sendIcon\">\n          <spt-icon [name]=\"send\"></spt-icon>\n        </div>\n        <div class=\"printer-container\">\n          <span class=\"shadow-text\">Visit</span>\n          <div class=\"printer\">\n            <span>{{ getCampaignMetric(\"Visit\", campaign) }}</span>\n          </div>\n        </div>\n        <div class=\"sendIcon\">\n          <spt-icon [name]=\"send\"></spt-icon>\n        </div>\n        <div class=\"printer-container\">\n          <span class=\"shadow-text\">Spend</span>\n          <div class=\"printer\">\n            <span>{{ getCampaignMetric(\"Spend\", campaign) }}</span>\n          </div>\n        </div>\n      </span>\n      <div class=\"menu-content\">\n        <ng-content select=\"div.menu\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <!-- End Campaign Card -->\n\n  <!-- Start Gift Card -->\n  <div class=\"col gift-col\" *ngIf=\"giftManagement\">\n    <div class=\"body gift-body\">\n      <div class=\"campaign\">\n        <spt-icon\n          class=\"icons\"\n          [toolTipTitle]=\"redeem\"\n          [name]=\"redeem\"\n        ></spt-icon>\n      </div>\n    </div>\n    <div class=\"content gift-content\">\n      <div class=\"content\">\n        <div class=\"sub-content1\">\n          <spt-badge\n            class=\"badge\"\n            [name]=\"giftManagement.deliverProcess | uppercase\"\n            color=\"#66BB6A\"\n          ></spt-badge>\n          <span class=\"shadow-text date padding-left\"\n            >Created: {{ giftManagement.dateCreated }}</span\n          >\n        </div>\n        <span\n          ><b>ID: {{ giftManagement.id }}</b></span\n        >\n      </div>\n    </div>\n    <div class=\"content gift-content\">\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon\n            class=\"icons\"\n            [toolTipTitle]=\"email\"\n            [name]=\"email\"\n          ></spt-icon>\n          <span class=\"shadow-text padding-left\">Email</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ giftManagement.email }}</span>\n        </div>\n      </div>\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon\n            class=\"icons\"\n            [toolTipTitle]=\"call\"\n            [name]=\"call\"\n          ></spt-icon>\n          <span class=\"shadow-text padding-left\">Phone</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ giftManagement.phone }}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col3\">\n      <spt-button\n        [size]=\"buttonSize\"\n        [type]=\"btnType\"\n        [text]=\"'CANCEL'\"\n        (click)=\"cancel()\"\n      ></spt-button>\n      <spt-button\n        [size]=\"buttonSize\"\n        [type]=\"btnType\"\n        [text]=\"'GO TO GUEST'\"\n        (click)=\"goToGuest()\"\n      ></spt-button>\n    </div>\n  </div>\n  <!-- End Gift Card -->\n</div>\n",
                styles: [".card,.customerCard{display:flex;justify-content:flex-start;border:1px solid #e2e2e2;border-radius:4px;font-family:Nunito Sans;font-style:normal;font-weight:700;font-size:14px;background:#fff;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;overflow:hidden;height:100%;margin-bottom:24px}.card:hover{cursor:pointer}.card:active,.customerCard:active{background-color:#f3f3f3}.col,.content{display:flex;flex-direction:row;width:100%}.content{justify-content:space-around}.body{flex-direction:row;align-items:center;background-color:#ffebee;height:88px;min-width:88px}.body,.sub-content3{display:flex;justify-content:center}.sub-content3{height:100%;flex:1;flex-direction:column}.sub-content4{margin-left:20px}.campaign-col{display:flex;flex-direction:row;width:100%}.campaign-body{height:120px;min-width:120px}.campaign-icon{display:flex;flex-direction:column}.gift-col{display:flex;flex-direction:row;width:100%}.gift-content{align-items:center}.gift-body{height:120px;min-width:120px}.col1{display:flex;flex-direction:row}.sub-content1{display:flex;padding-bottom:10px}.sub-content1 nz-tag{margin:0}.sub-content2{display:flex;align-items:center}.shadow-text{color:#4f4e4d}.date{color:#909090}.padding-left{padding-left:16px}.col2{display:flex;flex-direction:row;align-items:center}.printer-container{display:flex;flex-direction:column;justify-content:center}.printer{display:flex;align-items:center;min-width:80px;height:48px;background-color:#f3f3f3;border-radius:4px;padding:10px}.sendIcon{padding-top:30px;margin:0 15px 0 10px}.menu-content{padding-bottom:60px}.col3{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 15px}.text-email{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}spt-badge{font-weight:400}.subTitle1{font-family:Nunito Sans;font-style:normal;font-weight:700;font-size:16px;line-height:24px}.body1{font-size:14px}.body1,.body2{font-family:Nunito Sans;font-style:normal;font-weight:400;line-height:24px}.body2{font-size:12px}.content-icon{display:flex;flex-direction:row;align-items:center}.user-content{min-width:220px;display:flex;flex-direction:column}spt-icon{transform:translateY(-2px)}"]
            },] }
];
CardComponent.ctorParameters = () => [];
CardComponent.propDecorators = {
    campaign: [{ type: Input }],
    customer: [{ type: Input }],
    giftManagement: [{ type: Input }],
    checked: [{ type: Input }],
    disableCheckbox: [{ type: Input }],
    option: [{ type: Input }],
    cancel: [{ type: Input }],
    goToGuest: [{ type: Input }],
    onSelect: [{ type: Output }]
};

const appCheckCircleIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    name: 'check-circle'
};

const appExpandIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5v14c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1zm18 0v14c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1zm-7 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 00-.85.36V11H9V9.21c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79A.5.5 0 009 14.8V13h6z"/></svg>`,
    name: 'expand'
};

const appFavoriteIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.67 19.8C5.15 14.85 1.95 12.16 2 8.41c.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51z"/></svg>`,
    name: 'favorite'
};

const appHomeIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    name: 'home'
};

const appSearchIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.29 18.88l-5.56-5.56c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44a6.511 6.511 0 00-7.72 7.72c.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56a.996.996 0 101.41-1.41zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"/></svg>`,
    name: 'search'
};

const appSettingsIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 00-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 000 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>`,
    name: 'settings'
};

const appCheckCircleOutlineIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
    name: 'check-circle-outline'
};

const actionIcons = [
    appAccountBoxIcon,
    appCheckCircleIcon,
    appCheckCircleOutlineIcon,
    appExpandIcon,
    appFavoriteIcon,
    appHomeIcon,
    appLogoutIcon,
    appRedeemIcon,
    appSearchIcon,
    appSettingsIcon
];

const appErrorIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`,
    name: 'error'
};

const appWarningIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
    name: 'warning'
};

const alertIcons = [appErrorIcon, appWarningIcon];

const appRecentActorsIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM8 7.75c1.52 0 2.75 1.23 2.75 2.75S9.52 13.25 8 13.25s-2.75-1.23-2.75-2.75S6.48 7.75 8 7.75zM13 17H3v-.4c0-.79.46-1.53 1.19-1.83C5.36 14.27 6.65 14 8 14s2.64.27 3.81.76c.73.31 1.19 1.04 1.19 1.84v.4zM21 6v12c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zM18 19c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1z"/></svg>`,
    name: 'recent-actors'
};

const avIcons = [appRecentActorsIcon];

const appDraftsIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg>`,
    name: 'drafts'
};

const communicationIcons = [
    appCallIcon,
    appDraftsIcon,
    appEmailIcon
];

const appAddIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>`,
    name: 'add'
};

const appAddCircleOutlineIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    name: 'add-circle-outline'
};

const appReportIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59zM12 13c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/></svg>`,
    name: 'report'
};

const appSendIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 5.51v3.71c0 .46.31.86.76.97L11 12l-7.24 1.81c-.45.11-.76.51-.76.97v3.71c0 .72.73 1.2 1.39.92l15.42-6.49c.82-.34.82-1.5 0-1.84L4.39 4.58C3.73 4.31 3 4.79 3 5.51z"/></svg>`,
    name: 'send'
};

const contentIcons = [appAddCircleOutlineIcon, appAddIcon, appReportIcon, appSendIcon];

const fileIcons = [appUploadFileIcon];

const hardwareIcons = [appKeyboardTabIcon, appSmartphoneIcon];

const appEditIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    name: 'edit'
};

const appWbIncandescentIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 6c.56 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zM18.01 7.91l.71-.71a.996.996 0 10-1.41-1.41l-.71.71a.996.996 0 000 1.41c.38.38 1.02.38 1.41 0zM19 13c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1 .45-1 1zM3 14h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zM5.99 7.91A.996.996 0 107.4 6.5l-.71-.71A.996.996 0 105.28 7.2l.71.71zM9 16.98V20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3.02c1.43-1.08 2.28-2.9 1.91-4.91-.36-1.95-1.9-3.55-3.84-3.95A4.995 4.995 0 007 13c0 1.63.79 3.06 2 3.98zm2 .92c.32.06.66.1 1 .1.34 0 .68-.04 1-.1V20h-2v-2.1z"/></svg>`,
    name: 'wb-incandescent'
};

const imageIcons = [appEditIcon, appWbIncandescentIcon];

const appPlaceIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`,
    name: 'place'
};

const mapsIcons = [appPlaceIcon];

const appCalendarIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>`,
    name: 'calendar'
};

const appCalendarDateRangeIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/></svg>`,
    name: 'calendar-date-range'
};

const appCalendarTodayIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"/></svg>`,
    name: 'calendar-today'
};

const appDownloadIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`,
    name: 'download'
};

const appScheduleIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
    name: 'schedule'
};

const appSettingsSuggestIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17.41 6.59L15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9l-1.09-2.41zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zm-5.04 1.65l1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.13.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.37s0 .24-.01.36zM13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"/></svg>`,
    name: 'settings-suggest'
};

const appDeleteIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,
    name: 'delete'
};

const appFileCopyIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>`,
    name: 'file-copy'
};

const appDesktopIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>`,
    name: 'desktop'
};

const appLinkIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>`,
    name: 'link'
};

const appHelpIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,
    name: 'help'
};

const appAccountBalanceIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z"/></svg>`,
    name: 'account-balance'
};

const appCreditCard = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>`,
    name: 'credit-card'
};

const appAnalyticsIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/></svg>`,
    name: 'analytics'
};

const appConnectIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 14H9a9 9 0 019-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2A2.99 2.99 0 016.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.97 4.97 0 003.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3a2.99 2.99 0 01-2.95-2.5h-2A4.97 4.97 0 0016 19.74V22h6v-2.5c0-.83-.67-1.5-1.5-1.5z"/></svg>`,
    name: 'connect'
};

const appLoyaltyIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27A2.5 2.5 0 0110.5 11c.69 0 1.32.28 1.77.74l.73.72.73-.73a2.5 2.5 0 013.54 3.54z"/></svg>`,
    name: 'loyalty'
};

const appPaymentsIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"/></svg>`,
    name: 'payments'
};

const appLockIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`,
    name: 'lock'
};

const appGavelIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.25 8.069l2.83-2.827 14.134 14.15-2.83 2.827zM9.486 3.827L12.314.998l5.657 5.656-2.828 2.83zM.999 12.315l2.828-2.829 5.657 5.657-2.828 2.828zM1 21h12v2H1z"/></svg>`,
    name: 'gavel'
};

const appPrivacyTipIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>`,
    name: 'privacy-tip'
};

const appQuizIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.99 13c-.59 0-1.05-.47-1.05-1.05 0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04-.01.58-.45 1.05-1.04 1.05zm2.5-6.17c-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c0-.41-.06-1.08.26-1.65.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.61.58 1.73.01 2.57z"/></svg>`,
    name: 'quiz'
};

const appOpenWithIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>`,
    name: 'open-with'
};

const appAutorenewIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 016 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>`,
    name: 'autorenew'
};

const appHighlightOffIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    name: 'highlight-off'
};

const appCallMergeIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></svg>`,
    name: 'call-merge'
};

const appCorporateFareIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z"/></svg>`,
    name: 'corporate-fare'
};

const appCircleIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>`,
    name: 'circle'
};

const appRemoveIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>`,
    name: 'remove'
};

const appRemoveRedEyeIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
    name: 'remove-red-eye'
};

const appVerticalSplitIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z"/></svg>`,
    name: 'vertical-split'
};

const appOpenInNew = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
    name: 'open-in-new'
};

const appLabelIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/></svg>`,
    name: 'label'
};

const appInfoIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
    name: 'info'
};

const appArrowDropDownIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>`,
    name: 'arrow-drop-down'
};

const appArrowDropUpIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14l5-5 5 5z"/></svg>`,
    name: 'arrow-drop-up'
};

const appContentCopyIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`,
    name: 'content-copy'
};

const appFileUploadIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>`,
    name: 'file-upload'
};

const appRestoreIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>`,
    name: 'restore'
};

const miscIcons = [
    appAccountBalanceIcon,
    appAnalyticsIcon,
    appArrowDropDownIcon,
    appArrowDropUpIcon,
    appAutorenewIcon,
    appCalendarIcon,
    appCalendarDateRangeIcon,
    appCalendarTodayIcon,
    appCallMergeIcon,
    appCircleIcon,
    appConnectIcon,
    appContentCopyIcon,
    appCorporateFareIcon,
    appCreditCard,
    appDeleteIcon,
    appDesktopIcon,
    appDownloadIcon,
    appFileCopyIcon,
    appFileUploadIcon,
    appGavelIcon,
    appHelpIcon,
    appHighlightOffIcon,
    appInfoIcon,
    appLinkIcon,
    appLabelIcon,
    appLockIcon,
    appLoyaltyIcon,
    appOpenWithIcon,
    appOpenInNew,
    appPaymentsIcon,
    appPrivacyTipIcon,
    appQuizIcon,
    appRemoveIcon,
    appRemoveRedEyeIcon,
    appRestoreIcon,
    appScheduleIcon,
    appSettingsSuggestIcon,
    appVerticalSplitIcon
];

const appArrowBackIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>`,
    name: 'arrow-back'
};

const appArrowDownwardIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 000 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 10-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>`,
    name: 'arrow-downward'
};

const appArrowForwardIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"/></svg>`,
    name: 'arrow-forward'
};

const appArrowUpwardIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 000-1.41l-6.59-6.59a.996.996 0 00-1.41 0l-6.6 6.58a.996.996 0 101.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"/></svg>`,
    name: 'arrow-upward'
};

const appCancelBlackIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9 1.5A7.493 7.493 0 001.5 9c0 4.148 3.353 7.5 7.5 7.5 4.148 0 7.5-3.352 7.5-7.5 0-4.147-3.352-7.5-7.5-7.5zm3.217 9.668a.747.747 0 11-1.057 1.057L9 10.057l-2.168 2.168a.747.747 0 11-1.057-1.057L7.942 9l-2.16-2.168A.747.747 0 116.84 5.775L9 7.942l2.168-2.167a.747.747 0 111.057 1.057L10.057 9l2.16 2.168z"/></svg>`,
    name: 'cancel-black'
};

const appCheckIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6.7l-8.48 8.48-3.54-3.54a.996.996 0 10-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a.999.999 0 00-.01-1.42c-.37-.38-1-.38-1.39.01z"/></svg>`,
    name: 'check'
};

const appChevronLeftIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,
    name: 'chevron-left'
};

const appChevronRightIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,
    name: 'chevron-right'
};

const appClearIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>`,
    name: 'clear'
};

const appFirstPageIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1016.3 6.7l-4.59 4.59a.996.996 0 000 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 00-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/></svg>`,
    name: 'first-page'
};

const appLastPageIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 107.7 17.3l4.59-4.59a.996.996 0 000-1.41L7.7 6.7a.996.996 0 00-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/></svg>`,
    name: 'last-page'
};

const appRefreshIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.65 6.35a7.95 7.95 0 00-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 007.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 01-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0112 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"/></svg>`,
    name: 'refresh'
};

const appMoreHorizIcon = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>`,
    name: 'more-horiz'
};

const navigationIcons = [
    appArrowBackIcon,
    appArrowDownwardIcon,
    appArrowForwardIcon,
    appArrowUpwardIcon,
    appCancelBlackIcon,
    appCheckIcon,
    appChevronLeftIcon,
    appChevronRightIcon,
    appClearIcon,
    appEastIcon,
    appExpandLessIcon,
    appExpandMoreIcon,
    appFirstPageIcon,
    appLastPageIcon,
    appMoreVertIcon,
    appMoreHorizIcon,
    appRefreshIcon
];

const appPriorityHighIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21a2 2 0 100-4 2 2 0 000 4zM12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`,
    name: 'priority-high'
};

const notificationIcons = [appPriorityHighIcon, appSmsIcon];

const socialIcons = [appPeopleIcon];

const appCheckBoxIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.88 15.54l-2.83-2.83a.996.996 0 111.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 111.41 1.41l-5.66 5.66a.984.984 0 01-1.4 0z"/></svg>`,
    name: 'check-box'
};

const appCheckBoxOutlineBlankIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 19H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`,
    name: 'check-box-outline-blank'
};

const appIndeterminateCheckBoxIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/></svg>`,
    name: 'indeterminate-check-box'
};

const appRadioButtonCheckedIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12 17a5 5 0 100-10 5 5 0 000 10z"/></svg>`,
    name: 'radio-button-checked'
};

const appRadioButtonUncheckedIcon = {
    data: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
    name: 'radio-button-unchecked'
};

const toggleIcons = [appCheckBoxOutlineBlankIcon, appCheckBoxIcon, appIndeterminateCheckBoxIcon, appRadioButtonCheckedIcon, appRadioButtonUncheckedIcon];

class SpComponentsComponent {
    constructor(iconReg) {
        this.iconReg = iconReg;
        this.registerIcons(this.iconReg);
    }
    ngOnInit() {
    }
    registerIcons(iconReg) {
        // Action Icons
        actionIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Alert Icons
        alertIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // AV Icons
        avIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Communications Icons
        communicationIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Content Icons
        contentIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // File Icons
        fileIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Hardware Icons
        hardwareIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Image Icons
        imageIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Maps Icons
        mapsIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Misc Icons
        miscIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Navigation Icons
        navigationIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Notification Icons
        notificationIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Social Icons
        socialIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
        // Toggle Icons
        toggleIcons.forEach(element => {
            iconReg.addSvg(element.name, element.data);
        });
    }
}
SpComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sp-components',
                template: '',
                encapsulation: ViewEncapsulation.None
            },] }
];
SpComponentsComponent.ctorParameters = () => [
    { type: SvgIconRegistryService }
];

class DatePickerComponent extends FormFieldManager {
    constructor(_renderer) {
        super(_renderer);
        /* date format (and acceptable inputs). default: 'dd\/MM\/yyyy */
        this.dateFormat = 'dd/MM/yyyy';
        this.disabledDate = (current) => {
            if (this.min && this.max == null) {
                return differenceInCalendarDays(current, this.min) < 0;
            }
            if (this.max && this.min == null) {
                return differenceInCalendarDays(current, this.max) > 0;
            }
            if (this.min && this.max) {
                return differenceInCalendarDays(current, this.min) < 0 || differenceInCalendarDays(current, this.max) > 0;
            }
            return null;
        };
    }
    /**
     * override: inherited writeValue
     */
    writeValue(obj) {
        this.value = obj;
        this.checkDirty();
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-date-picker',
                template: "<div class=\"spt-input-container text-field-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n    <nz-date-picker\n            [class]=\"size\"\n            nzPlaceHolder=\" \"\n            [nzFormat]=\"dateFormat\"\n            [style.background-color]=\"backgroundColor\"\n            [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'has-right-icon': !!endIcon, 'disabled-state': isDisabled}\"\n            [(ngModel)]=\"value\" (ngModelChange)=\"changeAction($event)\" [nzDisabledDate]=\"disabledDate\"></nz-date-picker>\n\n\n    <!-- label -->\n    <label class=\"text-field-label label\"\n           [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true
                    }
                ],
                styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DatePickerComponent.propDecorators = {
    dateFormat: [{ type: Input }],
    nzDatePickerComponent: [{ type: ViewChild, args: [NzDatePickerComponent,] }]
};

class ProgressCircleComponent {
    constructor() {
        this.showPercent = true;
        this.color = '#FF9900';
        this.width = 45;
        this.strokeWidth = 9;
    }
}
ProgressCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-progress-circle',
                template: "<nz-progress [ngClass]=\"{'colored': color != '#FF9900'}\" [nzPercent]=\"percent\"\n             [nzShowInfo]=\"showPercent\"\n             [nzStrokeColor]=\"color\"\n             [nzWidth]=\"width\"\n             [nzStrokeWidth]=\"strokeWidth\"\n             nzType=\"circle\">\n</nz-progress>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["nz-progress.colored svg path.ant-progress-circle-trail{stroke:hsla(0,0%,100%,.7)!important}"]
            },] }
];
ProgressCircleComponent.ctorParameters = () => [];
ProgressCircleComponent.propDecorators = {
    percent: [{ type: Input }],
    showPercent: [{ type: Input }],
    color: [{ type: Input }],
    width: [{ type: Input }],
    strokeWidth: [{ type: Input }]
};

class RangeCalendarComponent {
    constructor() {
        /* range start date */
        this.startDate = new Date();
        /* range end date */
        this.endDate = new Date();
        /* on change event */
        this.onChange = new EventEmitter();
        this.disabledDate = (current) => {
            if (this.min && this.max == null) {
                return differenceInCalendarDays(current, this.min) < 0;
            }
            if (this.max && this.min == null) {
                return differenceInCalendarDays(current, this.max) > 0;
            }
            if (this.min && this.max) {
                return differenceInCalendarDays(current, this.min) < 0 || differenceInCalendarDays(current, this.max) > 0;
            }
            return null;
        };
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.startDate || changes.endDate) {
            this.range = [this.startDate, this.endDate];
        }
    }
}
RangeCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-range-calendar',
                template: "<nz-range-picker nzInline\n                 [(ngModel)]=\"range\"\n                 [nzInputReadOnly]=\"true\"\n                 (ngModelChange)=\"onChange.emit($event)\"\n                 [nzDisabledDate]=\"disabledDate\">\n</nz-range-picker>\n",
                styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.form-field.large{padding:14px 10px;height:50px}.form-field.large+label.label{top:14px}.form-field.medium{padding:10px;height:42px}.form-field.medium+label.label{top:10px}.form-field.small{padding:8px 10px;height:34px}.form-field.small+label.label{top:8px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label.label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label.label,.form-field.item-focus+label.label,.form-field:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.show-placeholder::-moz-placeholder, .text-field-container nz-date-picker.show-placeholder::-moz-placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.show-placeholder::placeholder,.text-field-container nz-date-picker.show-placeholder::placeholder{visibility:visible!important;opacity:1!important}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:14px 10px;height:50px}.spt-input-container input.large+label.label,.spt-input-container nz-date-picker.large+label.label{top:14px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:10px;height:42px}.spt-input-container input.medium+label.label,.spt-input-container nz-date-picker.medium+label.label{top:10px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:8px 10px;height:34px}.spt-input-container input.small+label.label,.spt-input-container nz-date-picker.small+label.label{top:8px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label.label,.spt-input-container nz-date-picker.has-left-icon+label.label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label.label,.spt-input-container input.item-focus+label.label,.spt-input-container input:focus+label.label,.spt-input-container nz-date-picker.ant-picker-focused+label.label,.spt-input-container nz-date-picker.item-focus+label.label,.spt-input-container nz-date-picker:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:transparent!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{color:#909090}.spt-input-container input.dirty:hover+label.label,.spt-input-container nz-date-picker.dirty:hover+label.label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label.label,.spt-input-container input.dirty:focus+label.label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label.label,.spt-input-container nz-date-picker.dirty:focus+label.label{color:#f90}.spt-input-container input.dirty+label.label,.spt-input-container nz-date-picker.dirty+label.label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label.label,.spt-input-container nz-date-picker+label.label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #b1b1b1!important}.search-wrapper.large{padding:14px 10px;height:50px}.search-wrapper.large+label.label{top:14px}.search-wrapper.medium{padding:10px;height:42px}.search-wrapper.medium+label.label{top:10px}.search-wrapper.small{padding:8px 10px;height:34px}.search-wrapper.small+label.label{top:8px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label.label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label.label,.search-wrapper.item-focus+label.label,.search-wrapper:focus+label.label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input{border:none!important;height:calc(100% - 2px)}.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:nowrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
RangeCalendarComponent.ctorParameters = () => [];
RangeCalendarComponent.propDecorators = {
    startDate: [{ type: Input }],
    endDate: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    onChange: [{ type: Output }]
};

registerLocaleData(en);
const ɵ0 = en_US;
class SpComponentsModule {
}
SpComponentsModule.decorators = [
    { type: NgModule, args: [{
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
                    ProgressCircleComponent,
                    CheckboxComponent,
                    RadioComponent,
                    SwitchComponent,
                    SliderComponent,
                    TabComponent,
                    TooltipComponent,
                    ElevationComponent,
                    SpacingComponent,
                    IconComponent,
                    DataVisualizationComponent,
                    DialogsComponent,
                    TableComponent,
                    UploadComponent,
                    HeaderComponent,
                    CardComponent,
                    DatePickerComponent,
                    RangeCalendarComponent
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
                    ProgressCircleComponent,
                    CheckboxComponent,
                    RadioComponent,
                    SwitchComponent,
                    SliderComponent,
                    TabComponent,
                    TooltipComponent,
                    ElevationComponent,
                    SpacingComponent,
                    IconComponent,
                    DataVisualizationComponent,
                    DialogsComponent,
                    TableComponent,
                    UploadComponent,
                    HeaderComponent,
                    CardComponent,
                    DatePickerComponent,
                    RangeCalendarComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    RouterModule,
                    AngularSvgIconModule.forRoot(),
                    ReactiveFormsModule,
                    PortalModule,
                    OverlayModule,
                    ...NZMODULES,
                    NzNoAnimationModule,
                ],
                providers: [{ provide: NZ_I18N, useValue: ɵ0 }],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarComponent, BackNavigationComponent, BadgeComponent, BreadcrumbComponent, ButtonComponent, ButtonSize, ButtonType, CardComponent, CheckboxComponent, ChipComponent, DataVisualizationComponent, DatePickerComponent, DialogsComponent, DividerComponent, DropdownComponent, ElevationComponent, HeaderComponent, ICardType, MenuComponent, ProgressBarComponent, ProgressCircleComponent, RadioComponent, SearchComponent, SideNavigationComponent, SideNavigationType, SidebarComponent, SliderComponent, SnackbarComponent, SpComponentsComponent, SpComponentsModule, SpacingComponent, StepsComponent, SwitchComponent, TabComponent, TableComponent, TagType, TextFieldComponent, TooltipComponent, UploadComponent, actionIcons, alertIcons, avIcons, communicationIcons, contentIcons, fileIcons, hardwareIcons, imageIcons, mapsIcons, miscIcons, navigationIcons, notificationIcons, socialIcons, toggleIcons, ɵ0, FormFieldManager as ɵa, BannerComponent as ɵb, appRecentActorsIcon as ɵba, appCallIcon as ɵbb, appDraftsIcon as ɵbc, appEmailIcon as ɵbd, appAddCircleOutlineIcon as ɵbe, appAddIcon as ɵbf, appReportIcon as ɵbg, appSendIcon as ɵbh, appUploadFileIcon as ɵbi, appKeyboardTabIcon as ɵbj, appSmartphoneIcon as ɵbk, appEditIcon as ɵbl, appWbIncandescentIcon as ɵbm, appPlaceIcon as ɵbn, appAccountBalanceIcon as ɵbo, appAnalyticsIcon as ɵbp, appArrowDropDownIcon as ɵbq, appArrowDropUpIcon as ɵbr, appAutorenewIcon as ɵbs, appCalendarIcon as ɵbt, appCalendarDateRangeIcon as ɵbu, appCalendarTodayIcon as ɵbv, appCallMergeIcon as ɵbw, appCircleIcon as ɵbx, appConnectIcon as ɵby, appContentCopyIcon as ɵbz, DropdownService as ɵc, appCorporateFareIcon as ɵca, appCreditCard as ɵcb, appDeleteIcon as ɵcc, appDesktopIcon as ɵcd, appDownloadIcon as ɵce, appFileCopyIcon as ɵcf, appFileUploadIcon as ɵcg, appGavelIcon as ɵch, appHelpIcon as ɵci, appHighlightOffIcon as ɵcj, appInfoIcon as ɵck, appLinkIcon as ɵcl, appLabelIcon as ɵcm, appLockIcon as ɵcn, appLoyaltyIcon as ɵco, appOpenWithIcon as ɵcp, appOpenInNew as ɵcq, appPaymentsIcon as ɵcr, appPrivacyTipIcon as ɵcs, appQuizIcon as ɵct, appRemoveIcon as ɵcu, appRemoveRedEyeIcon as ɵcv, appRestoreIcon as ɵcw, appScheduleIcon as ɵcx, appSettingsSuggestIcon as ɵcy, appVerticalSplitIcon as ɵcz, OverlayTemplateComponent as ɵd, appArrowBackIcon as ɵda, appArrowDownwardIcon as ɵdb, appArrowForwardIcon as ɵdc, appArrowUpwardIcon as ɵdd, appCancelBlackIcon as ɵde, appCheckIcon as ɵdf, appChevronLeftIcon as ɵdg, appChevronRightIcon as ɵdh, appClearIcon as ɵdi, appEastIcon as ɵdj, appExpandLessIcon as ɵdk, appExpandMoreIcon as ɵdl, appFirstPageIcon as ɵdm, appLastPageIcon as ɵdn, appMoreVertIcon as ɵdo, appMoreHorizIcon as ɵdp, appRefreshIcon as ɵdq, appPriorityHighIcon as ɵdr, appSmsIcon as ɵds, appPeopleIcon as ɵdt, appCheckBoxOutlineBlankIcon as ɵdu, appCheckBoxIcon as ɵdv, appIndeterminateCheckBoxIcon as ɵdw, appRadioButtonCheckedIcon as ɵdx, appRadioButtonUncheckedIcon as ɵdy, OptionComponent as ɵe, SearchService as ɵf, SearchOptionComponent as ɵg, SearchTemplateComponent as ɵh, MenuService as ɵi, MenuItemComponent as ɵj, MenuTriggerDirective as ɵk, IconComponent as ɵl, RangeCalendarComponent as ɵm, NZMODULES as ɵn, appAccountBoxIcon as ɵo, appCheckCircleIcon as ɵp, appCheckCircleOutlineIcon as ɵq, appExpandIcon as ɵr, appFavoriteIcon as ɵs, appHomeIcon as ɵt, appLogoutIcon as ɵu, appRedeemIcon as ɵv, appSearchIcon as ɵw, appSettingsIcon as ɵx, appErrorIcon as ɵy, appWarningIcon as ɵz };
//# sourceMappingURL=spoonity-sp-components.js.map
