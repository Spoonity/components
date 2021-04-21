import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AtomsComponent } from './atoms.component';

describe('AtomsComponent', () => {
  let component: AtomsComponent;
  let fixture: ComponentFixture<AtomsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
