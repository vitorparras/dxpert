import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-profissionais',
  templateUrl: './dados-profissionais.component.html',
  styleUrls: ['./dados-profissionais.component.css'],
})
export class DadosProfissionaisComponent {
  @Input() id: string | undefined;

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router
    ) {
    this.form = this.fb.group({
      profissao: ['', Validators.required],
      ocupacao: ['', Validators.required],
      anosContribuicao: ['', Validators.required],
      dataPosse: ['', Validators.required],
      regimeContratacao: ['', Validators.required],
    });
  }

  enviar() {
    if (this.form.valid) {
      // enviar dados
    }

    this.router.navigate(['/cadastro/dados-financeiros']);
  }
}
