import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentDetailExtraComponent } from './client-talent-detail-extra.component';

describe('ClientTalentDetailExtraComponent', () => {
  let component: ClientTalentDetailExtraComponent;
  let fixture: ComponentFixture<ClientTalentDetailExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentDetailExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentDetailExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
