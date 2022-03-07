import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentDetailComponent } from './client-talent-detail.component';

describe('ClientTalentDetailComponent', () => {
  let component: ClientTalentDetailComponent;
  let fixture: ComponentFixture<ClientTalentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
