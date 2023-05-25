import { TestBed } from '@angular/core/testing';

import { GeneralModalService } from './general-modal.service';

describe('GeneralModalService', () => {
  let service: GeneralModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
