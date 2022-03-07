import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireTalentComponent } from './hire-talent.component';

describe('HireTalentComponent', () => {
  let component: HireTalentComponent;
  let fixture: ComponentFixture<HireTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
