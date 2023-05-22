import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthToken, Credentials } from 'src/app/models/Admin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private BaseURL = environment.url + 'admin/login_check';

  constructor(private http: HttpClient) {}

  public login(credentials: Credentials): Observable<AuthToken> {
    return this.http.post<AuthToken>(this.BaseURL, {
      username: credentials.email,
      password: credentials.password,
    });
  }
}
