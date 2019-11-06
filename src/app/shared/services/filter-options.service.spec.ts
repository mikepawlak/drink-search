import { TestBed } from '@angular/core/testing';

import { FilterOptionsService } from './filter-options.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('FilterOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: FilterOptionsService = TestBed.get(FilterOptionsService);
    expect(service).toBeTruthy();
  });
});
