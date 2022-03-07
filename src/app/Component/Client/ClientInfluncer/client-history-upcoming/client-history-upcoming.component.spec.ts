import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryUpcomingComponent } from './client-history-upcoming.component';

describe('ClientHistoryUpcomingComponent', () => {
  let component: ClientHistoryUpcomingComponent;
  let fixture: ComponentFixture<ClientHistoryUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoryUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoryUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
