import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMensGroupComponent } from './app-mens-group.component';

describe('AppMensGroupComponent', () => {
  let component: AppMensGroupComponent;
  let fixture: ComponentFixture<AppMensGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMensGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMensGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
