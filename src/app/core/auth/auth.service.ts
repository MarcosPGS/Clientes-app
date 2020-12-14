import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  HOST: string;
  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  URL: string;
  CLIENTID: string;
  CLIENTSECRET: string;
  constructor(private http: HttpClient) {
    this.CLIENTID = environment.clientID;
    this.CLIENTSECRET = environment.clientSecret;
  }

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

  logar(usuario: string, senha: string): Observable<any> {
    const headers = new HttpHeaders()
   .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
    .append('Content-Type', 'application/x-www-form-urlencoded');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post<any>(this.oauthTokenUrl, body, {headers});
  }

  // logar2(usuario: string, senha: string): Observable<any> {
  //   const headers = new HttpHeaders()
  //   .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')
  //   .append('Content-Type', 'application/x-www-form-urlencoded');

  //   const body = `username=${usuario}&password=${senha}&grant_type=password`;

  //   return this.http.post<any>(this.oauthTokenUrl, body, { headers });
  // }
}

