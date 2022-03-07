import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfluncerHistoryComponent } from './client-influncer-history.component';

describe('ClientInfluncerHistoryComponent', () => {
  let component: ClientInfluncerHistoryComponent;
  let fixture: ComponentFixture<ClientInfluncerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfluncerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfluncerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
