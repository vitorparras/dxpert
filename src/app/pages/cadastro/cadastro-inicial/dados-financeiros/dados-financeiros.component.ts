import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mask } from '../../../../domain/helps/Mask/Mask';

@Component({
  selector: 'app-dados-financeiros',
  templateUrl: './dados-financeiros.component.html',
  styleUrls: ['./dados-financeiros.component.css']
})
export class DadosFinanceirosComponent {
  form!: FormGroup;
  mask: Mask = new Mask();
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      impostoRenda: [''],
      rendaBrutaMensal: [''],
      despesaMensal: [''],
      reservaEmergencia: [''],
      tempoReserva: [''],
      etapa: 'Dados Financeiros',
    });
  }

  atualizarEstadoCivil() {
    const estadoCivilValue = this.form.get('estadoCivil')?.value;
    if (estadoCivilValue === 'Solteiro') {
      this.form.get('dtCasamento')?.reset();
      this.form.get('nomeConjuge')?.reset();
      this.form.get('dtNascConjuge')?.reset();
    }
  }

  enviar() {
    if (this.form.valid) {
      console.log('Formulário válido:', this.form.value);
      // Aqui você pode adicionar a chamada para a próxima rota
    }

    this.router.navigate(['/cadastro/dados-saude']);
  }
}
