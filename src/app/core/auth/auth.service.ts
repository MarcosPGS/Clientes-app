import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  HOST: string;
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '1209600',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-frame-Options': 'DENY',
      'X-XXS-Protection': '1',
      'Access-Control-Allow-Headers':
        'Origin, X-Request-Width, Content-Type, Accept, Content-Type, Authorization, Accept-Version, Content-MD5, CSRF-Token, Access-Control-Request-Method, Access-Control-Request-Headers, if-none-match',
    }),
  };

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  logar(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders()
      // .append('skip', 'true')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
      .append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http
      .post<any>(this.oauthTokenUrl, body, { headers })
      .pipe(
        tap((resp) => {
          this.armazenarToken(resp.access_token);
        })
      );
  }
  armazenarToken(token: string): void {
    localStorage.setItem('token', token);
  }
  removendoToken(): void {
    localStorage.removeItem('token');
  }
  getUsuarioAutenticado(): void{
    const token = localStorage.getItem('token');
    if (token) {
      const usuario = this.jwtHelper.decodeToken(token);
      return usuario;
    }
    return null;
  }

  obterToken(): string{
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }

  // carregarToken(): void {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     this.armazenarToken(token);
  //   }
  // }

}

