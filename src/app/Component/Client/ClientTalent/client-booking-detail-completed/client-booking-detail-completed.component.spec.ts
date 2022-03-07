import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBookingDetailCompletedComponent } from './client-booking-detail-completed.component';

describe('ClientBookingDetailCompletedComponent', () => {
  let component: ClientBookingDetailCompletedComponent;
  let fixture: ComponentFixture<ClientBookingDetailCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBookingDetailCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBookingDetailCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
