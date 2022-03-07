import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermConditionAppComponent } from './term-condition-app.component';

describe('TermConditionAppComponent', () => {
  let component: TermConditionAppComponent;
  let fixture: ComponentFixture<TermConditionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermConditionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermConditionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
