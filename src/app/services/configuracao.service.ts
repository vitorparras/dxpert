import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

const apiUrlUsuario = environment.apiUrl + 'Configuracao';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(apiUrlUsuario);
  }

  update(config: any) {
    return this.http.put(`${apiUrlUsuario}`, config);
  }
}
