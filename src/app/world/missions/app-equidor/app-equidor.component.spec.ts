import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEquidorComponent } from './app-equidor.component';

describe('AppEquidorComponent', () => {
  let component: AppEquidorComponent;
  let fixture: ComponentFixture<AppEquidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEquidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEquidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
