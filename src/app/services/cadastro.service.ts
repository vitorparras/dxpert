import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const apiUrlUsuario = environment.apiUrl + 'Cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  edit(data: any): Observable<any> {
    return this.httpClient.put<any>(apiUrlUsuario + '/AddOrUpdate', data);
  }

  list(): Observable<any> {
    return this.httpClient.get<any>(apiUrlUsuario + '/List');
  }

  addDescendentes(data: any): Observable<any> {
    return this.httpClient.post<any>(apiUrlUsuario + '/AddDescendentes', data);
  }

  getAcompanhamentosByUser(data: any): Observable<any> {
    return this.httpClient.get<any>(apiUrlUsuario + '/Acompanhamentos/' + data);
  }

  getAcompanhamentos(): Observable<any> {
    return this.httpClient.get<any>(apiUrlUsuario + '/Acompanhamentos');
  }


}
