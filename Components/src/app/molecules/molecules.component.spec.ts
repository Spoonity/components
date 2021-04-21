import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoleculesComponent } from './molecules.component';

describe('MoleculesComponent', () => {
  let component: MoleculesComponent;
  let fixture: ComponentFixture<MoleculesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
