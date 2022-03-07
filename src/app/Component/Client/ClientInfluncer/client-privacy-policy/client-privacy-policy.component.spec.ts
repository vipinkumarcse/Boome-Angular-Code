import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPrivacyPolicyComponent } from './client-privacy-policy.component';

describe('ClientPrivacyPolicyComponent', () => {
  let component: ClientPrivacyPolicyComponent;
  let fixture: ComponentFixture<ClientPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
