import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobRequestComponent } from './client-job-request.component';

describe('ClientJobRequestComponent', () => {
  let component: ClientJobRequestComponent;
  let fixture: ComponentFixture<ClientJobRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
