/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NavbarTopComponent } from './navbar-top.component';

describe('Component: NavbarTop', () => {
  it('should create an instance', () => {
    let component = new NavbarTopComponent();
    expect(component).toBeTruthy();
  });
});
