import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExampleComponent } from './sidebar-example.component';

describe('SidebarExampleComponent', () => {
  let component: SidebarExampleComponent;
  let fixture: ComponentFixture<SidebarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
