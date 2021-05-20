import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStoryExampleComponent } from './menu-story-example.component';

describe('MenuStoryExampleComponent', () => {
  let component: MenuStoryExampleComponent;
  let fixture: ComponentFixture<MenuStoryExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStoryExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStoryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
