import { TestBed } from '@angular/core/testing';

import { JuvePlayersService } from './juve-players.service';

describe('JuvePlayersService', () => {
  let service: JuvePlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuvePlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
