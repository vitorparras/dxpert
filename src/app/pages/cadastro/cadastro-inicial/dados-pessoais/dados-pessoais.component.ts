import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeInterval } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
})
export class DadosPessoaisComponent {
  selecao: 'F' | 'M' | undefined;
  err: string | undefined;
  form!: FormGroup;
  @Input() id: string | undefined;

  constructor(private fb: FormBuilder,
     public loadingService: LoadingService,
     private router: Router ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      rSelecione: ['', Validators.required],
    });

    this.form.get('rSelecione')?.valueChanges.subscribe((val) => {
      this.selecao = val;
    });
  }

  enviar() {
    this.loadingService.show();
    

    if (this.form.valid) {
     
    }

    setTimeout(() => {
      this.loadingService.hide();
      this.router.navigate(['/cadastro/dados-familiares']);
    }, 5000);
  }
}

