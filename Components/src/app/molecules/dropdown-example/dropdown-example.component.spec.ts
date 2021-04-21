import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownExampleComponent } from './dropdown-example.component';

describe('DropdownExampleComponent', () => {
  let component: DropdownExampleComponent;
  let fixture: ComponentFixture<DropdownExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
