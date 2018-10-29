import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEldersComponent } from './app-elders.component';

describe('AppEldersComponent', () => {
  let component: AppEldersComponent;
  let fixture: ComponentFixture<AppEldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
