import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken, Credentials } from 'src/app/models/Admin.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<AuthToken> {
    return this.http.post<AuthToken>(
      'http://localhost:8000/admin/login_check',
      { username: credentials.email, password: credentials.password }
    );
  }
}
