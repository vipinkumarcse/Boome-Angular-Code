import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienttalentComponent } from './clienttalent.component';

describe('ClienttalentComponent', () => {
  let component: ClienttalentComponent;
  let fixture: ComponentFixture<ClienttalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienttalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienttalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
