import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditSocialComponent } from './client-edit-social.component';

describe('ClientEditSocialComponent', () => {
  let component: ClientEditSocialComponent;
  let fixture: ComponentFixture<ClientEditSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEditSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
