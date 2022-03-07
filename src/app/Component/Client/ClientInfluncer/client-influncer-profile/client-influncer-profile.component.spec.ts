import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfluncerProfileComponent } from './client-influncer-profile.component';

describe('ClientInfluncerProfileComponent', () => {
  let component: ClientInfluncerProfileComponent;
  let fixture: ComponentFixture<ClientInfluncerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfluncerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfluncerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
