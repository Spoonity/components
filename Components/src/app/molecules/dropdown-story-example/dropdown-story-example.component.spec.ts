import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStoryExampleComponent } from './dropdown-story-example.component';

describe('DropdownStoryExampleComponent', () => {
  let component: DropdownStoryExampleComponent;
  let fixture: ComponentFixture<DropdownStoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownStoryExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownStoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
