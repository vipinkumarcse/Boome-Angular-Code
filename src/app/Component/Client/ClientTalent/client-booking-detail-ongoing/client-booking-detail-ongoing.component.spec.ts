import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBookingDetailOngoingComponent } from './client-booking-detail-ongoing.component';

describe('ClientBookingDetailOngoingComponent', () => {
  let component: ClientBookingDetailOngoingComponent;
  let fixture: ComponentFixture<ClientBookingDetailOngoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBookingDetailOngoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBookingDetailOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
