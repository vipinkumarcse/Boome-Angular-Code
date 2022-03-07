import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientContactusComponent } from './client-contactus.component';

describe('ClientContactusComponent', () => {
  let component: ClientContactusComponent;
  let fixture: ComponentFixture<ClientContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
