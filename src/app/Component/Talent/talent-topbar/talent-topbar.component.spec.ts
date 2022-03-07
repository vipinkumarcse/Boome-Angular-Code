import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentTopbarComponent } from './talent-topbar.component';

describe('TalentTopbarComponent', () => {
  let component: TalentTopbarComponent;
  let fixture: ComponentFixture<TalentTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
