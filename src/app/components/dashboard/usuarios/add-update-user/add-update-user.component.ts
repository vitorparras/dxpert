import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css'],
})
export class AddUpdateUserComponent {

  @Output() userAdded = new EventEmitter<void>();
  @Output() userEdited = new EventEmitter<void>();
  @Output() userReloaded = new EventEmitter<void>();

  @Input() isEditMode: boolean = false;

  
  private _userId: number | null = null;

  @Input()
  set userId(value: number | null) {
    this._userId = value;
    this.loadUser();
  }

  get userId(): number | null {
    return this._userId;
  }


  editUserId: number | null = null;

  public user = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    senhaConfirm: '',
    permissao: 0, // 0 = Usuário, 1 = Administrador
  };

  passwordMismatch = false;

  constructor(private userService: UsuarioService) {}

  loadUser(): void {
    if (this.userId !== null && this.userId != 0) {
      this.userService.findUser(this.userId).subscribe(
        (response) => {
          this.user = {
            ...this.user,
            email: response.email,
            nome: response.nome,
            telefone: response.telefone,
            permissao: response.permissao,
            id: response.id,
          };
          this.isEditMode = true;
        },
        (error) => console.error(error)
      );
    } else {
      this.user = {
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        senhaConfirm: '',
        permissao: 0,
      };
      this.isEditMode = false;
    }
  }

  validatePassword(): void {
    this.passwordMismatch = this.user.senha !== this.user.senhaConfirm;
  }

  addUser(form: NgForm): void {
    this.user.permissao = parseInt(this.user.permissao.toString(), 10);

    if (this.passwordMismatch) {
      return;
    }

    if (this.isEditMode) {
      this.userService.editUser(this.user).subscribe(
        () => {
          this.userEdited.emit();
          form.resetForm();
          this.reloadUser();
        },
        (error) => console.error(error)
      );
    } else {
      this.userService.addUser(this.user).subscribe(
        () => {
          this.userAdded.emit();
          form.resetForm();
        },
        (error) => console.error(error)
      );
    }
  }

  reloadUser() {
    if (this.userId !== null && this.userId !== 0) {
      this.loadUser();
    }
  }


}
