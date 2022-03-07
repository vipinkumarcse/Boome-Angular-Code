import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluncerheaderComponent } from './influncerheader.component';

describe('InfluncerheaderComponent', () => {
  let component: InfluncerheaderComponent;
  let fixture: ComponentFixture<InfluncerheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluncerheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluncerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
