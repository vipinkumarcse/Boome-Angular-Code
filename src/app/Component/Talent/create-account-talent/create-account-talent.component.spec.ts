import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountTalentComponent } from './create-account-talent.component';

describe('CreateAccountTalentComponent', () => {
  let component: CreateAccountTalentComponent;
  let fixture: ComponentFixture<CreateAccountTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
