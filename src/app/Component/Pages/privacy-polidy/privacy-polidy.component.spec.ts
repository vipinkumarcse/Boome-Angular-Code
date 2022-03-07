import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolidyComponent } from './privacy-polidy.component';

describe('PrivacyPolidyComponent', () => {
  let component: PrivacyPolidyComponent;
  let fixture: ComponentFixture<PrivacyPolidyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolidyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
