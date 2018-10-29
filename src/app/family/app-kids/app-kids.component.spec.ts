import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppKidsComponent } from './app-kids.component';

describe('AppKidsComponent', () => {
  let component: AppKidsComponent;
  let fixture: ComponentFixture<AppKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
