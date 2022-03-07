import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsCompletedComponent } from './booking-details-completed.component';

describe('BookingDetailsCompletedComponent', () => {
  let component: BookingDetailsCompletedComponent;
  let fixture: ComponentFixture<BookingDetailsCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingDetailsCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
