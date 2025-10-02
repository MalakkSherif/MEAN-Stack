import { TestBed } from '@angular/core/testing';

import { RecipeRequestService } from './recipe-request.service';

describe('RecipeRequestService', () => {
  let service: RecipeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
