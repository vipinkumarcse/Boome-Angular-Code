import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSettingPersonalDetailsComponent } from './talent-setting-personal-details.component';

describe('TalentSettingPersonalDetailsComponent', () => {
  let component: TalentSettingPersonalDetailsComponent;
  let fixture: ComponentFixture<TalentSettingPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentSettingPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSettingPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
