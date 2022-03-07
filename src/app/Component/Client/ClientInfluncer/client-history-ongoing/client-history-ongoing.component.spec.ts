import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryOngoingComponent } from './client-history-ongoing.component';

describe('ClientHistoryOngoingComponent', () => {
  let component: ClientHistoryOngoingComponent;
  let fixture: ComponentFixture<ClientHistoryOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoryOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoryOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
