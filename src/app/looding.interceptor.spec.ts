import { TestBed } from '@angular/core/testing';

import { LoodingInterceptor } from './looding.interceptor';

describe('LoodingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoodingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoodingInterceptor = TestBed.inject(LoodingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
