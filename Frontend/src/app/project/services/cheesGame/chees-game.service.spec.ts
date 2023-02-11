import { TestBed } from '@angular/core/testing';

import { CheesGameService } from './chees-game.service';

describe('CheesGameService', () => {
  let service: CheesGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheesGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
