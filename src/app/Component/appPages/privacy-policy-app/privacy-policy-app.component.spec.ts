import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyAppComponent } from './privacy-policy-app.component';

describe('PrivacyPolicyAppComponent', () => {
  let component: PrivacyPolicyAppComponent;
  let fixture: ComponentFixture<PrivacyPolicyAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
