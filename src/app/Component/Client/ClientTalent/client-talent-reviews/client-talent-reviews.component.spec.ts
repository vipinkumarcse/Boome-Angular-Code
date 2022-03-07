import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTalentReviewsComponent } from './client-talent-reviews.component';

describe('ClientTalentReviewsComponent', () => {
  let component: ClientTalentReviewsComponent;
  let fixture: ComponentFixture<ClientTalentReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTalentReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTalentReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
