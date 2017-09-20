import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.JournalsComponent } from './app.journals.component';

describe('App.JournalsComponent', () => {
  let component: App.JournalsComponent;
  let fixture: ComponentFixture<App.JournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.JournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.JournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
