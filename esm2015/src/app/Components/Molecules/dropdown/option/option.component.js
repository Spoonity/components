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
        event.preventDefault();
        event.stopPropagation();
        this.select.selectOption(this);
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
                template: "<div class=\"option-container\">\n    <!--- multiple selection (include checkbox -->\n    <div *ngIf=\"select.selectMultiple\" nz-col nzSpan=\"8\">\n        <label nz-checkbox nzValue=\"{{value}}\" [(ngModel)]=\"checkboxModel\" (ngModelChange)=\"selectItem()\">{{text}}</label>\n    </div>\n\n    <!-- single selection -->\n    <div *ngIf=\"!select.selectMultiple\">{{text}}</div>\n</div>\n",
                styles: [".options-container{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.option-item-active{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){.option-item-active{background-color:#f3f3f3}}:host{display:block;padding:0 .875rem;height:2.5rem;line-height:2.5rem;color:#4f4e4d;background-color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}:host.active,:host.selected,:host:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host.selected,:host:hover{background-color:#f3f3f3}}:host.selected{font-weight:700}:host.active,:host:hover{background-color:#f3f3f3;outline:none}@media screen and (-ms-high-contrast:active){:host.active,:host:hover{background-color:#f3f3f3}}:host.disabled{color:#93a1aa;cursor:auto}:host.disabled:focus,:host.disabled:hover{outline:none;background-color:#fff}@media screen and (-ms-high-contrast:active){:host.disabled:focus,:host.disabled:hover{background-color:#fff}}.option-container{display:flex}"]
            },] }
];
OptionComponent.ctorParameters = () => [
    { type: DropdownService }
];
OptionComponent.propDecorators = {
    value: [{ type: Input }],
    text: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    active: [{ type: HostBinding, args: ['class.active',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9Nb2xlY3VsZXMvZHJvcGRvd24vb3B0aW9uL29wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFRcEQsTUFBTSxPQUFPLGVBQWU7SUFtQzFCLFlBQ1UsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUF0QjNDLHVCQUF1QjtRQUVoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBc0JwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBL0JELHlCQUF5QjtJQUN6QixJQUNXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixLQUFLLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBY0QsMEJBQTBCO0lBRW5CLE9BQU8sQ0FBQyxLQUFjO1FBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQVNELFFBQVE7SUFDUixDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrWkFBc0M7O2FBRXZDOzs7WUFQTyxlQUFlOzs7b0JBV3BCLEtBQUs7bUJBR0wsS0FBSzt1QkFHTCxXQUFXLFNBQUMsZ0JBQWdCO3FCQU01QixXQUFXLFNBQUMsY0FBYztzQkFZMUIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RHJvcGRvd25TZXJ2aWNlfSBmcm9tICcuLi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7RHJvcGRvd25Db21wb25lbnR9IGZyb20gJy4uL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9uLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKiBvcHRpb24gdmFsdWUgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBhbnk7XG5cbiAgLyogb3B0aW9uIGRpc3BsYXkgdGV4dCAqL1xuICBASW5wdXQoKSBwdWJsaWMgdGV4dDogc3RyaW5nO1xuXG4gIC8qIGJpbmQgY2xhc3Muc2VsZWN0ZWQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RlZCcpXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0LnNpbmdsZV9zZWxlY3RlZE9wdGlvbiA9PT0gdGhpcztcbiAgfVxuXG4gIC8qIGJpbmQgY2xhc3MuYWN0aXZlICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgcHVibGljIGFjdGl2ZSA9IGZhbHNlO1xuXG5cbiAgLyogY2hlY2tib3ggbW9kZWwgKGZvciBtdWx0aXBsZSBzZWxlY3Rpb25zKSAqL1xuICBwdWJsaWMgY2hlY2tib3hNb2RlbDogYm9vbGVhbjtcblxuICAvKiBwYXJlbnQgY29tcG9uZW50IHJlZmVyZW5jZSAqL1xuICBzZWxlY3Q6IERyb3Bkb3duQ29tcG9uZW50O1xuXG5cbiAgLyogY2xpY2sgZXZlbnQgbGlzdGVuZXIgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogVUlFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3Quc2VsZWN0T3B0aW9uKHRoaXMpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kcm9wZG93blNlcnZpY2U6IERyb3Bkb3duU2VydmljZVxuICApIHtcbiAgICB0aGlzLnNlbGVjdCA9IHRoaXMuX2Ryb3Bkb3duU2VydmljZS5nZXRTZWxlY3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBvcHRpb24gbGFiZWxcbiAgICovXG4gIHB1YmxpYyBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogc2V0IGFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBpbmFjdGl2ZSBzdGF0dXNcbiAgICovXG4gIHB1YmxpYyBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbGVjdCBvcHRpb24gaXRlbVxuICAgKi9cbiAgcHVibGljIHNlbGVjdEl0ZW0oKSB7XG4gICAgdGhpcy5zZWxlY3Quc2VsZWN0T3B0aW9uKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==