import { Component, OnInit, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UsuarioModel } from 'src/app/domain/models/usuariomodel';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SenhaAlterarDialogComponent } from 'src/app/pages/dialog/Senha-alterar-dialog/Senha-alterar-dialog.component';


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css'],
})
export class ListUsuarioComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  
  user: UsuarioModel = {
    Id: 1,
    Email: 'exemplo@dominio.com',
    Senha: 'minhaSenha',
    Ativo: 'S',
    Nome: 'Exemplo Nome',
    Permissao: 'A',
  };

  ngOnInit() {

  }

  openDialog(): void 
    {
      const dialogRef = this.dialog.open(SenhaAlterarDialogComponent, {
        data: {id: this.user.Id},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}