import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-sugestao-para-recuperar',
  templateUrl: './relatorio-sugestao-para-recuperar.component.html',
  styleUrls: ['./relatorio-sugestao-para-recuperar.component.css']
})
export class RelatorioSugestaoParaRecuperarComponent {
  @Input() relatorio: any;

  somaTotal: number = 0;

  OnInit() {
    this.somaTotal = this.relatorio.produtosSugestaoParaRecuperar.reduce((total: any, produ: { Valor2: any; }) => total + produ.Valor2, 0);
  }


}
