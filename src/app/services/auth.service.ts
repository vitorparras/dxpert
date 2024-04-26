import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { localStorageVarNames } from 'src/environments/localStorageVarNames';
import { IUsuario } from '../interfaces/IUsuario';
const apiUrlAuth = environment.apiUrl + 'Auth';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post<any>(apiUrlAuth + '/Login', usuario).pipe(
      tap((resposta) => {
        if (resposta.success == true) {
          localStorage.setItem(localStorageVarNames.Token ,resposta.data['token']);
          localStorage.setItem(localStorageVarNames.NomeUsuario ,resposta.data['nome']);
          localStorage.setItem(localStorageVarNames.IdUser , resposta.data['idUser']);
        }
      })
    );
  }

  deslogar() {
    this.httpClient.post<any>(apiUrlAuth + '/Logout', null).subscribe({
      next: (resposta) => {
      }
    });
    localStorage.clear();
    this.router.navigate(['login']);
  }

  get obterTokenUsuario(): string {
    return localStorage.getItem(localStorageVarNames.Token) ?? '';
  }

  get logado(): boolean {
    return localStorage.getItem(localStorageVarNames.Token) ? true : false;
  }
}
