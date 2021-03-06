import { HttpClient, HttpHeaders } from '@angular/common/http';
import { STRING_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/core/models/cliente';
import { environment } from '../../../environments/environment';
import { TotalizadorClientes } from '../../core/models/totalizado-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  HOST: string;
  PATH = '/v1/api/clientes';
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



  atualizar(cliente: Cliente): Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    return this.http.put<Cliente>(`${this.URL}`, cliente, { headers });
  }
  buscarPorNome(nome: string): Observable<Cliente[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    const url = `${this.URL}/${nome}`;
    return this.http.get<Cliente[]>(url, { headers });
  }
  buscarPorId(id: number): Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    const url = `${this.URL}/id/${id}`;
    return this.http.get<Cliente>(url, { headers });
  }
  excluir(id: number): Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    const url = `${this.URL}/${id}`;
    return this.http.delete<Cliente>(url, { headers });
  }
  listarTodosClientes(): Observable<Cliente[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    return this.http.get<Cliente[]>(`${this.URL}`, { headers });
  }

  salvar(cliente: Cliente): Observable<Cliente>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    return this.http.post<Cliente>(`${this.URL}`, cliente, { headers });
  }

  totalizarClientes(): Observable<TotalizadorClientes> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + token);
    const url = `${this.URL}/totalizador`;
    return this.http.get<TotalizadorClientes>(url, { headers });
  }
}
