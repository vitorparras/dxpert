import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-saude',
  templateUrl: './dados-saude.component.html',
  styleUrls: ['./dados-saude.component.css']
})
export class DadosSaudeComponent {

  form!: FormGroup;
  @Input() id: string | undefined;
  baseUrl: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      problemaSaude: ['', Validators.required],
      tomaRemedio: ['', Validators.required],
      fuma: ['', Validators.required],
      maiorPrioridade: ['', Validators.required]
    });
    this.baseUrl = window.location.origin;
  }

  enviar() {
    // Substitua o console.log() com a lógica que deseja executar ao enviar o formulário
    console.log(this.form.value);
    this.router.navigate(['/relatorio/gerando']);
  }
}
