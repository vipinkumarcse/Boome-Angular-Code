import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDetailsTalentComponent } from './register-details-talent.component';

describe('RegisterDetailsTalentComponent', () => {
  let component: RegisterDetailsTalentComponent;
  let fixture: ComponentFixture<RegisterDetailsTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDetailsTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDetailsTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
