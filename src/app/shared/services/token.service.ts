import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private expiresIn = 1 / 24;
  private tokenName = 'AuthToken';

  constructor(private cookieService: CookieService) {}

  saveToken(token: string): void {
    this.cookieService.set(this.tokenName, JSON.stringify(token), {
      expires: this.expiresIn,
    });
  }

  getToken(): string {
    return this.cookieService.get(this.tokenName);
  }

  clearToken(): void {
    this.cookieService.delete(this.tokenName, '/');
  }
}
