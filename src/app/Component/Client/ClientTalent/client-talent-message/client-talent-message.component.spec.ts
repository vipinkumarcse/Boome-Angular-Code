import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentMessageComponent } from './client-talent-message.component';

describe('ClientTalentMessageComponent', () => {
  let component: ClientTalentMessageComponent;
  let fixture: ComponentFixture<ClientTalentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
