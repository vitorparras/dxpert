import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-descendentes',
  templateUrl: './dados-descendentes.component.html',
  styleUrls: ['./dados-descendentes.component.css']
})
export class DadosDescendentesComponent {

  constructor(private router: Router ) {}

  filhos: any[] = [{ nome: '', dtNasc: '' }];

  adicionarFilho() {
    this.filhos.push({ nome: '', dtNasc: '' });
  }

  enviarFormulario() {
    // Lógica para enviar os dados do formulário

    this.router.navigate(['/cadastro/dados-profissionais']);

  }
  onFocus(event: any): void {
    event.target.type = 'date';
  }
}
