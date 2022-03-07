import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSettingSidebarComponent } from './client-setting-sidebar.component';

describe('ClientSettingSidebarComponent', () => {
  let component: ClientSettingSidebarComponent;
  let fixture: ComponentFixture<ClientSettingSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSettingSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSettingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
