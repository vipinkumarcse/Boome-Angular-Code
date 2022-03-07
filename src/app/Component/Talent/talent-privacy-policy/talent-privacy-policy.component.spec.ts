import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPrivacyPolicyComponent } from './talent-privacy-policy.component';

describe('TalentPrivacyPolicyComponent', () => {
  let component: TalentPrivacyPolicyComponent;
  let fixture: ComponentFixture<TalentPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
