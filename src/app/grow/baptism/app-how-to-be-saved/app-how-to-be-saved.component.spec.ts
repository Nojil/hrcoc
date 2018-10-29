import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHowToBeSavedComponent } from './app-how-to-be-saved.component';

describe('AppHowToBeSavedComponent', () => {
  let component: AppHowToBeSavedComponent;
  let fixture: ComponentFixture<AppHowToBeSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHowToBeSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHowToBeSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
