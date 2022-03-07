import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSocialDisconnectedComponent } from './settings-social-disconnected.component';

describe('SettingsSocialDisconnectedComponent', () => {
  let component: SettingsSocialDisconnectedComponent;
  let fixture: ComponentFixture<SettingsSocialDisconnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSocialDisconnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSocialDisconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
