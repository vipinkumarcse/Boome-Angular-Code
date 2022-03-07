import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfluncerMessageComponent } from './client-influncer-message.component';

describe('ClientInfluncerMessageComponent', () => {
  let component: ClientInfluncerMessageComponent;
  let fixture: ComponentFixture<ClientInfluncerMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfluncerMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfluncerMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
