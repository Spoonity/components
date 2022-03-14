import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
export class DialogsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvT3JnYW5pc21zL2RpYWxvZ3MvZGlhbG9ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBOEIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU9qRSxNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLFlBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDO1FBQWpFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFMUYsV0FBVyxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBeUIsRUFBRSxVQUEyQixFQUFFLFNBQTBCO1FBQy9GLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEMsT0FBTyxFQUFFLFFBQVE7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsY0FBYyxFQUFFLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpbEJBQXVDOzthQUV4Qzs7O1lBTm9CLGNBQWM7WUFEd0IsZ0JBQWdCOzs7dUJBYXhFLFNBQVMsU0FBQyxVQUFVO3lCQUNwQixTQUFTLFNBQUMsWUFBWTt3QkFDdEIsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TW9kYWxSZWYsIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1kaWFsb2dzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2dzLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGlhbG9nOiBJTW9kYWw7XG5cbiAgbW9kYWxSZWY6IE56TW9kYWxSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RwbFRpdGxlJykgdHBsVGl0bGU/OiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBWaWV3Q2hpbGQoJ3RwbENvbnRlbnQnKSB0cGxDb250ZW50PzogVGVtcGxhdGVSZWY8e30+O1xuICBAVmlld0NoaWxkKCd0cGxGb290ZXInKSB0cGxGb290ZXI/OiBUZW1wbGF0ZVJlZjx7fT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbDogTnpNb2RhbFNlcnZpY2UsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgY3JlYXRlTW9kYWwoZGlhbG9nOiBJTW9kYWwpIHtcbiAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZztcbiAgICB0aGlzLmNyZWF0ZVRwbE1vZGFsKHRoaXMudHBsVGl0bGUsIHRoaXMudHBsQ29udGVudCwgdGhpcy50cGxGb290ZXIpO1xuICB9XG5cbiAgY3JlYXRlVHBsTW9kYWwodHBsVGl0bGU6IFRlbXBsYXRlUmVmPHt9PiwgdHBsQ29udGVudDogVGVtcGxhdGVSZWY8e30+LCB0cGxGb290ZXI6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLm1vZGFsLmNyZWF0ZSh7XG4gICAgICBuelRpdGxlOiB0cGxUaXRsZSxcbiAgICAgIG56Q29udGVudDogdHBsQ29udGVudCxcbiAgICAgIG56Rm9vdGVyOiB0cGxGb290ZXIsXG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICBuekNsb3NhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNb2RhbCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgYWN0aW9uMTogKCkgPT4gYW55O1xuICBhY3Rpb24yOiAoKSA9PiBhbnk7XG4gIGFjdGlvbjFMYWJlbDogc3RyaW5nO1xuICBhY3Rpb24yTGFiZWw6IHN0cmluZztcbn1cbiJdfQ==