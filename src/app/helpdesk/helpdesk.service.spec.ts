import { TestBed, inject } from '@angular/core/testing';

import { HelpdeskService } from './helpdesk.service';

describe('HelpdeskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelpdeskService]
    });
  });

  it('should be created', inject([HelpdeskService], (service: HelpdeskService) => {
    expect(service).toBeTruthy();
  }));
});
