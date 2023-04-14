import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
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
        if (resposta.token != null) {
          localStorage.setItem('token',resposta['token']);
          this.router.navigate(['']);
        }
      })
    );
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get obterUsuarioLogado(): IUsuario {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario') ?? ''))
      : null;
  }

  get obterIdUsuarioLogado(): string {
    var user = (
      JSON.parse(atob(localStorage.getItem('usuario') ?? '')) as IUsuario
    )?.id;

    return user ? '' : user ?? '';
  }

  get obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token') ?? ''))
      : null;
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
