import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWomansGroupComponent } from './app-womans-group.component';

describe('AppWomansGroupComponent', () => {
  let component: AppWomansGroupComponent;
  let fixture: ComponentFixture<AppWomansGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWomansGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWomansGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
