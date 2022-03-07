import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireTalentPaymentComponent } from './hire-talent-payment.component';

describe('HireTalentPaymentComponent', () => {
  let component: HireTalentPaymentComponent;
  let fixture: ComponentFixture<HireTalentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireTalentPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireTalentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
