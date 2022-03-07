import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentBookingsComponent } from './client-talent-bookings.component';

describe('ClientTalentBookingsComponent', () => {
  let component: ClientTalentBookingsComponent;
  let fixture: ComponentFixture<ClientTalentBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
