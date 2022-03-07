import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPersonalDetailComponent } from './settings-personal-detail.component';

describe('SettingsPersonalDetailComponent', () => {
  let component: SettingsPersonalDetailComponent;
  let fixture: ComponentFixture<SettingsPersonalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPersonalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
