import { TestBed } from '@angular/core/testing';

import { DrinkService } from './drink.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DrinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DrinkService = TestBed.get(DrinkService);
    expect(service).toBeTruthy();
  });
});
