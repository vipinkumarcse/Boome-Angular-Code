import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAboutUsComponent } from './settings-about-us.component';

describe('SettingsAboutUsComponent', () => {
  let component: SettingsAboutUsComponent;
  let fixture: ComponentFixture<SettingsAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
