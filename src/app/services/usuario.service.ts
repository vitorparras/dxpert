import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { localStorageVarNames } from 'src/environments/localStorageVarNames';
import { IUsuario } from '../interfaces/IUsuario';
const apiUrlUsuario = environment.apiUrl + 'Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post<any>(apiUrlUsuario + '/Login', usuario).pipe(
      tap((resposta) => {
        if (resposta.sucesso == true) {
          localStorage.setItem(localStorageVarNames.Token ,resposta['token']);
          localStorage.setItem(localStorageVarNames.NomeUsuario ,resposta['nome']);
          localStorage.setItem(localStorageVarNames.IdUser , resposta['idUser']);
        }
      })
    );
  }

  deslogar() {
    this.httpClient.post<any>(apiUrlUsuario + '/Logout', null).subscribe({
      next: (resposta) => {
          localStorage.clear();
          this.router.navigate(['login']);
      }
    });
  }

  get obterTokenUsuario(): string {
    return localStorage.getItem(localStorageVarNames.Token) ?? '';
  }

  get logado(): boolean {
    return localStorage.getItem(localStorageVarNames.Token) ? true : false;
  }
}
