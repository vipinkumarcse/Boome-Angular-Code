import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentSettingsComponent } from './client-talent-settings.component';

describe('ClientTalentSettingsComponent', () => {
  let component: ClientTalentSettingsComponent;
  let fixture: ComponentFixture<ClientTalentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
