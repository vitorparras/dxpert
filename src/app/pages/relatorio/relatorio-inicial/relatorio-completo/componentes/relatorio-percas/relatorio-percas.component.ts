import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-relatorio-percas',
  templateUrl: './relatorio-percas.component.html',
  styleUrls: ['./relatorio-percas.component.css'],
})
export class RelatorioPercasComponent implements OnInit {
  @Input() relatorio: any;

  constructor(private currencyPipe: CurrencyPipe) {}

  formatarParaReal(valor: number): string | null {
    return this.currencyPipe.transform(
      valor,
      'BRL',
      'symbol',
      '1.2-2',
      'pt-BR'
    );
  }







  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#000000',
        anchor: 'end',
        align: 'start',
        offset: -20,
        formatter: function(value, context) {
          return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
      }
    }
  };
  public barChartLabels = ['Na Aposentadoria', 'Na invalidez', 'Pensão por morte'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [0, 6000, 15000], label: 'Valores'}
  ];

  ngOnInit() {
    Chart.register(ChartDataLabels);
  }








}
