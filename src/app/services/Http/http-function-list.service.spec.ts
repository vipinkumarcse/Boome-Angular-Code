import { TestBed } from '@angular/core/testing';

import { HttpFunctionListService } from './http-function-list.service';

describe('HttpFunctionListService', () => {
  let service: HttpFunctionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFunctionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
