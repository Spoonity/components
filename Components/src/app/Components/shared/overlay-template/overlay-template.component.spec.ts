import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayTemplateComponent } from './overlay-template.component';

describe('DropdownTemplateComponent', () => {
  let component: OverlayTemplateComponent;
  let fixture: ComponentFixture<OverlayTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
