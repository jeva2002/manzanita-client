import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from 'src/app/models/Product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsGatewayService {
  private BaseURL = environment.url + 'products';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BaseURL);
  }

  public getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.BaseURL + `/${id}`);
  }

  public addProduct(newProduct: CreateProductDTO): Observable<string> {
    return this.http.post<string>(this.BaseURL + '/create', newProduct);
  }

  public updateProduct(updatedProduct: UpdateProductDTO): Observable<string> {
    const { id, ...updatedData } = updatedProduct;
    return this.http.put<string>(this.BaseURL + `/${id}`, updatedData);
  }

  public deleteProduct(id: string): Observable<string> {
    return this.http.delete<string>(this.BaseURL + `/${id}`);
  }
}
