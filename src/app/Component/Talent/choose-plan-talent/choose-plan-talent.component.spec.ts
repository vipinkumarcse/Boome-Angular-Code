import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanTalentComponent } from './choose-plan-talent.component';

describe('ChoosePlanTalentComponent', () => {
  let component: ChoosePlanTalentComponent;
  let fixture: ComponentFixture<ChoosePlanTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePlanTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlanTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
