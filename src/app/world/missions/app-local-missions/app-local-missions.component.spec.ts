import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLocalMissionsComponent } from './app-local-missions.component';

describe('AppLocalMissionsComponent', () => {
  let component: AppLocalMissionsComponent;
  let fixture: ComponentFixture<AppLocalMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLocalMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLocalMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
