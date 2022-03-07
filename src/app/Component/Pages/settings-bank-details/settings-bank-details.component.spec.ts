import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBankDetailsComponent } from './settings-bank-details.component';

describe('SettingsBankDetailsComponent', () => {
  let component: SettingsBankDetailsComponent;
  let fixture: ComponentFixture<SettingsBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
