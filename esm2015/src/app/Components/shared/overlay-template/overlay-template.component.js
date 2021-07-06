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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBwL0NvbXBvbmVudHMvc2hhcmVkL292ZXJsYXktdGVtcGxhdGUvb3ZlcmxheS10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQU14RSxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DLFlBQXNCLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFGL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUd2QixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBR0QsZ0JBQWdCO1FBQ2QsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQzdDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLGFBQWEsQ0FBQyxDQUFDO2dCQUNkLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLEVBQUU7Z0JBQ0QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsUUFBUTthQUNuQixDQUFDLENBQUMsQ0FBQztRQUVOLE9BQU8sSUFBSSxhQUFhLENBQUM7WUFDdkIsZ0JBQWdCO1lBQ2hCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywwRkFBZ0Q7YUFDakQ7OztZQUxPLE9BQU87Ozt3QkFRWixLQUFLOzhCQUdMLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzBCQTBCbkMsWUFBWSxTQUFDLGVBQWU7K0JBSzVCLFlBQVksU0FBQywyQkFBMkI7c0JBU3hDLFlBQVksU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka1BvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtPdmVybGF5LCBPdmVybGF5Q29uZmlnLCBPdmVybGF5UmVmfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwdC1vdmVybGF5LXRlbXBsYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJsYXktdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJlZmVyZW5jZTogSFRNTEVsZW1lbnQ7XG5cbiAgQFZpZXdDaGlsZChDZGtQb3J0YWwsIHtzdGF0aWM6IHRydWV9KVxuICBwdWJsaWMgY29udGVudFRlbXBsYXRlOiBDZGtQb3J0YWw7XG5cbiAgcHJvdGVjdGVkIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG5cbiAgcHVibGljIHNob3dpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuY29udGVudFRlbXBsYXRlKTtcbiAgICB0aGlzLnN5bmNXaWR0aCgpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICB0aGlzLnNob3dpbmcgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIHRoaXMuc2hvd2luZyA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIHB1YmxpYyBvbldpblJlc2l6ZSgpIHtcbiAgICB0aGlzLnN5bmNXaWR0aCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dmlzaWJpbGl0eWNoYW5nZScpXG4gIHZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Ymx1cicpXG4gIG9uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jV2lkdGgoKSB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWZSZWN0ID0gdGhpcy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogcmVmUmVjdC53aWR0aCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5yZWZlcmVuY2UpXG4gICAgICAud2l0aFB1c2goZmFsc2UpXG4gICAgICAud2l0aFBvc2l0aW9ucyhbe1xuICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgICAgfSwge1xuICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgICAgfV0pO1xuXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCdcbiAgICB9KTtcbiAgfVxufVxuIl19