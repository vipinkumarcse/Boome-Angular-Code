import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentProfileComponent } from './client-talent-profile.component';

describe('ClientTalentProfileComponent', () => {
  let component: ClientTalentProfileComponent;
  let fixture: ComponentFixture<ClientTalentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
