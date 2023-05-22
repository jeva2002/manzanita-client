import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Category,
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from 'src/app/models/Category.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesGatewayService {
  private BaseURL = environment.url + 'categories';

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.BaseURL);
  }

  public getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(this.BaseURL + `/${id}`);
  }

  public addCategory(newCategory: CreateCategoryDTO): Observable<string> {
    return this.http.post<string>(this.BaseURL + '/create', newCategory);
  }

  public updateCategory(
    updatedCategory: UpdateCategoryDTO
  ): Observable<string> {
    const { id, ...updatedData } = updatedCategory;
    return this.http.put<string>(this.BaseURL + `/${id}`, updatedData);
  }

  public deleteCategory(id: string): Observable<string> {
    //TODO debe avisarse que se eliminaran todos los productos bajo esta categoría
    return this.http.delete<string>(this.BaseURL + `/${id}`);
  }
}
