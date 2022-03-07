import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingTimeComponent } from './travelling-time.component';

describe('TravellingTimeComponent', () => {
  let component: TravellingTimeComponent;
  let fixture: ComponentFixture<TravellingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravellingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
