import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSocialAccountComponent } from './settings-social-account.component';

describe('SettingsSocialAccountComponent', () => {
  let component: SettingsSocialAccountComponent;
  let fixture: ComponentFixture<SettingsSocialAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSocialAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSocialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
