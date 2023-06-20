import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-relatorio-calculo-previdenciario',
  templateUrl: './relatorio-calculo-previdenciario.component.html',
  styleUrls: ['./relatorio-calculo-previdenciario.component.css']
})
export class RelatorioCalculoPrevidenciarioComponent {
  @Input() relatorio: any;

  constructor(private currencyPipe: CurrencyPipe) { }

  formatarParaReal(valor: number): string | null {
    return this.currencyPipe.transform(valor, 'BRL', 'symbol', '1.2-2', 'pt-BR');
  }

}
