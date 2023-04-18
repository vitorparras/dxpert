import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Bootstrap from 'bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent  {

  @Output() userAdded = new EventEmitter<void>();
  
  user = {
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    senhaConfirm: '',
    permissao: 0 // 0 = Usuário, 1 = Administrador
  };

  passwordMismatch = false;

  constructor(private userService: UsuarioService) { }

  validatePassword(): void {
    this.passwordMismatch = this.user.senha !== this.user.senhaConfirm;
  }

  addUser(form: NgForm): void {
     // Converta a propriedade "permission" para um inteiro
     this.user.permissao = parseInt(this.user.permissao.toString(), 10);

    if (this.passwordMismatch) {
      return;
    }
    this.userService.addUser(this.user).subscribe(
      () => {
        // Emite o evento userAdded
        this.userAdded.emit();
        form.resetForm();
      },
      error => console.error(error)
    );
  }
}
