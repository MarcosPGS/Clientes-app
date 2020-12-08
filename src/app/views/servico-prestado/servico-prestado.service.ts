import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from '../../core/models/servico-prestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  HOST: string;
  PATH = '/v1/api/servicos';
  URL: string;
  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.URL = `${this.HOST}${this.PATH}`;
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
      'Access-Control-Allow-Headers': 'Origin, X-Request-Width, Content-Type, Accept, Content-Type, Authorization, Accept-Version, Content-MD5, CSRF-Token, Access-Control-Request-Method, Access-Control-Request-Headers, if-none-match'
    })
  };

  listarTodosClientes(): Observable<ServicoPrestado[]> {
    return this.http.get<ServicoPrestado[]>(`${this.URL}`);
  }

  pesquisarServicos(nome: string, mes: string): Observable<ServicoPrestado[]> {
   const httpParams = new HttpParams()
   .set('nome', nome)
   .set('mes', mes);
   const url = `${this.URL}/pesquisar?` + httpParams.toString();
   return this.http.get<ServicoPrestado[]>(url);
  }
}
