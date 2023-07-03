import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { RelatorioService } from 'src/app/services/relatorio.service';
import { localStorageVarNames } from 'src/environments/localStorageVarNames';

@Component({
  selector: 'app-relatorio-completo',
  templateUrl: './relatorio-completo.component.html',
  styleUrls: ['./relatorio-completo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RelatorioCompletoComponent {
  constructor(
    public loadingService: LoadingService,
    private router: Router,
    private _relatorioService: RelatorioService
  ) {}

  relatorio: any

  ngOnInit() {
    var idCad = localStorage.getItem(localStorageVarNames.IdCadastroAtual) ?? 1;

    this._relatorioService.getRelatorio(idCad).subscribe((res) => {
      console.log(res);
      this.relatorio = res;
    });
  }
}
