import { OnInit } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
export declare class OverlayTemplateComponent implements OnInit {
    protected overlay: Overlay;
    reference: HTMLElement;
    contentTemplate: CdkPortal;
    protected overlayRef: OverlayRef;
    showing: boolean;
    constructor(overlay: Overlay);
    ngOnInit(): void;
    show(): void;
    hide(): void;
    onWinResize(): void;
    private syncWidth;
    protected getOverlayConfig(): OverlayConfig;
}
