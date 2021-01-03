import { TestBed } from '@angular/core/testing';

import { SlideMenuTrigerService } from './slide-menu-triger.service';

describe('SlideMenuTrigerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideMenuTrigerService = TestBed.get(SlideMenuTrigerService);
    expect(service).toBeTruthy();
  });
});
