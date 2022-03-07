import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBookingDetailUpcomingComponent } from './client-booking-detail-upcoming.component';

describe('ClientBookingDetailUpcomingComponent', () => {
  let component: ClientBookingDetailUpcomingComponent;
  let fixture: ComponentFixture<ClientBookingDetailUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBookingDetailUpcomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBookingDetailUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
