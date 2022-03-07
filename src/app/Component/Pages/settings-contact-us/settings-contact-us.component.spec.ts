import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsContactUsComponent } from './settings-contact-us.component';

describe('SettingsContactUsComponent', () => {
  let component: SettingsContactUsComponent;
  let fixture: ComponentFixture<SettingsContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
