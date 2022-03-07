import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfluncerDetailsComponent } from './client-influncer-details.component';

describe('ClientInfluncerDetailsComponent', () => {
  let component: ClientInfluncerDetailsComponent;
  let fixture: ComponentFixture<ClientInfluncerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfluncerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfluncerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
