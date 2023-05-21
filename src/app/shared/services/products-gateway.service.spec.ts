import { TestBed } from '@angular/core/testing';

import { ProductsGatewayService } from './products-gateway.service';

describe('ProductsGatewayService', () => {
  let service: ProductsGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
