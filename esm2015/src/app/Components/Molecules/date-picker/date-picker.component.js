import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
export class DatePickerComponent extends FormFieldManager {
    constructor(_renderer) {
        super(_renderer);
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
        if (obj !== undefined) {
            this.value = obj;
            this.setDate();
            this.checkDirty();
        }
    }
    /**
     * set date to display
     */
    setDate() {
        if (this.value) {
            const date = this.value;
            this.formattedDate = date.toLocaleDateString();
        }
    }
    /**
     * format date to display
     */
    convertDate(event) {
        this.setDate();
        this.changeAction(event);
    }
    /**
     * close the datepicker
     */
    closeDatePicker() {
        this.nzDatePickerComponent.close();
    }
    /**
     * listen when the datepicker overlay status changes (open/close)
     * @param open
     */
    onDatePickerOpen(open) {
        this.datePickerOpen = open;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spt-date-picker',
                template: "<div class=\"spt-input-container text-field-container\" [ngClass]=\"{'disabled-container': isDisabled}\">\n    <input nz-input [ngClass]=\"{'dirty': isDirty, 'error': !!error, 'has-left-icon': !!startIcon, 'has-right-icon': !!endIcon, 'disabled-state': isDisabled}\"\n           (click)=\"isDisabled ? $event.stopPropagation() : datePickerEl.open()\"\n           [(ngModel)]=\"formattedDate\"\n           [class]=\"size\" placeholder=\"{{placeholder}}\"\n           [attr.disabled]=\"!!isDisabled ? isDisabled : null\" readonly>\n    <!-- label -->\n    <label class=\"text-field-label label\">{{ label || placeholder }}</label>\n\n    <!-- error -->\n    <label class=\"text-field-bottom-label error-label\" *ngIf=\"!!error\">{{ error }}</label>\n\n    <!-- error icon -->\n    <span *ngIf=\"!!error\" class=\"text-field-icon error-icon\">\n        <svg-icon name=\"report\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n\n    <!-- close icon and action -->\n    <span *ngIf=\"!error && datePickerOpen\" class=\"text-field-icon right-icon date-picker-close\" (click)=\"closeDatePicker()\">\n        <svg-icon name=\"cancel-black\" [svgStyle]=\"{ 'width.px':24 }\"></svg-icon>\n    </span>\n</div>\n\n<nz-date-picker #datePickerEl style=\"visibility: hidden; transform: translateY(-35px)\" (nzOnOpenChange)=\"onDatePickerOpen($event)\"\n                [(ngModel)]=\"value\" (ngModelChange)=\"convertDate($event)\" [nzDisabledDate]=\"disabledDate\"></nz-date-picker>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DatePickerComponent),
                        multi: true
                    }
                ],
                styles: [".form-field{color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.form-field.large{padding:12px 10px}.form-field.large+label{top:12px}.form-field.medium{padding:8px 10px}.form-field.medium+label{top:8px}.form-field.small{padding:6px 10px}.form-field.small+label{top:6px}.form-field.error,.form-field.has-right-icon{padding-right:45px}.form-field.error{border:1px solid #ef5350!important}.form-field.error~label{color:#ef5350!important}.form-field.error:focus,.form-field.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.form-field.has-left-icon{padding-left:45px}.form-field.has-left-icon+label{left:45px}.form-field:hover{border:1px solid #000!important}.form-field.item-focus,.form-field:focus{border:1px solid #f90!important;caret-color:#f90}.form-field.item-focus+label,.form-field:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.text-field-container input::-moz-placeholder{visibility:hidden;opacity:0;-moz-transition:visibility .1s ease-out,opacity .1s ease-out;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input::placeholder{visibility:hidden;opacity:0;transition:visibility .1s ease-out,opacity .1s ease-out;padding:0 4px}.text-field-container input:focus::-moz-placeholder{visibility:visible;opacity:1}.text-field-container input:focus::placeholder{visibility:visible;opacity:1}.spt-input-container{margin:0;position:relative}.spt-input-container input{box-shadow:none;outline:none;min-height:24px;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.spt-input-container input.large{padding:12px 10px}.spt-input-container input.large+label{top:12px}.spt-input-container input.medium{padding:8px 10px}.spt-input-container input.medium+label{top:8px}.spt-input-container input.small{padding:6px 10px}.spt-input-container input.small+label{top:6px}.spt-input-container input.error,.spt-input-container input.has-right-icon{padding-right:45px}.spt-input-container input.error{border:1px solid #ef5350!important}.spt-input-container input.error~label{color:#ef5350!important}.spt-input-container input.error:focus,.spt-input-container input.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.spt-input-container input.has-left-icon{padding-left:45px}.spt-input-container input.has-left-icon+label{left:45px}.spt-input-container input:hover{border:1px solid #000!important}.spt-input-container input.item-focus,.spt-input-container input:focus{border:1px solid #f90!important;caret-color:#f90}.spt-input-container input.item-focus+label,.spt-input-container input:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input[disabled]{background-color:#fff!important;color:#b1b1b1!important;border:1px solid #b1b1b1!important;cursor:not-allowed}.spt-input-container input[disabled]~label{color:#b1b1b1!important}.spt-input-container input[disabled]:hover{border:1px solid #b1b1b1!important}.spt-input-container input.dirty+label{color:#909090}.spt-input-container input.dirty:hover+label{color:#000}.spt-input-container input.dirty:focus+label{color:#f90}.spt-input-container input.dirty+label{font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.spt-input-container input+label{position:absolute;left:12px;font-size:14px;color:#909090;background-color:hsla(0,0%,100%,0);pointer-events:none;transition:all .2s ease,background-color .2s ease-in}.spt-input-container .text-field-icon{position:absolute;height:24px;top:50%;transform:translateY(-50%)}.spt-input-container .error-icon,.spt-input-container .right-icon{right:12px}.spt-input-container .left-icon{left:12px}.spt-input-container .left-icon svg path,.spt-input-container .right-icon svg path{fill:#706f6e}.spt-input-container .error-icon svg path{fill:#ef5350}.spt-input-container label.text-field-bottom-label{font-size:12px;margin-top:10px;position:absolute;bottom:-20px}.spt-input-container label.error-label,.spt-input-container label.hint-label{left:12px}.spt-input-container label.length-label{right:12px}.spt-input-container label.error-label{color:#ef5350}.spt-input-container label.hint-label,.spt-input-container label.length-label{color:#4f4e4d}.spt-input-container.disabled-container .text-field-bottom-label{color:#b1b1b1!important}.spt-input-container.disabled-container .text-field-icon svg path{fill:#b1b1b1}.search-wrapper{display:flex;align-items:center;background-color:#fff;color:#0d0c0b;font-size:14px;height:inherit;width:100%;border-radius:4px;border:1px solid #909090!important}.search-wrapper.large{padding:12px 10px}.search-wrapper.large+label{top:12px}.search-wrapper.medium{padding:8px 10px}.search-wrapper.medium+label{top:8px}.search-wrapper.small{padding:6px 10px}.search-wrapper.small+label{top:6px}.search-wrapper.error,.search-wrapper.has-right-icon{padding-right:45px}.search-wrapper.error{border:1px solid #ef5350!important}.search-wrapper.error~label{color:#ef5350!important}.search-wrapper.error:focus,.search-wrapper.error:hover{border:1px solid #ef5350!important;caret-color:#ef5350}.search-wrapper.has-left-icon{padding-left:45px}.search-wrapper.has-left-icon+label{left:45px}.search-wrapper:hover{border:1px solid #000!important}.search-wrapper.item-focus,.search-wrapper:focus{border:1px solid #f90!important;caret-color:#f90}.search-wrapper.item-focus+label,.search-wrapper:focus+label{color:#f90;font-size:11px;top:-8px;left:8px;padding:0 4px;background-color:#fff}.search-wrapper input,.search-wrapper input:focus,.search-wrapper input:hover{border:none!important}.search-wrapper .search-icon{height:24px}.search-wrapper.large .search-icon,.search-wrapper.medium .search-icon{margin-left:10px;margin-right:10px}.search-wrapper.small{padding:4px 10px}.search-wrapper.small .search-icon{margin-left:10px;margin-right:10px}.search-wrapper .selected-items{display:flex;flex-wrap:wrap}.search-wrapper .selected-items .selected-item{margin:1px}.date-picker-close{cursor:pointer}"]
            },] }
];
DatePickerComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DatePickerComponent.propDecorators = {
    nzDatePickerComponent: [{ type: ViewChild, args: [NzDatePickerComponent,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9Db21wb25lbnRzL01vbGVjdWxlcy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFjaEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQWF2RCxZQUFZLFNBQW9CO1FBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUduQixpQkFBWSxHQUFHLENBQUMsT0FBYSxFQUFXLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNoQyxPQUFPLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNoQyxPQUFPLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLE9BQU8sd0JBQXdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksd0JBQXdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0c7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQTtJQWhCRCxDQUFDO0lBa0JEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUksR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLElBQWE7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxOUNBQTJDO2dCQUUzQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7OztZQWpCOEIsU0FBUzs7O29DQTZCckMsU0FBUyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1GaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NoYXJlZC9mb3JtLWZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHtOekRhdGVQaWNrZXJDb21wb25lbnR9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vLi4vc2hhcmVkL2Zvcm0tZmllbGQubWFuYWdlci5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRm9ybUZpZWxkTWFuYWdlciB7XG4gIC8qKlxuICAgKiBzdHJpbmcgZm9ybWF0dGVkIGRhdGVcbiAgICovXG4gIGZvcm1hdHRlZERhdGU6IHN0cmluZztcblxuICAvKipcbiAgICogb3BlbiBzdGF0ZSBmb3IgdGhlIGRhdGUgcGlja2VyIG92ZXJsYXlcbiAgICovXG4gIGRhdGVQaWNrZXJPcGVuOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoTnpEYXRlUGlja2VyQ29tcG9uZW50KSBuekRhdGVQaWNrZXJDb21wb25lbnQ6IE56RGF0ZVBpY2tlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKF9yZW5kZXJlcik7XG4gIH1cblxuICBkaXNhYmxlZERhdGUgPSAoY3VycmVudDogRGF0ZSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICh0aGlzLm1pbiAmJiB0aGlzLm1heCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGN1cnJlbnQsIHRoaXMubWluKSA8IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4ICYmIHRoaXMubWluID09IG51bGwpIHtcbiAgICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoY3VycmVudCwgdGhpcy5tYXgpID4gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW4gJiYgdGhpcy5tYXgpIHtcbiAgICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoY3VycmVudCwgdGhpcy5taW4pIDwgMCB8fCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoY3VycmVudCwgdGhpcy5tYXgpID4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZTogaW5oZXJpdGVkIHdyaXRlVmFsdWVcbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmo7XG4gICAgICB0aGlzLnNldERhdGUoKTtcbiAgICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZGF0ZSB0byBkaXNwbGF5XG4gICAqL1xuICBzZXREYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlOiBEYXRlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMuZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZvcm1hdCBkYXRlIHRvIGRpc3BsYXlcbiAgICovXG4gIGNvbnZlcnREYXRlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldERhdGUoKTtcbiAgICB0aGlzLmNoYW5nZUFjdGlvbihldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogY2xvc2UgdGhlIGRhdGVwaWNrZXJcbiAgICovXG4gIGNsb3NlRGF0ZVBpY2tlcigpOiB2b2lkIHtcbiAgICB0aGlzLm56RGF0ZVBpY2tlckNvbXBvbmVudC5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGxpc3RlbiB3aGVuIHRoZSBkYXRlcGlja2VyIG92ZXJsYXkgc3RhdHVzIGNoYW5nZXMgKG9wZW4vY2xvc2UpXG4gICAqIEBwYXJhbSBvcGVuXG4gICAqL1xuICBvbkRhdGVQaWNrZXJPcGVuKG9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRhdGVQaWNrZXJPcGVuID0gb3BlbjtcbiAgfVxufVxuIl19