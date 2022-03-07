import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBookingDetailRatedComponent } from './client-booking-detail-rated.component';

describe('ClientBookingDetailRatedComponent', () => {
  let component: ClientBookingDetailRatedComponent;
  let fixture: ComponentFixture<ClientBookingDetailRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientBookingDetailRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBookingDetailRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
