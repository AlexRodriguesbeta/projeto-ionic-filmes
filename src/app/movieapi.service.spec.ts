import { TestBed } from '@angular/core/testing';

import { MovieapiService } from './movieapi.service';

describe('MovieapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieapiService = TestBed.get(MovieapiService);
    expect(service).toBeTruthy();
  });
});
