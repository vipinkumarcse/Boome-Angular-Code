import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMainComponent } from './client-main.component';

describe('ClientMainComponent', () => {
  let component: ClientMainComponent;
  let fixture: ComponentFixture<ClientMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
