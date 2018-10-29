import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeddingsComponent } from './app-weddings.component';

describe('AppWeddingsComponent', () => {
  let component: AppWeddingsComponent;
  let fixture: ComponentFixture<AppWeddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
