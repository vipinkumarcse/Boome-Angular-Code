import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSettingAboutUsComponent } from './talent-setting-about-us.component';

describe('TalentSettingAboutUsComponent', () => {
  let component: TalentSettingAboutUsComponent;
  let fixture: ComponentFixture<TalentSettingAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentSettingAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentSettingAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
