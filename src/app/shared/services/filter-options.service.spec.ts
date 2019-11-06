import { TestBed } from '@angular/core/testing';

import { FilterOptionsService } from './filter-options.service';

describe('FilterOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterOptionsService = TestBed.get(FilterOptionsService);
    expect(service).toBeTruthy();
  });
});
