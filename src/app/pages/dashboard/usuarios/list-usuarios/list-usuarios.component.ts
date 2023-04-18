import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AddUpdateUserComponent } from '../add-update-user/add-update-user.component';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.error(error)
    );
  }

  editUser(id: number): void {
    // Implemente a lógica de edição aqui
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => (this.users = this.users.filter((user) => user.id !== id)),
      (error) => console.error(error)
    );
  }

  onUserAdded(): void {
    this.getUsers();
  }

  onModalHidden(): void {
    // Remove o backdrop do modal
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
}
