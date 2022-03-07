import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanClientComponent } from './choose-plan-client.component';

describe('ChoosePlanClientComponent', () => {
  let component: ChoosePlanClientComponent;
  let fixture: ComponentFixture<ChoosePlanClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePlanClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlanClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
