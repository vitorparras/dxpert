import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

const apiUrlUsuario = environment.apiUrl + 'Relatorio';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  constructor(private http: HttpClient) {}

  getRelatorio(id: any) {
    return this.http.get(apiUrlUsuario + '/GetRelatorio?cadastro=' + id);
  }

  getEvolucaoDeCustos(id: number, valorMorte: string, valorInvalidez: string) {
    const params = {
      Cadastro: id,
      ValorMorte: valorMorte,
      ValorInvalidez: valorInvalidez
    };
  
    return this.http.get(apiUrlUsuario + '/CalcularValorEvolucaoDeCustos', { params });
  }
}
