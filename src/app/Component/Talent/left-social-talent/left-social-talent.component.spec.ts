import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSocialTalentComponent } from './left-social-talent.component';

describe('LeftSocialTalentComponent', () => {
  let component: LeftSocialTalentComponent;
  let fixture: ComponentFixture<LeftSocialTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSocialTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSocialTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
