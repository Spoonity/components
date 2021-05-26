import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldStoryExampleComponent } from './text-field-story-example.component';

describe('TextFieldStoryExampleComponent', () => {
  let component: TextFieldStoryExampleComponent;
  let fixture: ComponentFixture<TextFieldStoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldStoryExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldStoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
