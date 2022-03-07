import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAddressDetailsComponent } from './settings-address-details.component';

describe('SettingsAddressDetailsComponent', () => {
  let component: SettingsAddressDetailsComponent;
  let fixture: ComponentFixture<SettingsAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
