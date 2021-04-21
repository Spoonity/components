import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextFieldExampleComponent } from './text-field-example.component';

describe('TextFieldExampleComponent', () => {
  let component: TextFieldExampleComponent;
  let fixture: ComponentFixture<TextFieldExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
