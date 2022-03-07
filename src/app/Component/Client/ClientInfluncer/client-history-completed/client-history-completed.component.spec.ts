import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoryCompletedComponent } from './client-history-completed.component';

describe('ClientHistoryCompletedComponent', () => {
  let component: ClientHistoryCompletedComponent;
  let fixture: ComponentFixture<ClientHistoryCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoryCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoryCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
