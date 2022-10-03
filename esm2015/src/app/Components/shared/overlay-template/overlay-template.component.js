import { Component, Input, ViewChild, HostListener } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
export class OverlayTemplateComponent {
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
        if (!this.alwaysOn) {
            this.overlayRef.detach();
            this.showing = false;
        }
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
    alwaysOn: [{ type: Input }],
    contentTemplate: [{ type: ViewChild, args: [CdkPortal, { static: true },] }],
    onWinResize: [{ type: HostListener, args: ['window:resize',] }],
    visibilityChange: [{ type: HostListener, args: ['document:visibilitychange',] }],
    onFocus: [{ type: HostListener, args: ['window:blur',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQU14RSxNQUFNLE9BQU8sd0JBQXdCO0lBZW5DLFlBQXNCLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFGL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUd2QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUdNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHRCxnQkFBZ0I7UUFDZCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYjtTQUNGO0lBQ0gsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRVMsZ0JBQWdCO1FBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDN0MsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNuQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsYUFBYSxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRU4sT0FBTyxJQUFJLGFBQWEsQ0FBQztZQUN2QixnQkFBZ0I7WUFDaEIsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtDQUFrQztTQUNsRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDBGQUFnRDthQUNqRDs7O1lBTE8sT0FBTzs7O3dCQVFaLEtBQUs7dUJBR0wsS0FBSzs4QkFHTCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzswQkE0Qm5DLFlBQVksU0FBQyxlQUFlOytCQUs1QixZQUFZLFNBQUMsMkJBQTJCO3NCQVN4QyxZQUFZLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcHQtb3ZlcmxheS10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVybGF5LXRlbXBsYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5VGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZWZlcmVuY2U6IEhUTUxFbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhbHdheXNPbjogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKENka1BvcnRhbCwge3N0YXRpYzogdHJ1ZX0pXG4gIHB1YmxpYyBjb250ZW50VGVtcGxhdGU6IENka1BvcnRhbDtcblxuICBwcm90ZWN0ZWQgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBwdWJsaWMgc2hvd2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvdmVybGF5OiBPdmVybGF5KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KCkge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5jb250ZW50VGVtcGxhdGUpO1xuICAgIHRoaXMuc3luY1dpZHRoKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgIHRoaXMuc2hvd2luZyA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuYWx3YXlzT24pIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMuc2hvd2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBwdWJsaWMgb25XaW5SZXNpemUoKSB7XG4gICAgdGhpcy5zeW5jV2lkdGgoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnZpc2liaWxpdHljaGFuZ2UnKVxuICB2aXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJsdXInKVxuICBvbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3luY1dpZHRoKCkge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVmUmVjdCA9IHRoaXMucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHJlZlJlY3Qud2lkdGggfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMucmVmZXJlbmNlKVxuICAgICAgLndpdGhQdXNoKGZhbHNlKVxuICAgICAgLndpdGhQb3NpdGlvbnMoW3tcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICAgIH0sIHtcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICAgIH1dKTtcblxuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==