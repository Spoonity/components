import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuExampleComponent } from './menu-example.component';

describe('MenuExampleComponent', () => {
  let component: MenuExampleComponent;
  let fixture: ComponentFixture<MenuExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
