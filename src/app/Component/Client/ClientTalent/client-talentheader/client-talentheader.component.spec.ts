import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentheaderComponent } from './client-talentheader.component';

describe('ClientTalentheaderComponent', () => {
  let component: ClientTalentheaderComponent;
  let fixture: ComponentFixture<ClientTalentheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTalentheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
