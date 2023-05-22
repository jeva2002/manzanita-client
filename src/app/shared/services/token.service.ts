import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  saveToken(token: string): void {
    this.cookieService.set('AuthToken', JSON.stringify(token), {
      expires: 1 / 24,
    });
  }

  getToken(): string {
    return this.cookieService.get('AuthToken');
  }

  clearToken(): void {
    this.cookieService.delete(
      'AuthToken',
      '/',
    );
  }
}
