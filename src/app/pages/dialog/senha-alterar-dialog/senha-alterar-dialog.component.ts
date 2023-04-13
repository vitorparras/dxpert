import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioModel } from 'src/app/domain/models/usuariomodel';

@Component({
  selector: 'app-Senha-alterar-dialog',
  templateUrl: './Senha-alterar-dialog.component.html',
  styleUrls: ['./Senha-alterar-dialog.component.css']
})
export class SenhaAlterarDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<SenhaAlterarDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: UsuarioModel,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

}
