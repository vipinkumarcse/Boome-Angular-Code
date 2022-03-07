import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAboutusComponent } from './client-aboutus.component';

describe('ClientAboutusComponent', () => {
  let component: ClientAboutusComponent;
  let fixture: ComponentFixture<ClientAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
