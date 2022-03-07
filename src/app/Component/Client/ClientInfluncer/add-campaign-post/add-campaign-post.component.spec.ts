import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignPostComponent } from './add-campaign-post.component';

describe('AddCampaignPostComponent', () => {
  let component: AddCampaignPostComponent;
  let fixture: ComponentFixture<AddCampaignPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampaignPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampaignPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
