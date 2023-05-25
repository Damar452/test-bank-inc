import { TestBed } from '@angular/core/testing';

import { ExportDocumentService } from './export-document.service';

describe('ExportDocumentService', () => {
  let service: ExportDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
