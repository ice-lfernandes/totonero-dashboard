import { TestBed } from '@angular/core/testing';

import { DashboardBffService } from './dashboard-bff.service';

describe('DashboardBffService', () => {
  let service: DashboardBffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardBffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
