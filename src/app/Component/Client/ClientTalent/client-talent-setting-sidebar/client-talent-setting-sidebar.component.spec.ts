import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentSettingSidebarComponent } from './client-talent-setting-sidebar.component';

describe('ClientTalentSettingSidebarComponent', () => {
  let component: ClientTalentSettingSidebarComponent;
  let fixture: ComponentFixture<ClientTalentSettingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentSettingSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentSettingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
