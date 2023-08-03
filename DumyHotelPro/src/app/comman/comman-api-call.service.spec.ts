import { TestBed } from '@angular/core/testing';

import { CommanApiCallService } from './comman-api-call.service';

describe('CommanApiCallService', () => {
  let service: CommanApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommanApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
