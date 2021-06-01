import { appUploadFileIcon } from '../../../svg/File/upload_file';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
export class UploadComponent {
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
                template: "<ng-template #tplTitle>\n    <span class=\"title\">\n    {{ upload.title }}\n    </span>\n</ng-template>\n<ng-template #tplContent>\n    <span class=\"content\">\n    {{ upload.content }}\n  </span>\n  <br>\n  <br>\n    <nz-upload\n    nzType=\"drag\"\n    [nzMultiple]=\"true\"\n    nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n    (nzChange)=\"handleChange($event)\"\n    class=\"upload-box\"\n  >\n    <div class=\"upload-content\">\n      <spt-icon class=\"icons\" [toolTipTittle]=\"uploadFile\" [name]=\"uploadFile\"></spt-icon>\n      <span>Drag and Drop here</span>\n      <span>or</span>\n      <span><b>BROWSE FILES</b></span>\n\n    </div>\n    </nz-upload>\n\n    <div class=\"under-upload-text\">\n    <span>Accepted files</span>\n    <span>Maximum size</span>\n    </div>\n\n</ng-template>\n<ng-template #tplFooter let-ref=\"modalRef\">\n    <button nz-button nzType=\"secondary\" (click)=\"modalRef.destroy(); upload.action1()\">\n    {{ upload.action1Label }}\n  </button>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvQ29tcG9uZW50cy9PcmdhbmlzbXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBdUIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBYyxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWN6RCxNQUFNLE9BQU8sZUFBZTtJQVcxQixZQUNVLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxHQUFxQjtRQUZyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBVi9CLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFVRCxDQUFDO0lBRXBDLGlCQUFpQixDQUFDLE1BQWU7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBeUIsRUFBRSxVQUEyQixFQUFFLFNBQTBCO1FBQy9GLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEMsT0FBTyxFQUFFLFFBQVE7WUFDakIsU0FBUyxFQUFFLFVBQVU7WUFDckIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsY0FBYyxFQUFFLEtBQUs7WUFDckIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBTztRQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLDhCQUE4QixDQUFDLENBQUM7U0FDOUQ7YUFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMmdDQUFzQzs7YUFFdkM7OztZQWRvQixjQUFjO1lBRGlCLGdCQUFnQjtZQUUzRCxnQkFBZ0I7Ozt1QkFxQnRCLFNBQVMsU0FBQyxVQUFVO3lCQUNwQixTQUFTLFNBQUMsWUFBWTt3QkFDdEIsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBVcGxvYWRGaWxlSWNvbiB9IGZyb20gJy4uLy4uLy4uL3N2Zy9GaWxlL3VwbG9hZF9maWxlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek1vZGFsUmVmLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgYWN0aW9uMTogKCkgPT4gYW55O1xuICBhY3Rpb24xTGFiZWw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3B0LXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVwbG9hZDogSVVwbG9hZDtcblxuICB1cGxvYWRGaWxlID0gYXBwVXBsb2FkRmlsZUljb24ubmFtZTtcblxuICBtb2RhbFJlZjogTnpNb2RhbFJlZjtcbiAgQFZpZXdDaGlsZCgndHBsVGl0bGUnKSB0cGxUaXRsZT86IFRlbXBsYXRlUmVmPHt9PjtcbiAgQFZpZXdDaGlsZCgndHBsQ29udGVudCcpIHRwbENvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBWaWV3Q2hpbGQoJ3RwbEZvb3RlcicpIHRwbEZvb3Rlcj86IFRlbXBsYXRlUmVmPHt9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsOiBOek1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBtc2c6IE56TWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIGNyZWF0ZU1vZGFsVXBsb2FkKHVwbG9hZDogSVVwbG9hZCkge1xuICAgIHRoaXMudXBsb2FkID0gdXBsb2FkO1xuICAgIHRoaXMuY3JlYXRlVHBsTW9kYWwodGhpcy50cGxUaXRsZSwgdGhpcy50cGxDb250ZW50LCB0aGlzLnRwbEZvb3Rlcik7XG4gIH1cblxuICBjcmVhdGVUcGxNb2RhbCh0cGxUaXRsZTogVGVtcGxhdGVSZWY8e30+LCB0cGxDb250ZW50OiBUZW1wbGF0ZVJlZjx7fT4sIHRwbEZvb3RlcjogVGVtcGxhdGVSZWY8e30+KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWwuY3JlYXRlKHtcbiAgICAgIG56VGl0bGU6IHRwbFRpdGxlLFxuICAgICAgbnpDb250ZW50OiB0cGxDb250ZW50LFxuICAgICAgbnpGb290ZXI6IHRwbEZvb3RlcixcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIG56Q2xvc2FibGU6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IGZpbGUsIGZpbGVMaXN0IH06IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXR1cyA9IGZpbGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgdGhpcy5tc2cuc3VjY2VzcyhgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLm1zZy5lcnJvcihgJHtmaWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTtcbiAgICB9XG4gIH1cblxufVxuIl19