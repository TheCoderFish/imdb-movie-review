import { TestBed } from '@angular/core/testing';

import { QueryStringService } from './query-string.service';

describe('QueryStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryStringService = TestBed.get(QueryStringService);
    expect(service).toBeTruthy();
  });
});
