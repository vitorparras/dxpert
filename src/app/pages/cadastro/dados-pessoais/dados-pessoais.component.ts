import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeInterval } from 'rxjs/operators';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
})
export class DadosPessoaisComponent {
  // Em cadastro-main.component.ts
  selecao: 'F' | 'M' | undefined;
  form!: FormGroup;
  @Input() id: string | undefined;

  constructor(
    private fb: FormBuilder,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required, Validators.minLength(11)],
      nome: ['', Validators.required, Validators.minLength(3)],
      dataNascimento: ['', Validators.required, Validators.minLength(10)],
      rSelecione: ['', Validators.required],
    });
  }

  enviar() {
    this.spinnerService.show();
    if (this.form.valid) {

      setTimeout(function() {
        console.log("2 segundos se passaram!");
        }, 20000);

    }

    this.spinnerService.hide();
  }
}
