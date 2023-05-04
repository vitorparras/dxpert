import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-familiares',
  templateUrl: './dados-familiares.component.html',
  styleUrls: ['./dados-familiares.component.css'],
})
export class DadosFamiliaresComponent implements OnInit {
  formularioSeguroForm!: FormGroup;
  mostrarCamposConjuge: boolean = true;
  filhos: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formularioSeguroForm = this.fb.group({
      estadoCivil: ['Não Informado', Validators.required],
      dtCasamento: [''],
      nomeConjuge: [''],
      dtNascConjuge: [''],
      possuiFilhos: ['Não Informado', Validators.required],
    });

    this.formularioSeguroForm
      .get('estadoCivil')
      ?.valueChanges.subscribe((estadoCivil) => {
        this.mostrarCamposConjuge = estadoCivil !== 'Solteiro';
      });

    this.formularioSeguroForm
      .get('possuiFilhos')
      ?.valueChanges.subscribe((possuiFilhos) => {
        this.filhos = possuiFilhos !== 'Nao';
      });
  }

  onSubmit(): void {
    if (this.formularioSeguroForm.valid) {
      // aqui você pode enviar os dados do formulário para o servidor
    }
   
    if(this.filhos){
      this.router.navigate(['/cadastro/dados-descendentes']);
    }
    else{
      this.router.navigate(['/cadastro/dados-profissionais']);
    }
  }

  atualizarEstadoCivil(): void {
    // atualize o estado civil conforme necessário
  }

  onFocus(event: any): void {
    event.target.type = 'date';
  }
}
