import { TestBed } from '@angular/core/testing';

import { CategoriesGatewayService } from './categories-gateway.service';

describe('CategoriesGatewayService', () => {
  let service: CategoriesGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
