import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientinfluencerComponent } from './clientinfluencer.component';

describe('ClientinfluencerComponent', () => {
  let component: ClientinfluencerComponent;
  let fixture: ComponentFixture<ClientinfluencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientinfluencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientinfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
