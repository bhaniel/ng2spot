/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Artist} from './artist';

describe('Artist', () => {
  it('should create an instance', () => {
    expect(new Artist()).toBeTruthy();
  });
});
