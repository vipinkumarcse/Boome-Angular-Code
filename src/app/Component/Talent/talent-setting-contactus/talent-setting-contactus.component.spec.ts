import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSettingContactusComponent } from './talent-setting-contactus.component';

describe('TalentSettingContactusComponent', () => {
  let component: TalentSettingContactusComponent;
  let fixture: ComponentFixture<TalentSettingContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentSettingContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSettingContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
