import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHowToHelpComponent } from './app-how-to-help.component';

describe('AppHowToHelpComponent', () => {
  let component: AppHowToHelpComponent;
  let fixture: ComponentFixture<AppHowToHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHowToHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHowToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
