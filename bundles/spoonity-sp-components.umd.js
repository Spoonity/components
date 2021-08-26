(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/affix'), require('ng-zorro-antd/alert'), require('ng-zorro-antd/auto-complete'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/back-top'), require('ng-zorro-antd/badge'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/button'), require('ng-zorro-antd/calendar'), require('ng-zorro-antd/card'), require('ng-zorro-antd/carousel'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/collapse'), require('ng-zorro-antd/comment'), require('ng-zorro-antd/date-picker'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/layout'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/message'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/notification'), require('ng-zorro-antd/page-header'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/progress'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/steps'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/table'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/tag'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/upload'), require('@angular/forms'), require('@angular/common/http'), require('@angular/common'), require('@angular/common/locales/en'), require('angular-svg-icon'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('@angular/cdk/a11y'), require('@angular/router'), require('ng2-charts'), require('ng-zorro-antd/i18n'), require('date-fns'), require('ng-zorro-antd/core/no-animation')) :
    typeof define === 'function' && define.amd ? define('@spoonity/sp-components', ['exports', '@angular/core', 'ng-zorro-antd/affix', 'ng-zorro-antd/alert', 'ng-zorro-antd/auto-complete', 'ng-zorro-antd/avatar', 'ng-zorro-antd/back-top', 'ng-zorro-antd/badge', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/button', 'ng-zorro-antd/calendar', 'ng-zorro-antd/card', 'ng-zorro-antd/carousel', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/collapse', 'ng-zorro-antd/comment', 'ng-zorro-antd/date-picker', 'ng-zorro-antd/divider', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/grid', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/layout', 'ng-zorro-antd/menu', 'ng-zorro-antd/message', 'ng-zorro-antd/modal', 'ng-zorro-antd/notification', 'ng-zorro-antd/page-header', 'ng-zorro-antd/pagination', 'ng-zorro-antd/progress', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/slider', 'ng-zorro-antd/steps', 'ng-zorro-antd/switch', 'ng-zorro-antd/table', 'ng-zorro-antd/tabs', 'ng-zorro-antd/tag', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/upload', '@angular/forms', '@angular/common/http', '@angular/common', '@angular/common/locales/en', 'angular-svg-icon', '@angular/cdk/portal', '@angular/cdk/overlay', '@angular/cdk/a11y', '@angular/router', 'ng2-charts', 'ng-zorro-antd/i18n', 'date-fns', 'ng-zorro-antd/core/no-animation'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.spoonity = global.spoonity || {}, global.spoonity['sp-components'] = {}), global.ng.core, global.affix, global.alert, global['auto-complete'], global.avatar, global['back-top'], global.badge, global.breadcrumb, global.button, global.calendar, global.card, global.carousel, global.checkbox, global.collapse, global.comment, global['date-picker'], global.divider, global.dropdown, global.grid, global.icon, global.input, global['input-number'], global.layout, global.menu, global.message, global.modal, global.notification, global['page-header'], global.pagination, global.progress, global.radio, global.select, global.slider, global.steps, global.switch, global.table, global.tabs, global.tag, global.tooltip, global.upload, global.ng.forms, global.ng.common.http, global.ng.common, global.ng.common.locales.en, global['angular-svg-icon'], global.ng.cdk.portal, global.ng.cdk.overlay, global.ng.cdk.a11y, global.ng.router, global['ng2-charts'], global.i18n, global.dateFns, global.noAnimation));
}(this, (function (exports, core, affix, alert, autoComplete, avatar, backTop, badge, breadcrumb, button, calendar, card, carousel, checkbox, collapse, comment, datePicker, divider, dropdown, grid, icon, input, inputNumber, layout, menu, message, modal, notification, pageHeader, pagination, progress, radio, select, slider, steps, _switch, table, tabs, tag, tooltip, upload, forms, http, common, en, angularSvgIcon, portal, overlay, a11y, router, ng2Charts, i18n, dateFns, noAnimation) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var en__default = /*#__PURE__*/_interopDefaultLegacy(en);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var NZMODULES = [
        affix.NzAffixModule,
        alert.NzAlertModule,
        autoComplete.NzAutocompleteModule,
        avatar.NzAvatarModule,
        backTop.NzBackTopModule,
        badge.NzBadgeModule,
        breadcrumb.NzBreadCrumbModule,
        button.NzButtonModule,
        calendar.NzCalendarModule,
        card.NzCardModule,
        carousel.NzCarouselModule,
        checkbox.NzCheckboxModule,
        collapse.NzCollapseModule,
        comment.NzCommentModule,
        datePicker.NzDatePickerModule,
        divider.NzDividerModule,
        dropdown.NzDropDownModule,
        dropdown.NzContextMenuServiceModule,
        grid.NzGridModule,
        icon.NzIconModule,
        input.NzInputModule,
        inputNumber.NzInputNumberModule,
        layout.NzLayoutModule,
        menu.NzMenuModule,
        modal.NzModalModule,
        notification.NzNotificationModule,
        pageHeader.NzPageHeaderModule,
        pagination.NzPaginationModule,
        progress.NzProgressModule,
        radio.NzRadioModule,
        select.NzSelectModule,
        slider.NzSliderModule,
        steps.NzStepsModule,
        _switch.NzSwitchModule,
        table.NzTableModule,
        tabs.NzTabsModule,
        tag.NzTagModule,
        tooltip.NzToolTipModule,
        upload.NzUploadModule,
        message.NzMessageModule,
    ];

    exports.ButtonType = void 0;
    (function (ButtonType) {
        ButtonType["primary"] = "primary";
        ButtonType["secondary"] = "default";
        ButtonType["tertiary"] = "link";
    })(exports.ButtonType || (exports.ButtonType = {}));
    exports.ButtonSize = void 0;
    (function (ButtonSize) {
        ButtonSize["large"] = "large";
        ButtonSize["medium"] = "default";
        ButtonSize["small"] = "small";
    })(exports.ButtonSize || (exports.ButtonSize = {}));
    exports.SideNavigationType = void 0;
    (function (SideNavigationType) {
        SideNavigationType["menu"] = "menu";
        SideNavigationType["subMenu"] = "subMenu";
        SideNavigationType["menuGroup"] = "menuGroup";
        SideNavigationType["menuItem"] = "menuItem";
    })(exports.SideNavigationType || (exports.SideNavigationType = {}));
    exports.TagType = void 0;
    (function (TagType) {
        TagType["closeable"] = "closeable";
        TagType["default"] = "default";
        TagType["checkable"] = "checkable";
    })(exports.TagType || (exports.TagType = {}));
    exports.AvatarSize = void 0;
    (function (AvatarSize) {
        AvatarSize[AvatarSize["large"] = 48] = "large";
        AvatarSize[AvatarSize["medium"] = 40] = "medium";
        AvatarSize[AvatarSize["small"] = 32] = "small";
    })(exports.AvatarSize || (exports.AvatarSize = {}));
    exports.DividerType = void 0;
    (function (DividerType) {
        DividerType["vertical"] = "vertical";
        DividerType["horizontal"] = "horizontal";
    })(exports.DividerType || (exports.DividerType = {}));
    exports.ProgressType = void 0;
    (function (ProgressType) {
        ProgressType["line"] = "line";
        ProgressType["circle"] = "circle";
    })(exports.ProgressType || (exports.ProgressType = {}));
    exports.ICardType = void 0;
    (function (ICardType) {
        ICardType["sms"] = "sms";
        ICardType["customer"] = "customer";
        ICardType["gift"] = "giftManagement";
    })(exports.ICardType || (exports.ICardType = {}));

    var ChipComponent = /** @class */ (function () {
        function ChipComponent() {
            this.mode = exports.TagType.default;
            this.onCloseEvent = new core.EventEmitter();
            this.onCheckEvent = new core.EventEmitter();
        }
        ChipComponent.prototype.ngOnInit = function () {
            this.styles = { 'width.px': 20, 'height.px': 20 };
        };
        ChipComponent.prototype.onClose = function () {
            this.onCloseEvent.emit(true);
        };
        ChipComponent.prototype.checkChange = function (e) {
            this.checked = e;
            this.onCheckEvent.emit(e);
        };
        return ChipComponent;
    }());
    ChipComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-chip',
                    template: "<nz-tag\n  [nzMode]=\"mode\"\n  [nzChecked]=\"checked\"\n  [nzColor]=\"color\"\n  (nzOnClose)=\"onClose()\"\n  (nzCheckedChange)=\"checkChange($event)\"\n  [attr.disabled]=\"disabled\"\n>\n  <svg-icon\n    *ngIf=\"icon || checked\"\n    nz-icon\n    [name]=\"checked ? 'check' : icon\"\n    [svgStyle]=\"styles\"\n  ></svg-icon>\n  <span class=\"spt-spacing-x--1\">{{ text }}</span>\n</nz-tag>\n",
                    styles: [".ant-tag{height:32px!important;line-height:32px!important;font-size:14px}"]
                },] }
    ];
    ChipComponent.ctorParameters = function () { return []; };
    ChipComponent.propDecorators = {
        text: [{ type: core.Input }],
        color: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        mode: [{ type: core.Input }],
        checked: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        onCloseEvent: [{ type: core.Output }],
        onCheckEvent: [{ type: core.Output }]
    };

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.type = exports.ButtonType.primary;
            this.size = exports.ButtonSize.medium;
            this.B = exports.ButtonType;
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-button',
                    template: "<button nz-button nzNoAnimation [nzType]=\"type\" [nzSize]=\"size\" [disabled]=\"disabled\" [ngClass]=\"{'ant-btn-secondary': type === B.secondary, 'ant-btn-tertiary': type === B.tertiary, 'with-text': text != null}\">\n  <spt-icon *ngIf=\"leftIcon\" [name]=\"leftIcon\"></spt-icon>\n  <span *ngIf=\"text\" [ngClass]=\"{leftIcon: leftIcon,rightIcon: rightIcon}\">{{ text }}</span>\n  <spt-icon *ngIf=\"rightIcon\" [name]=\"rightIcon\"></spt-icon>\n</button>\n",
                    styles: [".leftIcon{margin-left:10px}.rightIcon{margin-right:10px}.ant-btn[disabled]{background-color:transparent}.ant-btn[disabled] span{color:#b1b1b1!important}"]
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        type: [{ type: core.Input }],
        size: [{ type: core.Input }],
        leftIcon: [{ type: core.Input }],
        rightIcon: [{ type: core.Input }],
        text: [{ type: core.Input }],
        disabled: [{ type: core.Input }]
    };

    var FormFieldManager = /** @class */ (function () {
        function FormFieldManager(_renderer) {
            this._renderer = _renderer;
            /* size specification (large or medium) -- default to medium if not provided */
            this.size = 'medium';
            /* value */
            this.value = null;
            /* ControlValueAccessor: onChange function **/
            this.onChange = function () { };
            /* ControlValueAccessor: onTouched function */
            this.onTouched = function () { };
        }
        FormFieldManager.prototype.ngOnChanges = function (changes) {
            if (changes.isDisabled) {
                this.setDisabledState(changes.isDisabled.currentValue);
            }
        };
        /**
         * ControlValueAccessor override: registerOnChange
         */
        FormFieldManager.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        /**
         * ControlValueAccessor override: registerOnTouched
         */
        FormFieldManager.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * ControlValueAccessor override: writeValue
         */
        FormFieldManager.prototype.writeValue = function (obj) {
            if (obj !== undefined) {
                this.value = obj;
                this.checkDirty();
            }
        };
        /**
         * on change action
         */
        FormFieldManager.prototype.changeAction = function ($event) {
            this.onChange($event);
            this.checkDirty();
        };
        FormFieldManager.prototype.setDisabledState = function (isDisabled) {
            this.isDisabled = isDisabled;
            if (this.textInput) {
                this._renderer.setProperty(this.textInput.nativeElement, 'disabled', isDisabled);
            }
        };
        /**
         * check dirty
         */
        FormFieldManager.prototype.checkDirty = function () {
            if (typeof this.value === 'string' || this.value instanceof String) {
                this.isDirty = this.value.trim() !== '';
            }
            else {
                this.isDirty = this.value != null;
            }
        };
        return FormFieldManager;
    }());
    FormFieldManager.decorators = [
        { type: core.Directive }
    ];
    FormFieldManager.ctorParameters = function () { return [
        { type: core.Renderer2 }
    ]; };
    FormFieldManager.propDecorators = {
        size: [{ type: core.Input }],
        label: [{ type: core.Input }],
        error: [{ type: core.Input }],
        startIcon: [{ type: core.Input }],
        endIcon: [{ type: core.Input }],
        hint: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        min: [{ type: core.Input }],
        max: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }],
        textInput: [{ type: core.ViewChild, args: ['input',] }]
    };

    var TextFieldComponent = /** @class */ (function (_super) {
        __extends(TextFieldComponent, _super);
        function TextFieldComponent(_renderer) {
            return _super.call(this, _renderer) || this;
        }
        TextFieldComponent.prototype.ngOnInit = function () {
        };
        /**
         * get current value length
         */
        TextFieldComponent.prototype.getLength = function () {
            if (!this.value) {
                return 0;
            }
            return this.value.length;
        };
        return TextFieldComponent;
    }(FormFieldManager));
    TextFieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-text-field',
                    template: "<div class=\"spt-input-container text-field-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input nz-input [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'has-right-icon': !!endIcon, 'has-length': !!max, 'disabled-state': isDisabled}\"\n           (click)=\"isDisabled ? $event.stopPropagation() : null\"\n           [(ngModel)]=\"value\"\n           (ngModelChange)=\"changeAction($event)\"\n           [attr.type]=\"type\"\n           [attr.step]=\"step\"\n           [attr.min]=\"min\"\n           [attr.max]=\"max\"\n           [attr.maxlength]=\"maxlength\"\n           [class]=\"size\" placeholder=\"{{placeholder}}\"\n           [attr.disabled]=\"isDisabled\"\n           [attr.readonly]=\"isDisabled\"\n           [style.background-color]=\"backgroundColor\">\n\n    <!-- label -->\n    <label class=\"text-field-label label\" [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- maxlength -->\n    <label class=\"text-field-bottom-label length-label\" *ngIf=\"maxlength\">{{getLength()}}/{{maxlength}}</label>\n\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!endIcon && !error\" class=\"text-field-icon right-icon\">\n        <svg-icon name=\"{{endIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n</div>\n\n\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return TextFieldComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label,.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:12px 10px}.spt-input-container input.large+label,.spt-input-container nz-date-picker.large+label{top:12px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:8px 10px}.spt-input-container input.medium+label,.spt-input-container nz-date-picker.medium+label{top:8px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:6px 10px}.spt-input-container input.small+label,.spt-input-container nz-date-picker.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label,.spt-input-container nz-date-picker.has-left-icon+label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label,.spt-input-container input.item-focus+label,.spt-input-container input:focus+label,.spt-input-container nz-date-picker.ant-picker-focused+label,.spt-input-container nz-date-picker.item-focus+label,.spt-input-container nz-date-picker:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label,.spt-input-container nz-date-picker.dirty:hover+label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label,.spt-input-container input.dirty:focus+label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label,.spt-input-container nz-date-picker.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label,.spt-input-container nz-date-picker+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label,.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover,.search-wrapper nz-date-picker,.search-wrapper nz-date-picker:focus,.search-wrapper nz-date-picker:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
                },] }
    ];
    TextFieldComponent.ctorParameters = function () { return [
        { type: core.Renderer2 }
    ]; };
    TextFieldComponent.propDecorators = {
        type: [{ type: core.Input }],
        step: [{ type: core.Input }],
        maxlength: [{ type: core.Input }]
    };

    var BannerComponent = /** @class */ (function () {
        function BannerComponent() {
            this.bannerList = [];
            this.closeCallback = new core.EventEmitter();
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
        BannerComponent.prototype.onCloseButtonClick = function (id) {
            var _this = this;
            this.close[id] = true;
            setTimeout(function () {
                _this._removeBanner(id);
            }, 200);
        };
        /* remove banner */
        BannerComponent.prototype._removeBanner = function (id) {
            var remove = this.bannerList.filter(function (b) { return b.id !== id; });
            this.bannerList = __spread(remove);
        };
        return BannerComponent;
    }());
    BannerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-banner',
                    template: "<div *ngFor=\"let banner of bannerList\" class=\"spt-spacing-y--1\">\n    <div class=\"spt-elevation--6 banner-component banner-{{banner.type}}\" [ngClass]=\"{'banner-hide': close[banner.id]}\">\n        <div class=\"banner-icon\">\n            <svg-icon name=\"{{icon[banner.type]}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n        <div class=\"banner-message banner-message-action\">{{banner.message}}</div>\n        <div class=\"banner-close-action\" (click)=\"onCloseButtonClick(banner.id)\">\n            <nz-divider nzType=\"vertical\"></nz-divider>\n            <div class=\"banner-icon close-icon\">\n                <svg-icon name=\"clear\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n            </div>\n        </div>\n    </div>\n</div>\n",
                    styles: [".banner-component{min-height:48px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;left:16px;top:16px;border-radius:4px;padding:12px 16px;display:flex;align-items:center}.banner-component.banner-hide{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out}.banner-component.banner-error{background-color:#ef5350}.banner-component.banner-warning{background-color:#f7ad00}.banner-component.banner-info{background-color:#067bc2}.banner-component.banner-success{background-color:#4caf50}.banner-component .banner-message{color:#fff;padding-left:10px}.banner-component .banner-message.banner-message-action{padding-right:16px}.banner-component .banner-icon{height:24px}.banner-component .banner-icon svg path:last-child{fill:#fff}.banner-component .banner-close-action{margin-left:auto;display:flex;align-items:center;cursor:pointer}.banner-component .banner-close-action .ant-divider.ant-divider-vertical{height:24px!important;margin:0!important;background-color:hsla(0,0%,100%,.32);top:0}.banner-component .banner-close-action .close-icon{padding-left:16px}"]
                },] }
    ];
    BannerComponent.propDecorators = {
        bannerList: [{ type: core.Input }],
        closeCallback: [{ type: core.Output }]
    };

    var OverlayTemplateComponent = /** @class */ (function () {
        function OverlayTemplateComponent(overlay) {
            this.overlay = overlay;
            this.showing = false;
        }
        OverlayTemplateComponent.prototype.ngOnInit = function () {
        };
        OverlayTemplateComponent.prototype.show = function () {
            var _this = this;
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
            this.overlayRef.attach(this.contentTemplate);
            this.syncWidth();
            this.overlayRef.backdropClick().subscribe(function () { return _this.hide(); });
            this.showing = true;
        };
        OverlayTemplateComponent.prototype.hide = function () {
            this.overlayRef.detach();
            this.showing = false;
        };
        OverlayTemplateComponent.prototype.onWinResize = function () {
            this.syncWidth();
        };
        OverlayTemplateComponent.prototype.visibilityChange = function () {
            if (document.hidden) {
                if (this.overlayRef) {
                    this.hide();
                }
            }
        };
        OverlayTemplateComponent.prototype.onFocus = function () {
            if (this.overlayRef) {
                this.hide();
            }
        };
        OverlayTemplateComponent.prototype.syncWidth = function () {
            if (!this.overlayRef) {
                return;
            }
            var refRect = this.reference.getBoundingClientRect();
            this.overlayRef.updateSize({ width: refRect.width });
        };
        OverlayTemplateComponent.prototype.getOverlayConfig = function () {
            var positionStrategy = this.overlay.position()
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
            return new overlay.OverlayConfig({
                positionStrategy: positionStrategy,
                hasBackdrop: true,
                backdropClass: 'cdk-overlay-transparent-backdrop'
            });
        };
        return OverlayTemplateComponent;
    }());
    OverlayTemplateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-overlay-template',
                    template: "<ng-template cdk-portal=\"\">\n    <ng-content></ng-content>\n</ng-template>\n"
                },] }
    ];
    OverlayTemplateComponent.ctorParameters = function () { return [
        { type: overlay.Overlay }
    ]; };
    OverlayTemplateComponent.propDecorators = {
        reference: [{ type: core.Input }],
        contentTemplate: [{ type: core.ViewChild, args: [portal.CdkPortal, { static: true },] }],
        onWinResize: [{ type: core.HostListener, args: ['window:resize',] }],
        visibilityChange: [{ type: core.HostListener, args: ['document:visibilitychange',] }],
        onFocus: [{ type: core.HostListener, args: ['window:blur',] }]
    };

    var DropdownService = /** @class */ (function () {
        function DropdownService() {
        }
        DropdownService.prototype.register = function (select) {
            this.select = select;
        };
        DropdownService.prototype.getSelect = function () {
            return this.select;
        };
        return DropdownService;
    }());
    DropdownService.decorators = [
        { type: core.Injectable }
    ];

    var OptionComponent = /** @class */ (function () {
        function OptionComponent(_dropdownService) {
            this._dropdownService = _dropdownService;
            /* bind class.active */
            this.active = false;
            this.select = this._dropdownService.getSelect();
        }
        Object.defineProperty(OptionComponent.prototype, "selected", {
            /* bind class.selected */
            get: function () {
                return this.select.single_selectedOption === this;
            },
            enumerable: false,
            configurable: true
        });
        /* click event listener */
        OptionComponent.prototype.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.select.selectOption(this);
        };
        OptionComponent.prototype.ngOnInit = function () {
        };
        /**
         * get option label
         */
        OptionComponent.prototype.getLabel = function () {
            return this.text;
        };
        /**
         * set active status
         */
        OptionComponent.prototype.setActiveStyles = function () {
            this.active = true;
        };
        /**
         * set inactive status
         */
        OptionComponent.prototype.setInactiveStyles = function () {
            this.active = false;
        };
        /**
         * select option item
         */
        OptionComponent.prototype.selectItem = function () {
            this.select.selectOption(this);
        };
        return OptionComponent;
    }());
    OptionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-option',
                    template: "<div class=\"option-container\">\n    <!--- multiple selection (include checkbox -->\n    <div *ngIf=\"select.selectMultiple\" nz-col nzSpan=\"8\">\n        <label nz-checkbox nzValue=\"{{value}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\">{{text}}</label>\n    </div>\n\n    <!-- single selection -->\n    <div *ngIf=\"!select.selectMultiple\">{{text}}</div>\n</div>\n",
                    styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}:host{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}:host.active,:host.selected,:host:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host.selected,:host:hover{background-color:#f3f3f3}}:host.selected{font-weight:700}:host.active,:host:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host:hover{background-color:#f3f3f3}}:host.disabled{color:#93a1aa;cursor:auto}:host.disabled:focus,:host.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){:host.disabled:focus,:host.disabled:hover{background-color:#fff}}.option-container{display:flex}"]
                },] }
    ];
    OptionComponent.ctorParameters = function () { return [
        { type: DropdownService }
    ]; };
    OptionComponent.propDecorators = {
        value: [{ type: core.Input }],
        text: [{ type: core.Input }],
        selected: [{ type: core.HostBinding, args: ['class.selected',] }],
        active: [{ type: core.HostBinding, args: ['class.active',] }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };

    var DropdownComponent = /** @class */ (function (_super) {
        __extends(DropdownComponent, _super);
        function DropdownComponent(_dropdownService, _renderer) {
            var _this = _super.call(this, _renderer) || this;
            _this._dropdownService = _dropdownService;
            /* multiple selection: list of selected OptionComponent */
            _this.multiple_selectedOptions = [];
            /* multiple selection: list of selected option values */
            _this.multiple_selected = [];
            _this._dropdownService.register(_this);
            return _this;
        }
        DropdownComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.selectMultiple) {
                    _this.options.toArray().forEach(function (o) {
                        if (_this.multiple_selected.includes(o.value)) {
                            _this.selectOption(o);
                        }
                    });
                    _this.value = _this.multiple_selectedOptions.length ?
                        Array.from(_this.multiple_selectedOptions, function (o) { return o.text; }).join(', ')
                        : '';
                }
                else {
                    _this.single_selectedOption = _this.options.toArray().find(function (option) { return option.value === _this.single_selected; });
                    _this.value = _this.single_selectedOption ? _this.single_selectedOption.text : '';
                    _this.keyManager = new a11y.ActiveDescendantKeyManager(_this.options)
                        .withHorizontalOrientation('ltr')
                        .withVerticalOrientation()
                        .withWrap();
                }
                _this.checkDirty();
            }, 100);
        };
        /**
         *  override: inherited writeValue
         */
        DropdownComponent.prototype.writeValue = function (obj) {
            if (obj !== undefined) {
                if (this.selectMultiple) {
                    if (Array.isArray(obj)) {
                        this.multiple_selected = obj;
                    }
                }
                else {
                    this.single_selected = obj;
                }
                this.value = obj;
                this.checkDirty();
            }
        };
        /**
         * show dropdown action
         */
        DropdownComponent.prototype.showDropdown = function () {
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
        };
        /**
         * hide dropdown action
         */
        DropdownComponent.prototype.hideDropdown = function () {
            this.dropdown.hide();
        };
        /**
         * action when clicking the chevron icon (on the right)
         * @param event
         */
        DropdownComponent.prototype.onDropMenuIconClick = function (event) {
            var _this = this;
            event.stopPropagation();
            setTimeout(function () {
                _this.input.nativeElement.focus();
                _this.input.nativeElement.click();
            }, 10);
        };
        /**
         * select option
         * @param option
         */
        DropdownComponent.prototype.selectOption = function (option) {
            if (this.selectMultiple) {
                // already selected -- unselect item
                if (this.multiple_selectedOptions.find(function (o) { return o.value === option.value; })) {
                    this.multiple_selectedOptions = __spread(this.multiple_selectedOptions.filter(function (o) { return o.value !== option.value; }));
                    this.multiple_selected = __spread(this.multiple_selected.filter(function (s) { return s !== option.value; }));
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
                    Array.from(this.multiple_selectedOptions, function (o) { return o.text; }).join(', ')
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
        };
        /**
         * keydown event (applies only to single selection items)
         * @param event
         */
        DropdownComponent.prototype.onKeyDown = function (event) {
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
        };
        return DropdownComponent;
    }(FormFieldManager));
    DropdownComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-dropdown',
                    template: "<div #dropReference class=\"spt-input-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n\n    <input #input [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'disabled-state': isDisabled}\"\n           (click)=\"showDropdown()\"\n           [(ngModel)]=\"value\"\n           [style.background-color]=\"backgroundColor\"\n           (ngModelChange)=\"changeAction($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           class=\"{{size}} has-right-icon\"\n           [attr.disabled]=\"!!isDisabled ? isDisabled : null\" readonly autocomplete=\"off\">\n\n    <!-- label -->\n    <label class=\"text-field-label label\"\n           [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- hint -->\n    <label class=\"text-field-bottom-label hint-label\" *ngIf=\"!!hint && !error\">{{ hint }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- left icon -->\n    <span *ngIf=\"!!startIcon\" class=\"text-field-icon left-icon\">\n        <svg-icon name=\"{{startIcon}}\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- right icon (arrow) -->\n    <div *ngIf=\"!error\" class=\"text-field-icon right-icon\" (click)=\"onDropMenuIconClick($event)\">\n        <svg-icon name=\"expand-more\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </div>\n\n    <spt-overlay-template [reference]=\"dropReference\" #dropdownComp>\n        <div class=\"dropdown-options-container spt-elevation--5\">\n            <ng-content select=\"spt-option\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                    providers: [
                        DropdownService,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return DropdownComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".dropdown-options-container{width:100%;max-height:200px;overflow:auto}.spt-input-container input:focus~.right-icon,.spt-input-container input~.right-icon{transition:all .2s ease,background-color .2s ease-in}.spt-input-container input:focus~.right-icon{transform:rotate(180deg) translateY(50%)}.spt-input-container input:focus~.right-icon svg path:last-child{fill:#f90}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label,.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:12px 10px}.spt-input-container input.large+label,.spt-input-container nz-date-picker.large+label{top:12px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:8px 10px}.spt-input-container input.medium+label,.spt-input-container nz-date-picker.medium+label{top:8px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:6px 10px}.spt-input-container input.small+label,.spt-input-container nz-date-picker.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label,.spt-input-container nz-date-picker.has-left-icon+label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label,.spt-input-container input.item-focus+label,.spt-input-container input:focus+label,.spt-input-container nz-date-picker.ant-picker-focused+label,.spt-input-container nz-date-picker.item-focus+label,.spt-input-container nz-date-picker:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label,.spt-input-container nz-date-picker.dirty:hover+label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label,.spt-input-container input.dirty:focus+label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label,.spt-input-container nz-date-picker.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label,.spt-input-container nz-date-picker+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label,.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover,.search-wrapper nz-date-picker,.search-wrapper nz-date-picker:focus,.search-wrapper nz-date-picker:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
                },] }
    ];
    DropdownComponent.ctorParameters = function () { return [
        { type: DropdownService },
        { type: core.Renderer2 }
    ]; };
    DropdownComponent.propDecorators = {
        selectMultiple: [{ type: core.Input }],
        input: [{ type: core.ViewChild, args: ['input',] }],
        dropdown: [{ type: core.ViewChild, args: [OverlayTemplateComponent,] }],
        options: [{ type: core.ContentChildren, args: [OptionComponent,] }]
    };

    var SideNavigationComponent = /** @class */ (function () {
        function SideNavigationComponent() {
            this.items = new Array();
        }
        SideNavigationComponent.prototype.ngOnInit = function () {
        };
        return SideNavigationComponent;
    }());
    SideNavigationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-side-navigation',
                    template: "<!-- Menu Item -->\n<ng-container *ngIf=\"type == 'menuItem'\">\n  <li nz-menu-item class=\"side-navigation-component\">\n    <span>\n      <svg-icon\n        *ngIf=\"icon\"\n        nz-icon\n        [svgStyle]=\"{ 'height.px': 20 }\"\n        [name]=\"icon\"\n      ></svg-icon\n    ></span>\n    <span class=\"text\">{{ text }}</span>\n  </li>\n</ng-container>\n\n<!-- Sub Menu -->\n<ng-container *ngIf=\"type == 'subMenu'\">\n  <li nzOpen nz-submenu>\n    <span title\n      ><span>\n        <svg-icon\n          *ngIf=\"icon\"\n          nz-icon\n          [svgStyle]=\"{ 'height.px': 20 }\"\n          [name]=\"icon\"\n        ></svg-icon></span\n      ><span>{{ text }}</span></span\n    >\n    <ul>\n      <ng-container *ngFor=\"let item of items\">\n        <li nz-menu-item>\n          <span>\n            <svg-icon\n              *ngIf=\"item.icon\"\n              nz-icon\n              [svgStyle]=\"{ 'height.px': 20 }\"\n              [name]=\"item.icon\"\n            ></svg-icon\n          ></span>\n          <span class=\"text\">{{ item.text }}</span>\n        </li>\n      </ng-container>\n    </ul>\n  </li>\n</ng-container>\n\n<!-- Menu -->\n<ng-container *ngIf=\"type == 'menu'\">\n  <ul nz-menu></ul>\n</ng-container>\n",
                    styles: ["li[nz-menu-item] .text{font-size:16px;line-height:3px;font-weight:700;margin-left:34px}li[nz-menu-item]:hover{background-color:#f3f3f3;border-radius:0 28px 28px 0;cursor:pointer}li[nz-menu-item].active{background-color:#fff3e0}li[nz-menu-item].active svg-icon svg path:last-child{fill:#f90}.ant-menu-submenu-active{outline-style:none!important}svg-icon{transform:translateY(2px)}"]
                },] }
    ];
    SideNavigationComponent.ctorParameters = function () { return []; };
    SideNavigationComponent.propDecorators = {
        icon: [{ type: core.Input }],
        text: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        items: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };

    var SearchService = /** @class */ (function () {
        function SearchService() {
        }
        SearchService.prototype.register = function (select) {
            this.search = select;
        };
        SearchService.prototype.getSearch = function () {
            return this.search;
        };
        return SearchService;
    }());
    SearchService.decorators = [
        { type: core.Injectable }
    ];

    var SearchOptionComponent = /** @class */ (function () {
        function SearchOptionComponent(_searchService) {
            this._searchService = _searchService;
            /* bind class.active */
            this.active = false;
            this.search = this._searchService.getSearch();
        }
        Object.defineProperty(SearchOptionComponent.prototype, "selected", {
            /* bind class.selected */
            get: function () {
                return this.search.selected === this;
            },
            enumerable: false,
            configurable: true
        });
        /* click event listener */
        SearchOptionComponent.prototype.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.search.select(this.value);
        };
        SearchOptionComponent.prototype.ngOnInit = function () {
        };
        /**
         * set active status
         */
        SearchOptionComponent.prototype.setActiveStyles = function () {
            this.active = true;
        };
        /**
         * set inactive status
         */
        SearchOptionComponent.prototype.setInactiveStyles = function () {
            this.active = false;
        };
        return SearchOptionComponent;
    }());
    SearchOptionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-search-option',
                    template: "<div class=\"search-option-container\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.search-option-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.search-option-container.active,.search-option-container:hover{background-color:#f3f3f3}}"]
                },] }
    ];
    SearchOptionComponent.ctorParameters = function () { return [
        { type: SearchService }
    ]; };
    SearchOptionComponent.propDecorators = {
        value: [{ type: core.Input }],
        selected: [{ type: core.HostBinding, args: ['class.selected',] }],
        active: [{ type: core.HostBinding, args: ['class.active',] }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };

    var SearchComponent = /** @class */ (function (_super) {
        __extends(SearchComponent, _super);
        function SearchComponent(_searchService, _renderer) {
            var _this = _super.call(this, _renderer) || this;
            _this._searchService = _searchService;
            /* selected items (chips) */
            _this.selectedItems = [];
            /* filter action */
            _this.filter = new core.EventEmitter();
            /* item selected action */
            _this.itemSelected = new core.EventEmitter();
            /* item removed action */
            _this.itemRemoved = new core.EventEmitter();
            _this._searchService.register(_this);
            return _this;
        }
        SearchComponent.prototype.ngAfterViewInit = function () {
        };
        /**
         * override: on change action
         */
        SearchComponent.prototype.changeAction = function ($event) {
            this.onChange($event);
            this.checkDirty();
            if (this.value.length > 0) {
                if (!this.search.showing) {
                    this.showDropdown();
                }
                this.filterAction();
            }
            else {
                this.hideDropdown();
            }
        };
        /**
         * focus action
         */
        SearchComponent.prototype.focusAction = function () {
            if (this.launchOnFocus) {
                this.search.show();
            }
            this.focus = true;
        };
        /**
         * blur action
         */
        SearchComponent.prototype.blurAction = function () {
            this.focus = false;
        };
        /**
         * show options action
         */
        SearchComponent.prototype.showDropdown = function () {
            this.search.show();
        };
        /**
         * hide options action
         */
        SearchComponent.prototype.hideDropdown = function () {
            this.search.hide();
            this.focus = false;
        };
        /**
         * keydown event
         */
        SearchComponent.prototype.onKeyDown = function (event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                if (this.search.showing) {
                    this.hideDropdown();
                }
            }
        };
        /**
         * on select item
         */
        SearchComponent.prototype.select = function (selection) {
            this.itemSelected.emit(selection);
            this.hideDropdown();
        };
        /**
         * on filter action
         */
        SearchComponent.prototype.filterAction = function () {
            this.filter.emit();
        };
        /**
         * on close item
         */
        SearchComponent.prototype.onClose = function (selection) {
            this.itemRemoved.emit(selection);
        };
        return SearchComponent;
    }(FormFieldManager));
    SearchComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-search',
                    template: "<div #searchReference class=\"spt-input-container search-container\" [ngClass]=\"{'disabled-container': isDisabled}\" (click)=\"launchOnFocus ? focusAction() : null\">\n    <div class=\"search-wrapper {{size}} \" [ngClass]=\"{'item-focus': focus}\"\n         [style.background-color]=\"backgroundColor\">\n        <!-- search icon -->\n        <div class=\"search-icon left-icon\">\n            <svg-icon name=\"search\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n        </div>\n\n        <!-- selected items (chips) -->\n        <div class=\"selected-items spt-spacing-x--1\" *ngIf=\"selectedItems.length\">\n            <div class=\"selected-item\" *ngFor=\"let s of selectedItems\">\n                <spt-chip [text]=\"s.text\"\n                         [icon]=\"s.icon\" mode=\"closeable\"\n                         [color]=\"s.color\"\n                         (onCloseEvent)=\"onClose(s)\"></spt-chip>\n            </div>\n        </div>\n        <input #input *ngIf=\"(maximumSelection ? selectedItems.length < maximumSelection : true) && !readonly\"\n               (focus)=\"focusAction()\" (blur)=\"blurAction()\"\n               [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'disabled-state': isDisabled}\"\n               [style.background-color]=\"backgroundColor\"\n               [(ngModel)]=\"value\"\n               (ngModelChange)=\"changeAction($event)\"\n               (keydown)=\"onKeyDown($event)\"\n               placeholder=\"{{placeholder}}\" autocomplete=\"off\" [readonly]=\"readonly\">\n\n        <!-- because input is hidden on readonly mode display the placeholder separately -->\n        <p class=\"font-60\" *ngIf=\"readonly\" style=\"margin: 0; cursor: default\">{{placeholder}}</p>\n    </div>\n\n    <spt-overlay-template [reference]=\"searchReference\" #searchComp>\n        <div class=\"search-options-container spt-elevation--5\">\n            <ng-content select=\"spt-search-option\"></ng-content>\n            <ng-content select=\"div.search-override\"></ng-content>\n        </div>\n    </spt-overlay-template>\n\n</div>\n\n\n",
                    providers: [
                        SearchService,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return SearchComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".spt-input-container input::-moz-placeholder{visibility:visible!important}.spt-input-container input::placeholder{visibility:visible!important}.search-options-container{width:100%;max-height:200px;overflow:auto}", ".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label,.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:12px 10px}.spt-input-container input.large+label,.spt-input-container nz-date-picker.large+label{top:12px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:8px 10px}.spt-input-container input.medium+label,.spt-input-container nz-date-picker.medium+label{top:8px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:6px 10px}.spt-input-container input.small+label,.spt-input-container nz-date-picker.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label,.spt-input-container nz-date-picker.has-left-icon+label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label,.spt-input-container input.item-focus+label,.spt-input-container input:focus+label,.spt-input-container nz-date-picker.ant-picker-focused+label,.spt-input-container nz-date-picker.item-focus+label,.spt-input-container nz-date-picker:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label,.spt-input-container nz-date-picker.dirty:hover+label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label,.spt-input-container input.dirty:focus+label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label,.spt-input-container nz-date-picker.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label,.spt-input-container nz-date-picker+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label,.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover,.search-wrapper nz-date-picker,.search-wrapper nz-date-picker:focus,.search-wrapper nz-date-picker:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
                },] }
    ];
    SearchComponent.ctorParameters = function () { return [
        { type: SearchService },
        { type: core.Renderer2 }
    ]; };
    SearchComponent.propDecorators = {
        placeholder: [{ type: core.Input }],
        selectedItems: [{ type: core.Input }],
        maximumSelection: [{ type: core.Input }],
        launchOnFocus: [{ type: core.Input }],
        filter: [{ type: core.Output }],
        itemSelected: [{ type: core.Output }],
        itemRemoved: [{ type: core.Output }],
        search: [{ type: core.ViewChild, args: [OverlayTemplateComponent,] }],
        options: [{ type: core.ContentChildren, args: [SearchOptionComponent,] }]
    };

    var SearchTemplateComponent = /** @class */ (function () {
        function SearchTemplateComponent() {
        }
        SearchTemplateComponent.prototype.ngOnInit = function () {
        };
        return SearchTemplateComponent;
    }());
    SearchTemplateComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-search-template',
                    template: "<ng-template cdk-portal=\"\">\n    <ng-content></ng-content>\n</ng-template>\n",
                    styles: [""]
                },] }
    ];
    SearchTemplateComponent.ctorParameters = function () { return []; };

    var StepsComponent = /** @class */ (function () {
        function StepsComponent() {
            this.type = 'navigation';
            this.direction = 'horizontal';
            this.onIndexChangeEvent = new core.EventEmitter();
        }
        StepsComponent.prototype.ngOnInit = function () {
        };
        StepsComponent.prototype.onIndexChange = function (event) {
            this.onIndexChangeEvent.emit(event);
        };
        return StepsComponent;
    }());
    StepsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-steps',
                    template: "<nz-steps [nzCurrent]=\"current\" [nzType]=\"type\" (nzIndexChange)=\"onIndexChange($event)\" [nzDirection]=\"direction\">\n    <ng-container *ngFor=\"let step of steps; let idx = index\">\n        <!--- if status is not provided, do default -->\n        <nz-step *ngIf=\"!step.status\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n\n        <!--- if status is provided, use that status -->\n        <nz-step *ngIf=\"step.status\" [nzStatus]=\"current === idx ? 'process' : (step.status || 'wait')\" [nzTitle]=\"step.title\" [nzDescription]=\"step.description\" [nzDisabled]=\"preventFutureSteps ? current < idx : false\"></nz-step>\n    </ng-container>\n</nz-steps>\n",
                    styles: ["nz-step .ant-steps-item-finish .ant-steps-item-icon{background-color:#fff;border-color:#4caf50!important}nz-step{-webkit-user-select:none;-moz-user-select:none;user-select:none}"]
                },] }
    ];
    StepsComponent.ctorParameters = function () { return []; };
    StepsComponent.propDecorators = {
        current: [{ type: core.Input }],
        steps: [{ type: core.Input }],
        type: [{ type: core.Input }],
        direction: [{ type: core.Input }],
        preventFutureSteps: [{ type: core.Input }],
        onIndexChangeEvent: [{ type: core.Output }]
    };

    var MenuService = /** @class */ (function () {
        function MenuService() {
        }
        MenuService.prototype.register = function (menu) {
            this.menu = menu;
        };
        MenuService.prototype.getMenu = function () {
            return this.menu;
        };
        return MenuService;
    }());
    MenuService.decorators = [
        { type: core.Injectable }
    ];

    var MenuItemComponent = /** @class */ (function () {
        function MenuItemComponent(_menuService) {
            this._menuService = _menuService;
            /* bind class.active */
            this.active = false;
            this.menu = this._menuService.getMenu();
        }
        /* click event listener */
        MenuItemComponent.prototype.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.checkboxModel = !this.checkboxModel;
            this.menu.selectMenuItem(this);
        };
        MenuItemComponent.prototype.ngOnInit = function () {
            // verify input
            if (this.menu.multiple) {
                if (this.itemId == null) {
                    throw new Error('spt-menu-item: missing attribute: itemId for multiple selection');
                }
            }
        };
        /**
         * set active status
         */
        MenuItemComponent.prototype.setActiveStyles = function () {
            this.active = true;
        };
        /**
         * set inactive status
         */
        MenuItemComponent.prototype.setInactiveStyles = function () {
            this.active = false;
        };
        /**
         * select menu item
         */
        MenuItemComponent.prototype.selectItem = function () {
            this.menu.selectMenuItem(this);
        };
        /**
         * if multiple items can be selected
         */
        MenuItemComponent.prototype.isMultiple = function () {
            return this.menu.multiple;
        };
        return MenuItemComponent;
    }());
    MenuItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-menu-item',
                    template: "<div class=\"menu-item\" [ngClass]=\"{'multiple-menu-item': isMultiple(), 'single-menu-item': !isMultiple(), 'selected-item': isMultiple() && checkboxModel}\">\n\n    <!---- start icon ---->\n    <div class=\"menu-icon\" *ngIf=\"!!startIcon\">\n        <svg-icon *ngIf=\"!!startIcon\" nz-icon [name]=\"startIcon\" [svgStyle]=\"{ 'width.px':20, 'height.px':20 }\"></svg-icon>\n    </div>\n\n    <!---- left checkbox (if there is no start icon) ---->\n    <div *ngIf=\"isMultiple() && !startIcon\">\n        <label nz-checkbox nzValue=\"{{checkboxModel}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n\n    <!---- label ---->\n    <div [ngClass]=\"{'label': !!startIcon || isMultiple()}\"><ng-content></ng-content></div>\n\n    <!---- right checkbox (if there is a start icon) ---->\n    <div *ngIf=\"isMultiple() && !!startIcon\" class=\"right-checkbox\">\n        <label nz-checkbox nzValue=\"{{checkboxModel}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\"></label>\n    </div>\n</div>\n",
                    styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}"]
                },] }
    ];
    MenuItemComponent.ctorParameters = function () { return [
        { type: MenuService }
    ]; };
    MenuItemComponent.propDecorators = {
        itemId: [{ type: core.Input }],
        startIcon: [{ type: core.Input }],
        preventClose: [{ type: core.Input }],
        checkboxModel: [{ type: core.Input }],
        active: [{ type: core.HostBinding, args: ['class.active',] }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };

    var MenuComponent = /** @class */ (function () {
        function MenuComponent(_menuService) {
            this._menuService = _menuService;
            /* close menu when item is clicked */
            this.closeOnItemClick = true;
            /* toggle select all */
            this.toggleSelectAll = new core.EventEmitter();
            this.searchModelChange = new core.EventEmitter();
            /* selected items list (two-way binding) */
            this.selectedItems = [];
            this.selectedItemsChange = new core.EventEmitter();
            /* is the menu showing */
            this._menuShowing = false;
            this._menuService.register(this);
        }
        MenuComponent.prototype.ngOnInit = function () {
        };
        /**
         * toggle show state of the menu items
         */
        MenuComponent.prototype.toggleMenu = function () {
            this._menuShowing = !this.isShowing();
            if (this._menuShowing) {
                this.showMenu();
            }
            else {
                this.hideMenu();
            }
        };
        /**
         * show menu action
         */
        MenuComponent.prototype.showMenu = function () {
            this.menu.show();
            if (this.search) {
                try {
                    this.searchEl.nativeElement.focus();
                }
                catch (e) { }
            }
        };
        /**
         * hide menu action
         */
        MenuComponent.prototype.hideMenu = function () {
            this.menu.hide();
            this.searchModel = '';
            this.searchModelChange.emit(this.searchModel);
        };
        /**
         * visibility state of the overlay template
         */
        MenuComponent.prototype.isShowing = function () {
            return this.menu ? this.menu.showing : false;
        };
        /**
         * change model action
         */
        MenuComponent.prototype.change = function () {
            this.searchModelChange.emit(this.searchModel);
        };
        /**
         * select menu item
         */
        MenuComponent.prototype.selectMenuItem = function (item) {
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
                if (item.checkboxModel) {
                    if (!this.selectedItems.includes(item.itemId)) {
                        this.selectedItems.push(item.itemId);
                    }
                }
                else {
                    this.selectedItems = Array.from(this.selectedItems.filter(function (s) { return s !== item.itemId; }));
                    if (this.selectAllOption) {
                        this.selectAll = false;
                    }
                }
                this.selectedItemsChange.emit(this.selectedItems);
            }
        };
        /**
         * keydown event (escape is pressed)
         */
        MenuComponent.prototype.onKeyDown = function (event) {
            if (event.key === 'Escape' || event.key === 'Esc') {
                if (this.menu.showing) {
                    this.hideMenu();
                }
            }
        };
        /**
         * toggle select all
         */
        MenuComponent.prototype.toggleSelectAllAction = function (fromCheckbox) {
            if (!fromCheckbox) {
                this.selectAll = !this.selectAll;
            }
            this.toggleSelectAll.emit(this.selectAll);
        };
        return MenuComponent;
    }());
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-menu',
                    template: "<div #menuReference class=\"menu-wrapper\" [ngClass]=\"{'show-menu': isShowing()}\">\n    <spt-overlay-template [reference]=\"menuReference\" #menuComp>\n        <div class=\"menu-container spt-elevation--5\">\n\n            <!---- search ---->\n            <div *ngIf=\"search\" class=\"search-container spt-spacing--1\">\n                <input #searchEl\n                       placeholder=\"Search\"\n                       [(ngModel)]=\"searchModel\"\n                       (ngModelChange)=\"change()\"\n                       (keydown)=\"onKeyDown($event)\"/>\n            </div>\n\n            <!---- select all ---->\n            <div *ngIf=\"multiple && selectAllOption\" class=\"menu-item spt-spacing--1 multiple-menu-item\" (click)=\"toggleSelectAllAction()\">\n                <div>\n                    <label nz-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"toggleSelectAllAction(true)\"></label>\n                </div>\n                <div class=\"label\">Select All</div>\n            </div>\n\n            <!-- options list -->\n            <ng-content select=\"spt-menu-item\"></ng-content>\n        </div>\n    </spt-overlay-template>\n</div>\n\n",
                    providers: [MenuService],
                    styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}.menu-item{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.menu-item.selected,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.selected,.menu-item:hover{background-color:#f3f3f3}}.menu-item.selected{font-weight:700}.menu-item.active,.menu-item:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.menu-item.active,.menu-item:hover{background-color:#f3f3f3}}.menu-item:active{background-color:#e2e2e2;outline:none}@media screen and (-ms-high-contrast:active){.menu-item:active{background-color:#e2e2e2}}.menu-item.multiple-menu-item:active{background-color:#ffe1b4!important}.menu-item.selected-item{background-color:#fff3e0}.menu-item.disabled{color:#93a1aa;cursor:auto}.menu-item.disabled:focus,.menu-item.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){.menu-item.disabled:focus,.menu-item.disabled:hover{background-color:#fff}}.menu-item .menu-icon svg path:last-child{fill:#706f6e}.menu-item .label{margin-left:10px}.menu-icon,.menu-item{display:flex;align-items:center}.right-checkbox{margin-left:auto}.menu-wrapper{width:280px;visibility:hidden}.menu-container{width:100%;overflow:hidden}.search-container{background-color:#fff}.search-container input{padding:6px 10px;width:100%;color:#0d0c0b;border-radius:4px;border:1px solid #909090!important;outline:none}.search-container input:hover{border:1px solid #000!important}.search-container input.item-focus,.search-container input:focus{border:1px solid #f90!important;caret-color:#f90}.show-menu{visibility:visible}.select-all-container{display:flex;background-color:#fff}"]
                },] }
    ];
    MenuComponent.ctorParameters = function () { return [
        { type: MenuService }
    ]; };
    MenuComponent.propDecorators = {
        multiple: [{ type: core.Input }],
        closeOnItemClick: [{ type: core.Input }],
        search: [{ type: core.Input }],
        selectAllOption: [{ type: core.Input }],
        toggleSelectAll: [{ type: core.Output }],
        searchModel: [{ type: core.Input }],
        searchModelChange: [{ type: core.Output }],
        selectedItems: [{ type: core.Input }],
        selectedItemsChange: [{ type: core.Output }],
        searchEl: [{ type: core.ViewChild, args: ['searchEl',] }],
        menu: [{ type: core.ViewChild, args: [OverlayTemplateComponent,] }],
        menuItems: [{ type: core.ContentChildren, args: [MenuItemComponent,] }]
    };

    var MenuTriggerDirective = /** @class */ (function () {
        function MenuTriggerDirective() {
        }
        /* click event listener */
        MenuTriggerDirective.prototype.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.spMenuTrigger.toggleMenu();
        };
        return MenuTriggerDirective;
    }());
    MenuTriggerDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[spMenuTrigger]'
                },] }
    ];
    MenuTriggerDirective.propDecorators = {
        spMenuTrigger: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };

    var BackNavigationComponent = /** @class */ (function () {
        function BackNavigationComponent(_location, _router) {
            this._location = _location;
            this._router = _router;
        }
        BackNavigationComponent.prototype.ngOnInit = function () {
        };
        BackNavigationComponent.prototype.onBack = function (route) {
            if (route) {
                this._router.navigate([route]);
            }
            else {
                this._location.back();
            }
        };
        return BackNavigationComponent;
    }());
    BackNavigationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-back-navigation',
                    template: "<nz-page-header class=\"site-page-header\" (nzBack)=\"onBack(route)\" nzBackIcon [nzTitle]=\"title\" [nzSubtitle]=\"subTitle\">\n</nz-page-header>\n",
                    styles: [".site-page-header{padding:0}"]
                },] }
    ];
    BackNavigationComponent.ctorParameters = function () { return [
        { type: common.Location },
        { type: router.Router }
    ]; };
    BackNavigationComponent.propDecorators = {
        title: [{ type: core.Input }],
        subTitle: [{ type: core.Input }],
        route: [{ type: core.Input }]
    };

    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent() {
        }
        BreadcrumbComponent.prototype.ngOnInit = function () {
        };
        return BreadcrumbComponent;
    }());
    BreadcrumbComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-breadcrumb',
                    template: "<nz-breadcrumb [nzSeparator]=\"'>'\">\n    <ng-container *ngFor=\"let item of items\">\n        <nz-breadcrumb-item>\n            <a *ngIf=\"item.route\" [routerLink]=\"item.route\">{{item.label}}</a>\n            <span *ngIf=\"!item.route\">{{item.label}}</span>\n        </nz-breadcrumb-item>\n    </ng-container>\n</nz-breadcrumb>",
                    styles: [""]
                },] }
    ];
    BreadcrumbComponent.ctorParameters = function () { return []; };
    BreadcrumbComponent.propDecorators = {
        items: [{ type: core.Input }]
    };

    var SnackbarComponent = /** @class */ (function () {
        function SnackbarComponent(notification) {
            this.notification = notification;
        }
        SnackbarComponent.prototype.ngOnInit = function () {
        };
        SnackbarComponent.prototype.createSnackbar = function (snackbar) {
            this.notification.template(this.template, {
                nzStyle: {
                    background: '#0D0C0B',
                    color: 'white'
                },
                nzData: snackbar,
                nzPlacement: 'bottomLeft',
                nzClass: this.cssClass
            });
        };
        SnackbarComponent.prototype.onAction = function (callback) {
            callback();
        };
        return SnackbarComponent;
    }());
    SnackbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-snackbar',
                    template: "<ng-template #template let-snackbar=\"data\">\n    <div class=\"ant-notification-notice-content\">\n        <div>\n            <div class=\"ant-notification-notice-message\">\n                {{ snackbar.message }}\n            </div>\n            <div *ngIf=\"snackbar.description\" class=\"ant-notification-notice-description\">\n                {{ snackbar.description }}\n            </div>\n        </div>\n\n        <div class=\"action ant-notification-notice-btn\">\n            <span *ngIf=\"snackbar.actionMessage\" (click)=\"onAction(snackbar.actionEvent)\">\n                {{ snackbar.actionMessage | uppercase }}\n            </span>\n        </div>\n    </div>\n</ng-template>\n",
                    styles: [".ant-notification-notice-content{background-color:#0d0c0b;color:#fff;display:flex;align-items:center}.action{margin-left:auto}.ant-notification-notice-btn{color:#fff}.ant-notification-notice-message{color:#fff;margin-bottom:0!important}.ant-notification-notice-description{margin-top:5px}.ant-notification-notice-btn{float:left;margin-top:8px;cursor:pointer}"]
                },] }
    ];
    SnackbarComponent.ctorParameters = function () { return [
        { type: notification.NzNotificationService }
    ]; };
    SnackbarComponent.propDecorators = {
        template: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
        cssClass: [{ type: core.Input }]
    };

    var AvatarComponent = /** @class */ (function () {
        function AvatarComponent() {
        }
        AvatarComponent.prototype.ngOnInit = function () {
            this.styles = { 'background-color': this.backgroundColor, 'color': this.color };
        };
        return AvatarComponent;
    }());
    AvatarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-avatar',
                    template: "<nz-avatar [nzText]=\"text\" [nzSize]=\"size\" [ngStyle]=\"styles\"></nz-avatar>\n",
                    styles: ["nz-avatar{margin:10px}"]
                },] }
    ];
    AvatarComponent.ctorParameters = function () { return []; };
    AvatarComponent.propDecorators = {
        size: [{ type: core.Input }],
        text: [{ type: core.Input }],
        color: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }]
    };

    var BadgeComponent = /** @class */ (function () {
        function BadgeComponent() {
            this.fontSize = 14;
        }
        BadgeComponent.prototype.ngOnInit = function () {
        };
        return BadgeComponent;
    }());
    BadgeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-badge',
                    template: "\n<nz-tag class=\"badges\" nzStandalone [nzColor]=\"color\" [style.font-size]=\"fontSize + 'px'\" [style.line-height]=\"(fontSize + 2) + 'px'\">{{name}}</nz-tag>\n",
                    styles: [".badges{display:flex}.ant-tag{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;padding:4px 12px!important;height:-webkit-fit-content!important;height:-moz-fit-content!important;height:fit-content!important;border:none!important}"]
                },] }
    ];
    BadgeComponent.ctorParameters = function () { return []; };
    BadgeComponent.propDecorators = {
        name: [{ type: core.Input }],
        color: [{ type: core.Input }],
        fontSize: [{ type: core.Input }]
    };

    var DividerComponent = /** @class */ (function () {
        function DividerComponent() {
            this.type = exports.DividerType.horizontal;
        }
        DividerComponent.prototype.ngOnInit = function () {
        };
        return DividerComponent;
    }());
    DividerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-divider',
                    template: "<nz-divider class=\"divider\" [nzType]=\"type\"></nz-divider>",
                    styles: [".divider{height:1px;margin:0}"]
                },] }
    ];
    DividerComponent.ctorParameters = function () { return []; };
    DividerComponent.propDecorators = {
        type: [{ type: core.Input }]
    };

    var ProgressBarComponent = /** @class */ (function () {
        function ProgressBarComponent() {
            this.type = exports.ProgressType.line;
        }
        ProgressBarComponent.prototype.ngOnInit = function () {
        };
        return ProgressBarComponent;
    }());
    ProgressBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-progress-bar',
                    template: "<nz-progress [nzPercent]=\"percent\" [nzShowInfo]=\"info\" [nzType]=\"type\"></nz-progress>",
                    styles: [""]
                },] }
    ];
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent.propDecorators = {
        percent: [{ type: core.Input }],
        info: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.span = 8;
            this.onChangeEvent = new core.EventEmitter();
        }
        CheckboxComponent.prototype.ngOnInit = function () {
        };
        CheckboxComponent.prototype.onChange = function (e) {
            this.onChangeEvent.emit(e);
        };
        return CheckboxComponent;
    }());
    CheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-checkbox',
                    template: "<div nz-col [nzSpan]=\"span\"><label nz-checkbox [nzIndeterminate]=\"indeterminate\" [ngModel]=\"check\" (ngModelChange)=\"onChange($event)\" [nzValue]=\"value\">{{value}}</label></div>",
                    styles: [""]
                },] }
    ];
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        indeterminate: [{ type: core.Input }],
        check: [{ type: core.Input }],
        value: [{ type: core.Input }],
        onChangeEvent: [{ type: core.Output }]
    };

    var RadioButtonComponent = /** @class */ (function () {
        function RadioButtonComponent() {
            this.radioButtons = [
                { radioName: 'A', disable: false },
                { radioName: 'B', disable: true },
                { radioName: 'C', disable: false },
                { radioName: 'D', disable: false },
            ];
        }
        RadioButtonComponent.prototype.ngOnInit = function () { };
        return RadioButtonComponent;
    }());
    RadioButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-radio-button',
                    template: "<nz-radio-group \n[ngModel]=\"model\"\n>\n    <label\n    *ngFor=\"let btn of radioButtons\" \n    nz-radio \n    [nzValue]=\"btn.radioName\"\n    [nzDisabled]=\"btn.disable\"\n    >{{btn.radioName}}</label>\n</nz-radio-group>",
                    styles: [""]
                },] }
    ];
    RadioButtonComponent.ctorParameters = function () { return []; };
    RadioButtonComponent.propDecorators = {
        model: [{ type: core.Input }]
    };

    var SwitchComponent = /** @class */ (function () {
        function SwitchComponent() {
            this.on = false;
            this.onChanged = new core.EventEmitter();
        }
        SwitchComponent.prototype.ngOnInit = function () {
        };
        SwitchComponent.prototype.change = function () {
            this.onChanged.emit(this.on);
        };
        return SwitchComponent;
    }());
    SwitchComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-switch',
                    template: "<nz-switch [(ngModel)]=\"on\" (ngModelChange)=\"change()\"></nz-switch>\n",
                    styles: ["nz-switch{margin:10px}"]
                },] }
    ];
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        on: [{ type: core.Input }],
        onChanged: [{ type: core.Output }]
    };

    var SliderComponent = /** @class */ (function () {
        function SliderComponent() {
        }
        SliderComponent.prototype.ngOnInit = function () {
        };
        return SliderComponent;
    }());
    SliderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-slider',
                    template: "<nz-slider [nzMax]=\"max\" [nzDisabled]=\"disable\" [nzStep]=\"step\" [ngModel]=\"start\"></nz-slider>",
                    styles: [""]
                },] }
    ];
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        max: [{ type: core.Input }],
        disable: [{ type: core.Input }],
        step: [{ type: core.Input }],
        start: [{ type: core.Input }]
    };

    var TabComponent = /** @class */ (function () {
        function TabComponent() {
            this.index = 0;
            this.selectedIndexChange = new core.EventEmitter();
        }
        TabComponent.prototype.ngOnInit = function () {
        };
        return TabComponent;
    }());
    TabComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-tab',
                    template: "<nz-tabset [nzSelectedIndex]=\"index\" (nzSelectedIndexChange)=\"selectedIndexChange.emit($event)\">\n    <nz-tab *ngFor=\"let tab of tabs\" [nzTitle]=\"tab.name\" [nzDisabled]=\"tab.disabled\"></nz-tab>\n</nz-tabset>\n",
                    styles: [""]
                },] }
    ];
    TabComponent.ctorParameters = function () { return []; };
    TabComponent.propDecorators = {
        tabs: [{ type: core.Input }],
        index: [{ type: core.Input }],
        selectedIndexChange: [{ type: core.Output }]
    };

    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent() {
        }
        TooltipComponent.prototype.ngOnInit = function () {
        };
        return TooltipComponent;
    }());
    TooltipComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-tooltip',
                    template: "<span nz-tooltip [nzTooltipTitle]=\"title\">\n  <span *ngIf=\"content\">{{content}}</span>\n  <ng-content></ng-content>\n</span>\n",
                    styles: [""]
                },] }
    ];
    TooltipComponent.ctorParameters = function () { return []; };
    TooltipComponent.propDecorators = {
        title: [{ type: core.Input }],
        content: [{ type: core.Input }]
    };

    var ElevationComponent = /** @class */ (function () {
        function ElevationComponent() {
        }
        ElevationComponent.prototype.ngOnInit = function () {
        };
        return ElevationComponent;
    }());
    ElevationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-elevation',
                    template: "<div class=\"elevation\">\n    <div class=\"elevation-container\">\n        <p>01 dp</p>\n        <div class=\"spt-elevation--1 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>02 dp</p>\n        <div class=\"spt-elevation--2 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>06 dp</p>\n        <div class=\"spt-elevation--3 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>08 dp</p>\n        <div class=\"spt-elevation--4 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>12 dp</p>\n        <div class=\"spt-elevation--5 elevation-box\"></div>\n    </div>\n    <div class=\"elevation-container\">\n        <p>24 dp</p>\n        <div class=\"spt-elevation--6 elevation-box\"></div>\n    </div>\n</div>\n",
                    styles: [".elevation{display:flex;flex-wrap:wrap}.elevation .elevation-container{margin-top:20px}.elevation .elevation-container p{margin-bottom:5px}.elevation .elevation-container .elevation-box{width:280px;height:184px;margin:10px}"]
                },] }
    ];
    ElevationComponent.ctorParameters = function () { return []; };

    var SpacingComponent = /** @class */ (function () {
        function SpacingComponent() {
            this.spacing = [
                {
                    sectionName: '8px',
                    sectionClassName: 'spacing--8',
                    sections: [
                        { label: '8px (around)', className: 'spt-spacing--1' },
                        { label: '8px (vertical)', className: 'spt-spacing-y--1' },
                        { label: '8px (horizontal)', className: 'spt-spacing-x--1' },
                        { label: '8px (top)', className: 'spt-spacing-y-top--1' },
                        { label: '8px (bottom)', className: 'spt-spacing-y-bottom--1' },
                        { label: '8px (left)', className: 'spt-spacing-y-left--1' },
                        { label: '8px (right)', className: 'spt-spacing-y-right--1' },
                    ]
                },
                {
                    sectionName: '16px',
                    sectionClassName: 'spacing--16',
                    sections: [
                        { label: '16px (around)', className: 'spt-spacing--2' },
                        { label: '16px (top)', className: 'spt-spacing-y-top--2' },
                        { label: '8px (vertical)', className: 'spt-spacing-y--2' },
                        { label: '8px (horizontal)', className: 'spt-spacing-x--2' },
                        { label: '16px (bottom)', className: 'spt-spacing-y-bottom--2' },
                        { label: '16px (left)', className: 'spt-spacing-y-left--2' },
                        { label: '16px (right)', className: 'spt-spacing-y-right--2' },
                    ]
                }
            ];
            this.spacing = this.getSpacing();
        }
        SpacingComponent.prototype.ngOnInit = function () {
        };
        SpacingComponent.prototype.getSpacing = function () {
            var spacing = [];
            var offsetArr = [1, 2, 3, 6, 8, 10, 14];
            var sections = [
                { label: '(around)', className: 'spt-spacing' },
                { label: '(vertical)', className: 'spt-spacing-y' },
                { label: '(horizontal)', className: 'spt-spacing-x' },
                { label: '(top)', className: 'spt-spacing-y-top' },
                { label: '(bottom)', className: 'spt-spacing-y-bottom' },
                { label: '(left)', className: 'spt-spacing-y-left' },
                { label: '(right)', className: 'spt-spacing-y-right' },
            ];
            offsetArr.forEach(function (offset, i) {
                var size = 8 * offset;
                var currentSections = Array.from(sections, function (s) {
                    return {
                        label: size + "px " + s.label,
                        className: s.className + "--" + (i + 1)
                    };
                });
                var newSection = {
                    sectionClassName: "spacing--" + size,
                    sectionName: size + "px",
                    sections: currentSections
                };
                spacing.push(newSection);
            });
            return spacing;
        };
        return SpacingComponent;
    }());
    SpacingComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-spacing',
                    template: "<div class=\"spacing\">\n    <div *ngFor=\"let section of spacing\" class=\"spacing-section\">\n        <h3>{{ section.sectionName }}</h3>\n        <div class=\"spacing-container\">\n            <div *ngFor=\"let subsection of section.sections\" class=\"spacing-example\">\n                <div class=\"spacing-wrapper spt-elevation--2 {{ section.sectionClassName }} {{subsection.className}}\">\n                    <div class=\"spacing-box\">\n                        <p class=\"spacing-label\">{{ subsection.label }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                    styles: [".spacing .spacing-section{padding-top:20px}.spacing .spacing-section .spacing-container{display:flex;align-content:center;flex-wrap:wrap}.spacing .spacing-section .spacing-container .spacing-example{text-align:center;padding:10px}.spacing .spacing-section .spacing-container .spacing-example .spacing--8{background-color:rgba(239,83,80,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--16{background-color:rgba(236,64,122,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--24{background-color:rgba(171,71,188,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--48{background-color:rgba(126,87,194,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--64{background-color:rgba(92,107,192,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--80{background-color:rgba(66,165,245,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing--112{background-color:rgba(38,198,218,.3)}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box{width:80px;height:80px;background-color:#fff;display:flex;align-items:center;justify-content:center}.spacing .spacing-section .spacing-container .spacing-example .spacing-wrapper .spacing-box p{font-size:12px}"]
                },] }
    ];
    SpacingComponent.ctorParameters = function () { return []; };

    var IconComponent = /** @class */ (function () {
        function IconComponent() {
            this.color = '#0D0C0B';
            this.size = 20;
        }
        IconComponent.prototype.ngOnInit = function () { };
        return IconComponent;
    }());
    IconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-icon',
                    template: "<span nz-tooltip [nzTooltipTitle]=\"toolTipTitle\">\n  <svg-icon class=\"icons\" nz-icon [name]=\"name\" [svgStyle]=\"{'height':size + 'px', 'width':size + 'px', 'fill':color}\">\n  </svg-icon>\n</span>\n",
                    styles: [""]
                },] }
    ];
    IconComponent.ctorParameters = function () { return []; };
    IconComponent.propDecorators = {
        toolTipTitle: [{ type: core.Input }],
        name: [{ type: core.Input }],
        color: [{ type: core.Input }],
        size: [{ type: core.Input }]
    };

    var DataVisualizationComponent = /** @class */ (function () {
        function DataVisualizationComponent() {
        }
        DataVisualizationComponent.prototype.ngOnInit = function () {
        };
        return DataVisualizationComponent;
    }());
    DataVisualizationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-data-visualization',
                    template: "<div class=\"data-visualization\">\n  <span class=\"data-visualization-title\">{{ title }}</span>\n  <span class=\"data-visualization-description\">{{ description }}</span>\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".data-visualization{border:1px solid #e2e2e2;border-radius:4px;padding:32px;background-color:#fff}.data-visualization-title{display:flex;font-family:Nunito;font-style:normal;font-weight:700;font-size:48px;line-height:56px}.data-visualization-description{display:flex;font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:16px;line-height:24px}"]
                },] }
    ];
    DataVisualizationComponent.ctorParameters = function () { return []; };
    DataVisualizationComponent.propDecorators = {
        title: [{ type: core.Input }],
        description: [{ type: core.Input }]
    };

    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
            this.options = {};
            this.data = [];
            this.labels = [];
        }
        ChartComponent.prototype.ngOnInit = function () {
        };
        return ChartComponent;
    }());
    ChartComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-chart',
                    template: "<div style=\"width: 100%;\">\n  <canvas\n    baseChart\n    [chartType]=\"type\"\n    [datasets]=\"data\"\n    [labels]=\"labels\"\n    [options]=\"options\"\n    [legend]=\"true\"\n  >\n  </canvas>\n</div>\n",
                    styles: [""]
                },] }
    ];
    ChartComponent.ctorParameters = function () { return []; };
    ChartComponent.propDecorators = {
        options: [{ type: core.Input }],
        data: [{ type: core.Input }],
        labels: [{ type: core.Input }],
        type: [{ type: core.Input }]
    };
    exports.ChartType = void 0;
    (function (ChartType) {
        ChartType["pie"] = "pie";
        ChartType["doughnut"] = "doughnut";
        ChartType["bar"] = "bar";
        ChartType["line"] = "line";
        ChartType["polarArea"] = "polarArea";
        ChartType["radar"] = "radar";
        ChartType["horizontalBar"] = "horizontalBar";
    })(exports.ChartType || (exports.ChartType = {}));

    var DialogsComponent = /** @class */ (function () {
        function DialogsComponent(modal, viewContainerRef) {
            this.modal = modal;
            this.viewContainerRef = viewContainerRef;
        }
        DialogsComponent.prototype.createModal = function (dialog) {
            this.dialog = dialog;
            this.createTplModal(this.tplTitle, this.tplContent, this.tplFooter);
        };
        DialogsComponent.prototype.createTplModal = function (tplTitle, tplContent, tplFooter) {
            this.modalRef = this.modal.create({
                nzTitle: tplTitle,
                nzContent: tplContent,
                nzFooter: tplFooter,
                nzMaskClosable: false,
                nzClosable: true,
            });
        };
        DialogsComponent.prototype.ngOnInit = function () {
        };
        return DialogsComponent;
    }());
    DialogsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-dialogs',
                    template: "<ng-template #tplTitle>\n  <span class=\"title\">\n    {{ dialog.title }}\n  </span>\n</ng-template>\n<ng-template #tplContent>\n  <span class=\"content\">\n    {{ dialog.content }}\n  </span>\n</ng-template>\n<ng-template #tplFooter let-ref=\"modalRef\">\n  <button\n    nz-button\n    nzType=\"secondary\"\n    (click)=\"modalRef.destroy(); dialog.action1()\"\n  >\n    {{ dialog.action1Label }}\n  </button>\n  <button\n    nz-button\n    nzType=\"primary\"\n    (click)=\"modalRef.destroy(); dialog.action2()\"\n  >\n    {{ dialog.action2Label }}\n  </button>\n</ng-template>\n",
                    styles: [".title{font-family:Nunito;font-weight:700;font-size:24px;line-height:32px;color:#0d0c0b}.content,.title{font-style:normal}.content{font-family:Nunito Sans;font-weight:400;font-size:16px;line-height:24px;color:#4f4e4d}"]
                },] }
    ];
    DialogsComponent.ctorParameters = function () { return [
        { type: modal.NzModalService },
        { type: core.ViewContainerRef }
    ]; };
    DialogsComponent.propDecorators = {
        tplTitle: [{ type: core.ViewChild, args: ['tplTitle',] }],
        tplContent: [{ type: core.ViewChild, args: ['tplContent',] }],
        tplFooter: [{ type: core.ViewChild, args: ['tplFooter',] }]
    };

    var appExpandMoreIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M7.71 9.29l3.88 3.88 3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.29 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z\" fill=\"#0D0C0B\"/></svg>",
        name: 'expand-more'
    };

    var appLogoutIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5V5z\" fill=\"#0D0C0B\"/><path d=\"M20.65 11.65l-2.79-2.79a.501.501 0 00-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z\" fill=\"#0D0C0B\"/></svg>",
        name: 'logout'
    };

    var appAccountBoxIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'account-box'
    };

    var appExpandLessIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M7.71 15.29l3.88-3.88 3.88 3.88a.996.996 0 101.41-1.41l-4.59-4.59a.996.996 0 00-1.41 0l-4.59 4.59a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z\" fill=\"#0D0C0B\"/></svg>",
        name: 'expand-less'
    };

    var appKeyboardTabIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11.71 8.12L8.83 11H21c.55 0 1 .45 1 1s-.45 1-1 1H8.83l2.88 2.88a.996.996 0 11-1.41 1.41L5.71 12.7a.996.996 0 010-1.41L10.3 6.7a.996.996 0 011.41 0c.38.39.39 1.03 0 1.42zM4 7v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'keyboard-tab'
    };

    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent(_route, _router) {
            this._route = _route;
            this._router = _router;
            this.sidebarData = {};
            this.userDisplay = {};
            this.otherAccounts = [];
            this.AccountsDisplay = this.otherAccounts;
            this.multipleAccounts = false;
            this.avatarSize = exports.AvatarSize.medium;
            this.keyboarTab = appKeyboardTabIcon.name;
            this.expandLess = appExpandLessIcon.name;
            this.accountBox = appAccountBoxIcon.name;
            this.logoutIcon = appLogoutIcon.name;
            this.expandMore = appExpandMoreIcon.name;
            this.buttonType = exports.ButtonType.secondary;
            this.buttonSize = exports.ButtonSize.medium;
            this.iconColor = '#FFF';
            this.isCollapse = false;
            this.onToggleLogout = false;
            this.multipleAccountsSelection = false;
            this.MenuWidht = '280px';
            this.MenuHeight = '857px';
            this.OptionWidht = '240px';
            this.lineRight = '-20px';
        }
        SidebarComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.sidebarData.users.length > 1) {
                this.multipleAccounts = true;
            }
            this.sidebarData.users.forEach(function (user) {
                _this.sidebarData.users.indexOf(user) === 0 ? _this.userDisplay = user : _this.otherAccounts.push(user);
            });
        };
        SidebarComponent.prototype.onCollapse = function () {
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
        };
        SidebarComponent.prototype.onActive = function (option) {
            this.optionsData.forEach(function (e) {
                if (e.title === option.title) {
                    option.isActive = true;
                }
                else {
                    e.isActive = false;
                }
            });
            this._router.navigate([option.link], { relativeTo: this._route }).then();
        };
        SidebarComponent.prototype.toggleLogout = function () {
            if (this.onToggleLogout && !this.isCollapse) {
                this.onToggleLogout = false;
                this.MenuHeight = '857px';
            }
            else {
                this.onToggleLogout = true;
                this.MenuHeight = '780px';
            }
        };
        SidebarComponent.prototype.expandAccounts = function () {
            if (this.multipleAccountsSelection) {
                this.multipleAccountsSelection = false;
            }
            else {
                this.multipleAccountsSelection = true;
            }
        };
        SidebarComponent.prototype.switchAccount = function (account) {
            var _this = this;
            this.userDisplay = {};
            this.otherAccounts = [];
            this.sidebarData.users.forEach(function (user) {
                user.id === account.id ? _this.userDisplay = user : _this.otherAccounts.push(user);
            });
        };
        SidebarComponent.prototype.filter = function () {
            var _this = this;
            this.AccountsDisplay = [];
            this.otherAccounts.filter(function (user) {
                var test = user.name.toLocaleLowerCase().includes(_this.inputFilter.toLocaleLowerCase());
                if (test) {
                    _this.AccountsDisplay.push(user);
                }
            });
        };
        return SidebarComponent;
    }());
    SidebarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-sidebar',
                    template: "<div class=\"container\" [ngStyle]=\"{ width: MenuWidht }\">\n  <div class=\"user\">\n    <spt-avatar [text]=\"userDisplay.name.charAt(0).toUpperCase()\"></spt-avatar>\n    <div class=\"text\" *ngIf=\"!isCollapse\">\n      <span>{{ userDisplay.name }}</span>\n      <span>{{ userDisplay.company }}</span>\n    </div>\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"expandMore\"\n      [name]=\"expandMore\"\n      *ngIf=\"multipleAccounts && !isCollapse\"\n      (click)=\"expandAccounts()\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n    <div\n      *ngIf=\"multipleAccountsSelection && !isCollapse\"\n      class=\"multiAccount spt-elevation--3 elevation-box\"\n    >\n      <spt-text-field\n        [placeholder]=\"'Filter by name'\"\n        [(ngModel)]=\"inputFilter\"\n        (ngModelChange)=\"filter()\"\n      ></spt-text-field>\n      {{ inputFilter }}\n      <div\n        class=\"userMultiAccount\"\n        *ngFor=\"let account of AccountsDisplay\"\n        (click)=\"switchAccount(account)\"\n      >\n        <spt-avatar [text]=\"account.title.charAt(0).toUpperCase()\"></spt-avatar>\n        <div class=\"text-multiple-accounts\" *ngIf=\"!isCollapse\">\n          <span>{{ account.name }}</span>\n          <span>{{ account.company }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"menu\" [ngStyle]=\"{ height: MenuHeight }\">\n    <div\n      *ngFor=\"let option of optionsData\"\n      class=\"option\"\n      [ngStyle]=\"{ width: OptionWidht }\"\n      [ngClass]=\"{ active: option.isActive }\"\n      (click)=\"onActive(option)\"\n    >\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"option.title\"\n        [name]=\"option.icon.name\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <span *ngIf=\"!isCollapse\">{{ option.title }}</span>\n      <div\n        class=\"orange-line\"\n        [ngStyle]=\"{ right: lineRight }\"\n        *ngIf=\"option.isActive\"\n      ></div>\n    </div>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"collapse\" (click)=\"onCollapse()\">\n    <spt-icon\n      class=\"icons\"\n      [toolTipTitle]=\"keyboarTab\"\n      [name]=\"keyboarTab\"\n      [color]=\"iconColor\"\n    ></spt-icon>\n  </div>\n  <spt-divider></spt-divider>\n  <div class=\"user-email\">\n    <div class=\"user\">\n      <div class=\"text\" *ngIf=\"!isCollapse\">\n        <span>{{ userDisplay.name }}</span>\n        <span class=\"small\">{{ userDisplay.email }}</span>\n      </div>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"expandLess\"\n        [name]=\"expandLess\"\n        *ngIf=\"!onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n      <spt-icon\n        class=\"icons\"\n        [toolTipTitle]=\"accountBox\"\n        [name]=\"accountBox\"\n        *ngIf=\"onToggleLogout\"\n        (click)=\"toggleLogout()\"\n        [color]=\"iconColor\"\n      ></spt-icon>\n    </div>\n    <div class=\"flex-btn\" *ngIf=\"onToggleLogout && !isCollapse\">\n      <spt-button\n        class=\"btn\"\n        [text]=\"'LOGOUT'\"\n        [type]=\"buttonType\"\n        [size]=\"buttonSize\"\n        [leftIcon]=\"logoutIcon\"\n        (click)=\"sidebarData.logout()\"\n      ></spt-button>\n    </div>\n  </div>\n</div>\n",
                    styles: [".container{height:1080px;background-color:#0d0c0b;color:#d2d2d2;font-family:Nunito Sans;font-style:normal;font-size:16px;line-height:24px;z-index:1}.icons{padding-top:4px;margin:10px}.user,.userMultiAccount{position:relative;display:flex;flex-direction:row;align-items:center;padding:20px}.elevation-box{position:absolute;width:280px;left:24px;top:64px;background-color:#fff;z-index:2}.text,.text-multiple-accounts{display:flex;flex-direction:column}.text .small{font-weight:400;font-size:12px;line-height:16px;color:#b1b1b1}.text-multiple-accounts{color:#000}.multiAccount{display:flex;flex-direction:column;padding:20px;justify-content:space-around}.userMultiAccount{margin:10px 0 0;border-radius:4px;padding:12px 6px}.userMultiAccount:hover{background-color:#2e2d2c}.userMultiAccount:hover span{color:#fff}.textFiel{width:80%}.menu{padding:20px}.menu .option{position:relative;display:flex;align-items:center;width:240px;height:48px;padding:12px 6px 12px 6;border-radius:4px;margin:16px 0}.menu .option:hover{background-color:#2e2d2c;color:#f90}.menu .orange-line{position:absolute;right:-20px;background-color:#f90;width:4px;height:40px;border-radius:30px 0 0 30px}.collapse{padding:20px;display:flex;align-items:center;width:240px;height:48px}.active{background-color:#2e2d2c}.user-email{display:flex;flex-direction:column}.flex-btn{display:flex;justify-content:center}spt-icon span svg-icon svg path:last-child{fill:#d2d2d2}"]
                },] }
    ];
    SidebarComponent.ctorParameters = function () { return [
        { type: router.ActivatedRoute },
        { type: router.Router }
    ]; };
    SidebarComponent.propDecorators = {
        sidebarData: [{ type: core.Input }],
        optionsData: [{ type: core.Input }]
    };

    var TableComponent = /** @class */ (function () {
        function TableComponent() {
        }
        TableComponent.prototype.ngOnInit = function () {
        };
        return TableComponent;
    }());
    TableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-table',
                    template: "<nz-table class=\"table\"\n          [nzShowPagination]=\"false\"\n          [nzFrontPagination]=\"false\"\n          [nzData]=\"dataSet\">\n  <thead>\n    <tr>\n      <th *ngIf=\"checkboxOn\">\n        <spt-checkbox></spt-checkbox>\n      </th>\n      <th *ngFor=\"let title of rows\">\n        <b>{{ title }}</b>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-content select=\"tr\"></ng-content>\n  </tbody>\n</nz-table>\n",
                    styles: [".table{font-family:Nunito Sans;font-style:normal;font-weight:400;font-size:14px;line-height:24px;border-radius:4px;border:1px solid #e2e2e2;border-bottom:none}thead,tr:hover{background-color:#fff}thead>tr>th{background:#fff}"]
                },] }
    ];
    TableComponent.ctorParameters = function () { return []; };
    TableComponent.propDecorators = {
        checkboxOn: [{ type: core.Input }],
        rows: [{ type: core.Input }],
        dataSet: [{ type: core.Input }]
    };

    var appUploadFileIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19.41 7.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42zM14.8 15H13v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H9.21c-.45 0-.67-.54-.35-.85l2.8-2.79c.2-.19.51-.19.71 0l2.79 2.79c.3.31.08.85-.36.85zM14 9c-.55 0-1-.45-1-1V3.5L18.5 9H14z\" fill=\"#0D0C0B\"/></svg>",
        name: 'upload-file'
    };

    var UploadComponent = /** @class */ (function () {
        function UploadComponent(modal, viewContainerRef, msg) {
            this.modal = modal;
            this.viewContainerRef = viewContainerRef;
            this.msg = msg;
            this.uploadFile = appUploadFileIcon.name;
        }
        UploadComponent.prototype.createModalUpload = function (upload) {
            this.upload = upload;
            this.createTplModal(this.tplTitle, this.tplContent, this.tplFooter);
        };
        UploadComponent.prototype.createTplModal = function (tplTitle, tplContent, tplFooter) {
            this.modalRef = this.modal.create({
                nzTitle: tplTitle,
                nzContent: tplContent,
                nzFooter: tplFooter,
                nzMaskClosable: false,
                nzClosable: true,
            });
        };
        UploadComponent.prototype.ngOnInit = function () {
        };
        UploadComponent.prototype.handleChange = function (_a) {
            var file = _a.file, fileList = _a.fileList;
            var status = file.status;
            if (status === 'done') {
                this.msg.success(file.name + " file uploaded successfully.");
            }
            else if (status === 'error') {
                this.msg.error(file.name + " file upload failed.");
            }
        };
        return UploadComponent;
    }());
    UploadComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-upload',
                    template: "<ng-template #tplTitle>\n    <span class=\"title\">\n    {{ upload.title }}\n    </span>\n</ng-template>\n<ng-template #tplContent>\n    <span class=\"content\">\n    {{ upload.content }}\n  </span>\n  <br>\n  <br>\n    <nz-upload\n    nzType=\"drag\"\n    [nzMultiple]=\"true\"\n    nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    (nzChange)=\"handleChange($event)\"\n    class=\"upload-box\"\n  >\n    <div class=\"upload-content\">\n      <spt-icon class=\"icons\" [toolTipTitle]=\"uploadFile\" [name]=\"uploadFile\"></spt-icon>\n      <span>Drag and Drop here</span>\n      <span>or</span>\n      <span><b>BROWSE FILES</b></span>\n\n    </div>\n    </nz-upload>\n\n    <div class=\"under-upload-text\">\n    <span>Accepted files</span>\n    <span>Maximum size</span>\n    </div>\n\n</ng-template>\n<ng-template #tplFooter let-ref=\"modalRef\">\n    <button nz-button nzType=\"secondary\" (click)=\"modalRef.destroy(); upload.action1()\">\n    {{ upload.action1Label }}\n  </button>\n</ng-template>\n",
                    styles: [".title{font-family:Nunito;font-weight:700;font-size:24px;line-height:32px;color:#0d0c0b}.content,.title{font-style:normal}.content{font-family:Nunito Sans;font-weight:400;font-size:16px;line-height:24px;color:#4f4e4d}.upload-box{width:468px;height:304px;box-sizing:border-box;border-radius:4px}.upload-box,.upload-content{display:flex;flex-direction:column;align-items:center;justify-content:center}.upload-box:hover{background-color:#f3f3f3}.under-upload-text{display:flex;width:468px;justify-content:space-between;font-size:12px;line-height:16px;color:#909090}.icons{padding-top:4px;margin:10px}"]
                },] }
    ];
    UploadComponent.ctorParameters = function () { return [
        { type: modal.NzModalService },
        { type: core.ViewContainerRef },
        { type: message.NzMessageService }
    ]; };
    UploadComponent.propDecorators = {
        tplTitle: [{ type: core.ViewChild, args: ['tplTitle',] }],
        tplContent: [{ type: core.ViewChild, args: ['tplContent',] }],
        tplFooter: [{ type: core.ViewChild, args: ['tplFooter',] }]
    };

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.buttonType = exports.ButtonType.primary;
            this.buttonSize = exports.ButtonSize.medium;
        }
        HeaderComponent.prototype.ngOnInit = function () { };
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-header',
                    template: "<div class=\"header\">\n  <div class=\"sub-header-1\">\n    <spt-back-navigation\n      *ngIf=\"backTitle\"\n      [title]=\"backTitle\"\n    ></spt-back-navigation>\n    <spt-breadcrumb *ngIf=\"breadcrumbs\" [items]=\"breadcrumbs\"></spt-breadcrumb>\n    <span class=\"title\">{{ title }}</span>\n  </div>\n  <div class=\"sub-header-2\" *ngIf=\"search\">\n    <div class=\"search\">\n      <spt-search></spt-search>\n    </div>\n    <spt-button\n      *ngIf=\"btnTitle\"\n      [text]=\"btnTitle\"\n      [type]=\"buttonType\"\n      [size]=\"buttonSize\"\n      (click)=\"action()\"\n    ></spt-button>\n  </div>\n</div>\n",
                    styles: [".header{display:flex;width:100%;flex-direction:row;justify-content:space-between;align-items:center;padding:24px 0}.sub-header-1{display:flex;flex-direction:column}.sub-header-2{display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.search{width:300px;padding-right:30px}.title{font-family:Nunito;font-style:normal;font-weight:700;font-size:32px;line-height:48px;display:flex;align-items:center}"]
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent.propDecorators = {
        title: [{ type: core.Input }],
        backTitle: [{ type: core.Input }],
        breadcrumbs: [{ type: core.Input }],
        btnTitle: [{ type: core.Input }],
        search: [{ type: core.Input }],
        action: [{ type: core.Input }]
    };

    var appRedeemIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7.6 10.02a.995.995 0 00.22 1.4c.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H20v6z\" fill=\"#0D0C0B\"/></svg>",
        name: 'redeem'
    };

    var appCallIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.63 14.4l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.985.985 0 00-.9.26z\" fill=\"#0D0C0B\"/></svg>",
        name: 'call'
    };

    var appEmailIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"/></svg>",
        name: 'email'
    };

    var appSmartphoneIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"/></svg>",
        name: 'smartphone'
    };

    var appEastIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14.29 5.71a.996.996 0 000 1.41L18.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h15.18l-3.88 3.88a.996.996 0 101.41 1.41l5.59-5.59a.996.996 0 000-1.41l-5.6-5.58a.996.996 0 00-1.41 0z\" fill=\"#0D0C0B\"/></svg>",
        name: 'east'
    };

    var appMoreVertIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" fill=\"#0D0C0B\"/></svg>",
        name: 'more-vert'
    };

    var appSmsIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"/></svg>",
        name: 'sms'
    };

    var appPeopleIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\"/></svg>",
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
    var CardComponent = /** @class */ (function () {
        function CardComponent() {
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
            this.avatarSize = exports.AvatarSize.large;
            this.btnType = exports.ButtonType.secondary;
            this.buttonSize = exports.ButtonSize.medium;
        }
        CardComponent.prototype.ngOnInit = function () {
            this.isMouseOver = false;
        };
        CardComponent.prototype.toggleCard = function () {
            if (this.isSend) {
                this.isSend = false;
            }
            else {
                this.isSend = true;
            }
        };
        CardComponent.prototype.getCampaignStatus = function (id) {
            if (id == CAMPAIGN_STATUS.ACTIVE) {
                this.campaignColor = this.green;
                return 'SENDING';
            }
            if (id == CAMPAIGN_STATUS.INACTIVE) {
                this.campaignColor = this.grey;
                return 'DRAFT';
            }
            if (id == CAMPAIGN_STATUS.EXPIRED) {
                this.campaignColor = this.red;
                return 'EXPIRED';
            }
            if (id == CAMPAIGN_STATUS.DELETED) {
                this.campaignColor = this.red;
                return 'DELETED';
            }
            this.campaignColor = this.green;
            return 'SENT';
        };
        CardComponent.prototype.getCampaignMetric = function (type, campaign) {
            var metric = campaign.metrics.filter(function (stat) { return stat.type === type; })[0];
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
        };
        return CardComponent;
    }());
    CardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-card',
                    template: "<div\n  [ngClass]=\"{ card: campaign || giftManagement, cardForCustomer: customer }\"\n  (mouseover)=\"isMouseOver = true\"\n  (mouseout)=\"isMouseOver = false\"\n  [ngStyle]=\"{ 'background-color': customer?.isSelect ? '#F3F3F3' : '' }\"\n>\n  <div class=\"col1\">\n    <div class=\"campaign\">\n      <div class=\"campaign\" *ngIf=\"campaign\">\n        <spt-icon\n          class=\"icons\"\n          [size]=\"32\"\n          [name]=\"(\n                  campaign.notification_template.medium.id == 1\n                    ? email\n        : campaign.notification_template.medium.id == 3\n        ? smartphone\n        : sms\n        )\"\n        ></spt-icon>\n        <span class=\"shadow-text\">\n          <b  *ngIf=\"campaign.notification_template.medium.name === 'sms'\">{{ campaign.notification_template.medium.name | uppercase }}</b>\n          <b  *ngIf=\"campaign.notification_template.medium.name !== 'sms'\">{{ campaign.notification_template.medium.name | titlecase}}</b>\n        </span>\n      </div>\n      <div\n        class=\"campaign\"\n        *ngIf=\"customer\"\n        [ngStyle]=\"{ 'background-color': !isMouseOver ? white : '' }\"\n      >\n        <spt-avatar\n          [hidden]=\"isMouseOver\"\n          [text]=\"customer.name | slice: 0:1\"\n          [size]=\"avatarSize\"\n          [backgroundColor]=\"white\"\n          [color]=\"red\"\n        ></spt-avatar>\n        <spt-checkbox\n          [hidden]=\"!isMouseOver\"\n          [check]=\"customer.isSelect\"\n          (onChangeEvent)=\"customer.isSelect = $event\"\n        ></spt-checkbox>\n      </div>\n      <div class=\"campaign\" *ngIf=\"giftManagement\">\n        <spt-icon\n          class=\"icons\"\n          [toolTipTitle]=\"redeem\"\n          [name]=\"redeem\"\n        ></spt-icon>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"content\" *ngIf=\"campaign\">\n        <div class=\"sub-content1\">\n          <spt-badge [fontSize]=\"12\"\n            class=\"badge\"\n            [color]=\"campaignColor\"\n            [name]=\"getCampaignStatus(campaign.status.id)\"\n          ></spt-badge>\n          <span class=\"shadow-text\">Created: {{ campaign.date_created * 1000 | date: \"MMMM d, y\" }}</span>\n        </div>\n        <span>{{ campaign.name }}</span>\n        <div class=\"sub-content2\">\n          <ng-content select=\"div.target-group\"></ng-content>\n        </div>\n      </div>\n      <div class=\"content\" *ngIf=\"customer\">\n        <div class=\"sub-content3\">\n          <span>{{ customer.name }}</span>\n          <span class=\"shadow-text\"\n            >Member Since: {{ customer.dateCreated }}</span\n          >\n        </div>\n      </div>\n      <div class=\"content\" *ngIf=\"giftManagement\">\n        <div class=\"sub-content1\">\n          <spt-badge\n            class=\"badge\"\n            [name]=\"giftManagement.deliverProcess | uppercase\"\n            color=\"#66BB6A\"\n          ></spt-badge>\n          <span class=\"shadow-text\"\n            >Created: {{ giftManagement.dateCreated }}</span\n          >\n        </div>\n        <span\n          ><b>ID: {{ giftManagement.id }}</b></span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"col2\">\n    <div class=\"col2\" *ngIf=\"campaign\">\n      <div class=\"printer-container\">\n        <span class=\"shadow-text\">Send</span>\n        <div class=\"printer\">\n          <span>{{ getCampaignMetric('Send', campaign) }}</span>\n        </div>\n      </div>\n      <div class=\"sendIcon\">\n        <spt-icon class=\"icons\" [name]=\"send\"></spt-icon>\n      </div>\n      <div class=\"printer-container\">\n        <span class=\"shadow-text\">Open</span>\n        <div class=\"printer\">\n          <span>{{ getCampaignMetric('Open', campaign) }}</span>\n        </div>\n      </div>\n      <div class=\"sendIcon\">\n        <spt-icon class=\"icons\" [name]=\"send\"></spt-icon>\n      </div>\n      <div class=\"printer-container\">\n        <span class=\"shadow-text\">Visit</span>\n        <div class=\"printer\">\n          <span>{{ getCampaignMetric('Visit', campaign) }}</span>\n        </div>\n      </div>\n      <div class=\"sendIcon\">\n        <spt-icon class=\"icons\" [name]=\"send\"></spt-icon>\n      </div>\n      <div class=\"printer-container\">\n        <span class=\"shadow-text\">Spend</span>\n        <div class=\"printer\">\n          <span>{{ getCampaignMetric('Spend', campaign) }}</span>\n        </div>\n      </div>\n      <div class=\"menu-content\">\n        <ng-content select=\"div.menu\"></ng-content>\n      </div>\n    </div>\n\n    <div class=\"col2\" *ngIf=\"customer\">\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon\n            class=\"icons\"\n            [toolTipTitle]=\"email\"\n            [name]=\"email\"\n          ></spt-icon>\n          <span class=\"shadow-text\">Email</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ customer.email }}</span>\n        </div>\n      </div>\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon class=\"icons\" [toolTipTitle]=\"call\" [name]=\"call\"></spt-icon>\n          <span class=\"shadow-text\">Phone</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ customer.phone }}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col2\" *ngIf=\"giftManagement\">\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon\n            class=\"icons\"\n            [toolTipTitle]=\"email\"\n            [name]=\"email\"\n          ></spt-icon>\n          <span class=\"shadow-text\">Email</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ giftManagement.email }}</span>\n        </div>\n      </div>\n      <div class=\"sub-content3\">\n        <div>\n          <spt-icon class=\"icons\" [toolTipTitle]=\"call\" [name]=\"call\"></spt-icon>\n          <span class=\"shadow-text\">Phone</span>\n        </div>\n        <div class=\"sub-content4\">\n          <span>{{ giftManagement.phone }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col3\" *ngIf=\"giftManagement\">\n    <spt-button\n      [size]=\"buttonSize\"\n      [type]=\"btnType\"\n      [text]=\"'CANCEL'\"\n      (click)=\"cancel()\"\n    ></spt-button>\n    <spt-button\n      [size]=\"buttonSize\"\n      [type]=\"btnType\"\n      [text]=\"'GO TO GUEST'\"\n      (click)=\"goToGuest()\"\n    ></spt-button>\n  </div>\n</div>\n",
                    styles: [".card,.cardForCustomer{display:flex;justify-content:space-between;height:120px;border:1px solid #e2e2e2;border-radius:4px;font-family:Nunito Sans;font-style:normal;font-weight:700;font-size:12px;line-height:24px;background:#fff}.cardForCustomer{justify-content:flex-start}.card:active{background-color:#f3f3f3}.col1{width:400px;display:flex;flex-direction:row}.campaign{min-width:120px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#f3f3f3}.content{width:100%;margin:8px 0 8px 24px}.sub-content1{display:flex}.sub-content1 nz-tag{margin:0}.sub-content2{display:flex;align-items:center}.sub-content3{width:250px;height:100%;display:flex;flex-direction:column;justify-content:space-evenly}.sub-content4{margin-left:40px}.shadow-text{color:#909090;font-weight:400;font-size:14px;padding-left:10px}.col2{display:flex;flex-direction:row;align-items:center}.printer-container{display:flex;flex-direction:column;justify-content:center}.printer{display:flex;align-items:center;min-width:80px;height:48px;background-color:#f3f3f3;border-radius:4px;padding:10px}.sendIcon{padding-top:30px;margin:0 15px 0 10px}.menu-content{padding-bottom:60px}.col3{width:300px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 15px}.active{background-color:#f3f3f3}spt-badge{font-weight:400}"]
                },] }
    ];
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        campaign: [{ type: core.Input }],
        customer: [{ type: core.Input }],
        giftManagement: [{ type: core.Input }],
        option: [{ type: core.Input }],
        cancel: [{ type: core.Input }],
        goToGuest: [{ type: core.Input }]
    };

    var appCheckCircleIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.95 8.23l-5.66 5.66a.996.996 0 01-1.41 0l-2.83-2.83a.996.996 0 111.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 011.41 0c.4.39.4 1.02.01 1.41z\" fill=\"#0D0C0B\"/></svg>",
        name: 'check-circle'
    };

    var appExpandIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M4 5v14c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1zm18 0v14c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1zm-7 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 00-.85.36V11H9V9.21c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79A.5.5 0 009 14.8V13h6z\" fill=\"#0D0C0B\"/></svg>",
        name: 'expand'
    };

    var appFavoriteIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10.67 19.8C5.15 14.85 1.95 12.16 2 8.41c.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51z\" fill=\"#0D0C0B\"/></svg>",
        name: 'favorite'
    };

    var appHomeIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M10.8 3.9l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h4v-7h4v7h4c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 00-2.4 0z\" fill=\"#0D0C0B\"/></svg>",
        name: 'home'
    };

    var appSearchIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M20.29 18.88l-5.56-5.56c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44a6.511 6.511 0 00-7.72 7.72c.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56a.996.996 0 101.41-1.41zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z\" fill=\"#0D0C0B\"/></svg>",
        name: 'search'
    };

    var appSettingsIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 00-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 000 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\" fill=\"#0D0C0B\"/></svg>",
        name: 'settings'
    };

    var actionIcons = [appAccountBoxIcon, appCheckCircleIcon, appExpandIcon, appFavoriteIcon, appHomeIcon, appLogoutIcon, appRedeemIcon, appSearchIcon, appSettingsIcon];

    var appErrorIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'error'
    };

    var appWarningIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M2.73 21h18.53c.77 0 1.25-.83.87-1.5l-9.27-16a.996.996 0 00-1.73 0l-9.27 16c-.38.67.1 1.5.87 1.5zM12 15c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm1 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'warning'
    };

    var alertIcons = [appErrorIcon, appWarningIcon];

    var appRecentActorsIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM8 7.75c1.52 0 2.75 1.23 2.75 2.75S9.52 13.25 8 13.25s-2.75-1.23-2.75-2.75S6.48 7.75 8 7.75zM13 17H3v-.4c0-.79.46-1.53 1.19-1.83C5.36 14.27 6.65 14 8 14s2.64.27 3.81.76c.73.31 1.19 1.04 1.19 1.84v.4zM21 6v12c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1zM18 19c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55.45 1 1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'recent-actors'
    };

    var avIcons = [appRecentActorsIcon];

    var communicationIcons = [appCallIcon, appEmailIcon];

    var appAddIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'add'
    };

    var appAddCircleOutlineIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"#0D0C0B\"/></svg>",
        name: 'add-circle-outline'
    };

    var appReportIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59zM12 13c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'report'
    };

    var appSendIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 5.51v3.71c0 .46.31.86.76.97L11 12l-7.24 1.81c-.45.11-.76.51-.76.97v3.71c0 .72.73 1.2 1.39.92l15.42-6.49c.82-.34.82-1.5 0-1.84L4.39 4.58C3.73 4.31 3 4.79 3 5.51z\" fill=\"#0D0C0B\"/></svg>",
        name: 'send'
    };

    var contentIcons = [appAddCircleOutlineIcon, appAddIcon, appReportIcon, appSendIcon];

    var fileIcons = [appUploadFileIcon];

    var hardwareIcons = [appKeyboardTabIcon, appSmartphoneIcon];

    var appEditIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z\" fill=\"#0D0C0B\"/></svg>",
        name: 'edit'
    };

    var appWbIncandescentIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 6c.56 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1c0 .55.45 1 1 1zM18.01 7.91l.71-.71a.996.996 0 10-1.41-1.41l-.71.71a.996.996 0 000 1.41c.38.38 1.02.38 1.41 0zM19 13c0 .55.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1 .45-1 1zM3 14h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zM5.99 7.91A.996.996 0 107.4 6.5l-.71-.71A.996.996 0 105.28 7.2l.71.71zM9 16.98V20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3.02c1.43-1.08 2.28-2.9 1.91-4.91-.36-1.95-1.9-3.55-3.84-3.95A4.995 4.995 0 007 13c0 1.63.79 3.06 2 3.98zm2 .92c.32.06.66.1 1 .1.34 0 .68-.04 1-.1V20h-2v-2.1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'wb-incandescent'
    };

    var imageIcons = [appEditIcon, appWbIncandescentIcon];

    var appPlaceIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\" fill=\"#0D0C0B\"/></svg>",
        name: 'place'
    };

    var mapsIcons = [appPlaceIcon];

    var appCalendarIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z\"/></svg>",
        name: 'calendar'
    };

    var appCalendarDateRangeIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 01-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z\"/></svg>",
        name: 'calendar-date-range'
    };

    var appCalendarTodayIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z\"/></svg>",
        name: 'calendar-today'
    };

    var appDownloadIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/></svg>",
        name: 'download'
    };

    var appScheduleIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/><path d=\"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z\"/></svg>",
        name: 'schedule'
    };

    var appSettingsSuggestIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M17.41 6.59L15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9l-1.09-2.41zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zm-5.04 1.65l1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.13.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.37s0 .24-.01.36zM13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z\"/></svg>",
        name: 'settings-suggest'
    };

    var appDeleteIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>",
        name: 'delete'
    };

    var appFileCopyIcon = {
        data: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z\"/></svg>",
        name: 'file-copy'
    };

    var miscIcons = [
        appCalendarIcon,
        appCalendarDateRangeIcon,
        appCalendarTodayIcon,
        appDownloadIcon,
        appScheduleIcon,
        appSettingsSuggestIcon,
        appDeleteIcon,
        appFileCopyIcon
    ];

    var appArrowBackIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 00-1.41 0l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.996.996 0 101.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'arrow-back'
    };

    var appArrowDownwardIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0a.996.996 0 000 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 10-1.41-1.41L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'arrow-downward'
    };

    var appArrowForwardIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 000-1.41l-6.58-6.6a.996.996 0 10-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'arrow-forward'
    };

    var appArrowUpwardIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0a.996.996 0 000-1.41l-6.59-6.59a.996.996 0 00-1.41 0l-6.6 6.58a.996.996 0 101.41 1.41L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'arrow-upward'
    };

    var appCancelBlackIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\"><path d=\"M9 1.5A7.493 7.493 0 001.5 9c0 4.148 3.353 7.5 7.5 7.5 4.148 0 7.5-3.352 7.5-7.5 0-4.147-3.352-7.5-7.5-7.5zm3.217 9.668a.747.747 0 11-1.057 1.057L9 10.057l-2.168 2.168a.747.747 0 11-1.057-1.057L7.942 9l-2.16-2.168A.747.747 0 116.84 5.775L9 7.942l2.168-2.167a.747.747 0 111.057 1.057L10.057 9l2.16 2.168z\" fill=\"#0D0C0B\"/></svg>",
        name: 'cancel-black'
    };

    var appCheckIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18 6.7l-8.48 8.48-3.54-3.54a.996.996 0 10-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.18-9.18a.999.999 0 00-.01-1.42c-.37-.38-1-.38-1.39.01z\" fill=\"#0D0C0B\"/></svg>",
        name: 'check'
    };

    var appChevronLeftIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.29 15.46l-3.88-3.88 3.88-3.88a.996.996 0 10-1.41-1.41l-4.59 4.59a.996.996 0 000 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z\" fill=\"#0D0C0B\"/></svg>",
        name: 'chevron-left'
    };

    var appChevronRightIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9.29 15.46l3.88-3.88L9.29 7.7a.996.996 0 111.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59a.996.996 0 01-1.41 0c-.38-.39-.39-1.03 0-1.42z\" fill=\"#0D0C0B\"/></svg>",
        name: 'chevron-right'
    };

    var appClearIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\" fill=\"#000\"/></svg>",
        name: 'clear'
    };

    var appFirstPageIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.7 15.89L13.82 12l3.89-3.89A.996.996 0 1016.3 6.7l-4.59 4.59a.996.996 0 000 1.41l4.59 4.59c.39.39 1.02.39 1.41 0a.993.993 0 00-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'first-page'
    };

    var appLastPageIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6.29 8.11L10.18 12l-3.89 3.89A.996.996 0 107.7 17.3l4.59-4.59a.996.996 0 000-1.41L7.7 6.7a.996.996 0 00-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'last-page'
    };

    var appRefreshIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35a7.95 7.95 0 00-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 007.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 01-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0112 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z\" fill=\"#0D0C0B\"/></svg>",
        name: 'refresh'
    };

    var navigationIcons = [appArrowBackIcon, appArrowDownwardIcon, appArrowForwardIcon, appArrowUpwardIcon, appCancelBlackIcon, appCheckIcon, appChevronLeftIcon, appChevronRightIcon, appClearIcon, appEastIcon, appExpandLessIcon, appExpandMoreIcon, appFirstPageIcon, appLastPageIcon, appMoreVertIcon, appRefreshIcon];

    var appPriorityHighIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 21a2 2 0 100-4 2 2 0 000 4zM12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#0D0C0B\"/></svg>",
        name: 'priority-high'
    };

    var notificationIcons = [appPriorityHighIcon, appSmsIcon];

    var socialIcons = [appPeopleIcon];

    var appCheckBoxIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.88 15.54l-2.83-2.83a.996.996 0 111.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 111.41 1.41l-5.66 5.66a.984.984 0 01-1.4 0z\" fill=\"#0D0C0B\"/></svg>",
        name: 'check-box'
    };

    var appCheckBoxOutlineBlankIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 19H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#0D0C0B\"/></svg>",
        name: 'check-box-outline-blank'
    };

    var appIndeterminateCheckBoxIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z\" fill=\"#0D0C0B\"/></svg>",
        name: 'indeterminate-check-box'
    };

    var appRadioButtonCheckedIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"#0D0C0B\"/><path d=\"M12 17a5 5 0 100-10 5 5 0 000 10z\" fill=\"#0D0C0B\"/></svg>",
        name: 'radio-button-checked'
    };

    var appRadioButtonUncheckedIcon = {
        data: "<svg fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"#0D0C0B\"/></svg>",
        name: 'radio-button-unchecked'
    };

    var toggleIcons = [appCheckBoxOutlineBlankIcon, appCheckBoxIcon, appIndeterminateCheckBoxIcon, appRadioButtonCheckedIcon, appRadioButtonUncheckedIcon];

    var SpComponentsComponent = /** @class */ (function () {
        function SpComponentsComponent(iconReg) {
            this.iconReg = iconReg;
            this.registerIcons(this.iconReg);
        }
        SpComponentsComponent.prototype.ngOnInit = function () {
        };
        SpComponentsComponent.prototype.registerIcons = function (iconReg) {
            // Action Icons
            actionIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Alert Icons
            alertIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // AV Icons
            avIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Communications Icons
            communicationIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Content Icons
            contentIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // File Icons
            fileIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Hardware Icons
            hardwareIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Image Icons
            imageIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Maps Icons
            mapsIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Misc Icons
            miscIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Navigation Icons
            navigationIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Notification Icons
            notificationIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Social Icons
            socialIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
            // Toggle Icons
            toggleIcons.forEach(function (element) {
                iconReg.addSvg(element.name, element.data);
            });
        };
        return SpComponentsComponent;
    }());
    SpComponentsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sp-components',
                    template: '',
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    SpComponentsComponent.ctorParameters = function () { return [
        { type: angularSvgIcon.SvgIconRegistryService }
    ]; };

    var DatePickerComponent = /** @class */ (function (_super) {
        __extends(DatePickerComponent, _super);
        function DatePickerComponent(_renderer) {
            var _this = _super.call(this, _renderer) || this;
            _this.disabledDate = function (current) {
                if (_this.min && _this.max == null) {
                    return dateFns.differenceInCalendarDays(current, _this.min) < 0;
                }
                if (_this.max && _this.min == null) {
                    return dateFns.differenceInCalendarDays(current, _this.max) > 0;
                }
                if (_this.min && _this.max) {
                    return dateFns.differenceInCalendarDays(current, _this.min) < 0 || dateFns.differenceInCalendarDays(current, _this.max) > 0;
                }
                return null;
            };
            return _this;
        }
        /**
         * override: inherited writeValue
         */
        DatePickerComponent.prototype.writeValue = function (obj) {
            this.value = obj;
            this.checkDirty();
        };
        return DatePickerComponent;
    }(FormFieldManager));
    DatePickerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'spt-date-picker',
                    template: "<div class=\"spt-input-container text-field-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n    <nz-date-picker\n            [class]=\"size\"\n            nzPlaceHolder=\" \"\n            [style.background-color]=\"backgroundColor\"\n            [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'has-right-icon': !!endIcon, 'disabled-state': isDisabled}\"\n            [(ngModel)]=\"value\" (ngModelChange)=\"changeAction($event)\" [nzDisabledDate]=\"disabledDate\"></nz-date-picker>\n\n\n    <!-- label -->\n    <label class=\"text-field-label label\"\n           [style.background-color]=\"backgroundColor\">{{ label || placeholder }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n</div>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return DatePickerComponent; }),
                            multi: true
                        }
                    ],
                    styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error.ant-picker-focused,.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.ant-picker-focused,.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.ant-picker-focused+label,.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder, .text-field-container nz-date-picker::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder,.text-field-container nz-date-picker::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input.ant-picker-focused::-moz-placeholder, .text-field-container input:focus::-moz-placeholder, .text-field-container nz-date-picker.ant-picker-focused::-moz-placeholder, .text-field-container nz-date-picker:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input.ant-picker-focused::placeholder,.text-field-container input:focus::placeholder,.text-field-container nz-date-picker.ant-picker-focused::placeholder,.text-field-container nz-date-picker:focus::placeholder{visibility:visible;opacity:1}.text-field-container input.disabled-state,.text-field-container nz-date-picker.disabled-state{cursor:not-allowed!important}.spt-input-container{margin:0;position:relative}.spt-input-container input,.spt-input-container nz-date-picker{text-overflow:ellipsis;box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large,.spt-input-container nz-date-picker.large{padding:12px 10px}.spt-input-container input.large+label,.spt-input-container nz-date-picker.large+label{top:12px}.spt-input-container input.medium,.spt-input-container nz-date-picker.medium{padding:8px 10px}.spt-input-container input.medium+label,.spt-input-container nz-date-picker.medium+label{top:8px}.spt-input-container input.small,.spt-input-container nz-date-picker.small{padding:6px 10px}.spt-input-container input.small+label,.spt-input-container nz-date-picker.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon,.spt-input-container nz-date-picker.error,.spt-input-container nz-date-picker.has-right-icon{padding-right:45px}.spt-input-container input.error,.spt-input-container nz-date-picker.error{border:1px solid #ef5350!important}.spt-input-container input.error~label,.spt-input-container nz-date-picker.error~label{color:#ef5350!important}.spt-input-container input.error.ant-picker-focused,.spt-input-container input.error:focus,.spt-input-container input.error:hover,.spt-input-container nz-date-picker.error.ant-picker-focused,.spt-input-container nz-date-picker.error:focus,.spt-input-container nz-date-picker.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon,.spt-input-container nz-date-picker.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label,.spt-input-container nz-date-picker.has-left-icon+label{left:45px}.spt-input-container input:hover,.spt-input-container nz-date-picker:hover{border:1px solid #000!important}.spt-input-container input.ant-picker-focused,.spt-input-container input.item-focus,.spt-input-container input:focus,.spt-input-container nz-date-picker.ant-picker-focused,.spt-input-container nz-date-picker.item-focus,.spt-input-container nz-date-picker:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.ant-picker-focused+label,.spt-input-container input.item-focus+label,.spt-input-container input:focus+label,.spt-input-container nz-date-picker.ant-picker-focused+label,.spt-input-container nz-date-picker.item-focus+label,.spt-input-container nz-date-picker:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input.disabled-state,.spt-input-container input[disabled],.spt-input-container nz-date-picker.disabled-state,.spt-input-container nz-date-picker[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input.disabled-state~label,.spt-input-container input[disabled]~label,.spt-input-container nz-date-picker.disabled-state~label,.spt-input-container nz-date-picker[disabled]~label{color:#b1b1b1!important}.spt-input-container input.disabled-state:hover,.spt-input-container input[disabled]:hover,.spt-input-container nz-date-picker.disabled-state:hover,.spt-input-container nz-date-picker[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label,.spt-input-container nz-date-picker.dirty:hover+label{color:#000}.spt-input-container input.dirty.ant-picker-focused+label,.spt-input-container input.dirty:focus+label,.spt-input-container nz-date-picker.dirty.ant-picker-focused+label,.spt-input-container nz-date-picker.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label,.spt-input-container nz-date-picker.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label,.spt-input-container nz-date-picker+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path:last-child,.spt-input-container .right-icon svg path:last-child{fill:#706f6e}.spt-input-container .error-icon svg path:last-child{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px;width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.text-field-label{max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px;width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path:last-child{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error.ant-picker-focused,.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.ant-picker-focused,.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.ant-picker-focused+label,.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover,.search-wrapper nz-date-picker,.search-wrapper nz-date-picker:focus,.search-wrapper nz-date-picker:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
                },] }
    ];
    DatePickerComponent.ctorParameters = function () { return [
        { type: core.Renderer2 }
    ]; };
    DatePickerComponent.propDecorators = {
        nzDatePickerComponent: [{ type: core.ViewChild, args: [datePicker.NzDatePickerComponent,] }]
    };

    common.registerLocaleData(en__default['default']);
    var ɵ0 = i18n.en_US;
    var SpComponentsModule = /** @class */ (function () {
        function SpComponentsModule() {
        }
        return SpComponentsModule;
    }());
    SpComponentsModule.decorators = [
        { type: core.NgModule, args: [{
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
                    imports: __spread([
                        common.CommonModule,
                        ng2Charts.ChartsModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        router.RouterModule,
                        angularSvgIcon.AngularSvgIconModule.forRoot(),
                        forms.ReactiveFormsModule,
                        portal.PortalModule,
                        overlay.OverlayModule
                    ], NZMODULES, [
                        noAnimation.NzNoAnimationModule,
                    ]),
                    providers: [{ provide: i18n.NZ_I18N, useValue: ɵ0 }, ng2Charts.ThemeService],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AvatarComponent = AvatarComponent;
    exports.BackNavigationComponent = BackNavigationComponent;
    exports.BadgeComponent = BadgeComponent;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.ButtonComponent = ButtonComponent;
    exports.CardComponent = CardComponent;
    exports.ChartComponent = ChartComponent;
    exports.CheckboxComponent = CheckboxComponent;
    exports.ChipComponent = ChipComponent;
    exports.DataVisualizationComponent = DataVisualizationComponent;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DialogsComponent = DialogsComponent;
    exports.DividerComponent = DividerComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.ElevationComponent = ElevationComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.MenuComponent = MenuComponent;
    exports.ProgressBarComponent = ProgressBarComponent;
    exports.RadioButtonComponent = RadioButtonComponent;
    exports.SearchComponent = SearchComponent;
    exports.SideNavigationComponent = SideNavigationComponent;
    exports.SidebarComponent = SidebarComponent;
    exports.SliderComponent = SliderComponent;
    exports.SnackbarComponent = SnackbarComponent;
    exports.SpComponentsComponent = SpComponentsComponent;
    exports.SpComponentsModule = SpComponentsModule;
    exports.SpacingComponent = SpacingComponent;
    exports.StepsComponent = StepsComponent;
    exports.SwitchComponent = SwitchComponent;
    exports.TabComponent = TabComponent;
    exports.TableComponent = TableComponent;
    exports.TextFieldComponent = TextFieldComponent;
    exports.TooltipComponent = TooltipComponent;
    exports.UploadComponent = UploadComponent;
    exports.actionIcons = actionIcons;
    exports.alertIcons = alertIcons;
    exports.avIcons = avIcons;
    exports.communicationIcons = communicationIcons;
    exports.contentIcons = contentIcons;
    exports.fileIcons = fileIcons;
    exports.hardwareIcons = hardwareIcons;
    exports.imageIcons = imageIcons;
    exports.mapsIcons = mapsIcons;
    exports.miscIcons = miscIcons;
    exports.navigationIcons = navigationIcons;
    exports.notificationIcons = notificationIcons;
    exports.socialIcons = socialIcons;
    exports.toggleIcons = toggleIcons;
    exports.ɵ0 = ɵ0;
    exports.ɵa = FormFieldManager;
    exports.ɵb = BannerComponent;
    exports.ɵba = appEmailIcon;
    exports.ɵbb = appAddCircleOutlineIcon;
    exports.ɵbc = appAddIcon;
    exports.ɵbd = appReportIcon;
    exports.ɵbe = appSendIcon;
    exports.ɵbf = appUploadFileIcon;
    exports.ɵbg = appKeyboardTabIcon;
    exports.ɵbh = appSmartphoneIcon;
    exports.ɵbi = appEditIcon;
    exports.ɵbj = appWbIncandescentIcon;
    exports.ɵbk = appPlaceIcon;
    exports.ɵbl = appCalendarIcon;
    exports.ɵbm = appCalendarDateRangeIcon;
    exports.ɵbn = appCalendarTodayIcon;
    exports.ɵbo = appDownloadIcon;
    exports.ɵbp = appScheduleIcon;
    exports.ɵbq = appSettingsSuggestIcon;
    exports.ɵbr = appDeleteIcon;
    exports.ɵbs = appFileCopyIcon;
    exports.ɵbt = appArrowBackIcon;
    exports.ɵbu = appArrowDownwardIcon;
    exports.ɵbv = appArrowForwardIcon;
    exports.ɵbw = appArrowUpwardIcon;
    exports.ɵbx = appCancelBlackIcon;
    exports.ɵby = appCheckIcon;
    exports.ɵbz = appChevronLeftIcon;
    exports.ɵc = DropdownService;
    exports.ɵca = appChevronRightIcon;
    exports.ɵcb = appClearIcon;
    exports.ɵcc = appEastIcon;
    exports.ɵcd = appExpandLessIcon;
    exports.ɵce = appExpandMoreIcon;
    exports.ɵcf = appFirstPageIcon;
    exports.ɵcg = appLastPageIcon;
    exports.ɵch = appMoreVertIcon;
    exports.ɵci = appRefreshIcon;
    exports.ɵcj = appPriorityHighIcon;
    exports.ɵck = appSmsIcon;
    exports.ɵcl = appPeopleIcon;
    exports.ɵcm = appCheckBoxOutlineBlankIcon;
    exports.ɵcn = appCheckBoxIcon;
    exports.ɵco = appIndeterminateCheckBoxIcon;
    exports.ɵcp = appRadioButtonCheckedIcon;
    exports.ɵcq = appRadioButtonUncheckedIcon;
    exports.ɵd = OverlayTemplateComponent;
    exports.ɵe = OptionComponent;
    exports.ɵf = SearchService;
    exports.ɵg = SearchOptionComponent;
    exports.ɵh = SearchTemplateComponent;
    exports.ɵi = MenuService;
    exports.ɵj = MenuItemComponent;
    exports.ɵk = MenuTriggerDirective;
    exports.ɵl = IconComponent;
    exports.ɵm = NZMODULES;
    exports.ɵn = appAccountBoxIcon;
    exports.ɵo = appCheckCircleIcon;
    exports.ɵp = appExpandIcon;
    exports.ɵq = appFavoriteIcon;
    exports.ɵr = appHomeIcon;
    exports.ɵs = appLogoutIcon;
    exports.ɵt = appRedeemIcon;
    exports.ɵu = appSearchIcon;
    exports.ɵv = appSettingsIcon;
    exports.ɵw = appErrorIcon;
    exports.ɵx = appWarningIcon;
    exports.ɵy = appRecentActorsIcon;
    exports.ɵz = appCallIcon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spoonity-sp-components.umd.js.map
