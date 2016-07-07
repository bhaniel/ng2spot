/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SpotService } from './spot.service';

describe('Spot Service', () => {
  beforeEachProviders(() => [SpotService]);

  it('should ...',
      inject([SpotService], (service: SpotService) => {
    expect(service).toBeTruthy();
  }));
});
