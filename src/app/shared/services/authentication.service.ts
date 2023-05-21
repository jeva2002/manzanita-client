import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/models/Admin.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<string> {
    console.log(credentials);
    return this.http.post<string>(
      'http://localhost:8000/admin/login_check',
      { username: credentials.email, password: credentials.password },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      }
    );
  }
}
