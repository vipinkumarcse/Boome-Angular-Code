import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSocialClientComponent } from './left-social-client.component';

describe('LeftSocialClientComponent', () => {
  let component: LeftSocialClientComponent;
  let fixture: ComponentFixture<LeftSocialClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSocialClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSocialClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
