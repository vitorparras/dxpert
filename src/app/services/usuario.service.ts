import { HttpClient, HttpHeaders } from '@angular/common/http';
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



  findUser(id:number): Observable<any> {
    return this.httpClient.get<any>(apiUrlUsuario + '/Find?id='+id);
  }

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(apiUrlUsuario + '/List');
  }

  // Função para excluir um usuário pelo ID
  deleteUser(usuario: number): Observable<any> {
    return this.httpClient.delete<any>(apiUrlUsuario + '/Delete/'+usuario);
  }

  // Função para editar um usuário pelo ID
  editUser(userData: any): Observable<any> {
    return this.httpClient.put<any>(apiUrlUsuario + '/Edit', userData);
  }

  // Função para ADD um usuário pelo ID
  addUser(userData: any): Observable<any> {
    return this.httpClient.post<any>(apiUrlUsuario + '/Add', userData);
  }














}
