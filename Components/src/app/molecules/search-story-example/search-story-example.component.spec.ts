import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStoryExampleComponent } from './search-story-example.component';

describe('SearchStoryExampleComponent', () => {
  let component: SearchStoryExampleComponent;
  let fixture: ComponentFixture<SearchStoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStoryExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
