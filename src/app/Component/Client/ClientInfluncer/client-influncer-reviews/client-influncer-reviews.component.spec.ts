import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfluncerReviewsComponent } from './client-influncer-reviews.component';

describe('ClientInfluncerReviewsComponent', () => {
  let component: ClientInfluncerReviewsComponent;
  let fixture: ComponentFixture<ClientInfluncerReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfluncerReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfluncerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
