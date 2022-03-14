import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { DropdownService } from '../dropdown.service';
export class OptionComponent {
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
                styles: [".options-container{display:block;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.options-container div{padding:0 5px}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}:host{display:block;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}:host div{padding:0 5px}:host.active,:host.selected{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host.selected{background-color:#f3f3f3}}:host .enabled:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host .enabled:hover{background-color:#f3f3f3}}:host.selected{font-weight:700}:host .disabled{color:#93a1aa;cursor:auto}:host .disabled:focus,:host .disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){:host .disabled:focus,:host .disabled:hover{background-color:#fff}}.option-container{display:flex}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvZHJvcGRvd24vb3B0aW9uL29wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFRcEQsTUFBTSxPQUFPLGVBQWU7SUF3QzFCLFlBQ1UsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF4QjNDLHVCQUF1QjtRQUVoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBd0JwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBakNELHlCQUF5QjtJQUN6QixJQUNXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixLQUFLLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBY0QsMEJBQTBCO0lBRW5CLE9BQU8sQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBU0QsUUFBUTtJQUNSLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDhjQUFzQzs7YUFFdkM7OztZQVBPLGVBQWU7OztvQkFXcEIsS0FBSzttQkFHTCxLQUFLO3VCQUdMLEtBQUs7dUJBR0wsV0FBVyxTQUFDLGdCQUFnQjtxQkFNNUIsV0FBVyxTQUFDLGNBQWM7c0JBWTFCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Ryb3Bkb3duU2VydmljZX0gZnJvbSAnLi4vZHJvcGRvd24uc2VydmljZSc7XG5pbXBvcnQge0Ryb3Bkb3duQ29tcG9uZW50fSBmcm9tICcuLi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29wdGlvbi5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyogb3B0aW9uIHZhbHVlICovXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogYW55O1xuXG4gIC8qIG9wdGlvbiBkaXNwbGF5IHRleHQgKi9cbiAgQElucHV0KCkgcHVibGljIHRleHQ6IHN0cmluZztcblxuICAvKiBvZiB0aGUgc2VsZWN0aW9uIHNob3VsZCBiZSBkaXNhYmxlZCAqL1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyogYmluZCBjbGFzcy5zZWxlY3RlZCAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgcHVibGljIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Quc2luZ2xlX3NlbGVjdGVkT3B0aW9uID09PSB0aGlzO1xuICB9XG5cbiAgLyogYmluZCBjbGFzcy5hY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBwdWJsaWMgYWN0aXZlID0gZmFsc2U7XG5cblxuICAvKiBjaGVja2JveCBtb2RlbCAoZm9yIG11bHRpcGxlIHNlbGVjdGlvbnMpICovXG4gIHB1YmxpYyBjaGVja2JveE1vZGVsOiBib29sZWFuO1xuXG4gIC8qIHBhcmVudCBjb21wb25lbnQgcmVmZXJlbmNlICovXG4gIHNlbGVjdDogRHJvcGRvd25Db21wb25lbnQ7XG5cblxuICAvKiBjbGljayBldmVudCBsaXN0ZW5lciAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBVSUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdC5zZWxlY3RPcHRpb24odGhpcyk7XG4gICAgfVxuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kcm9wZG93blNlcnZpY2U6IERyb3Bkb3duU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNlbGVjdCA9IHRoaXMuX2Ryb3Bkb3duU2VydmljZS5nZXRTZWxlY3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBvcHRpb24gbGFiZWxcbiAgICovXG4gIHB1YmxpYyBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBpbmFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCBvcHRpb24gaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdEl0ZW0oKSB7XG4gICAgdGhpcy5zZWxlY3Quc2VsZWN0T3B0aW9uKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==