import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocialClientComponent } from './add-social-client.component';

describe('AddSocialClientComponent', () => {
  let component: AddSocialClientComponent;
  let fixture: ComponentFixture<AddSocialClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocialClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocialClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
