import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { Chart, ChartOptions, ChartType, registerables } from 'chart.js';
import { Label } from 'chartist';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-relatorio-percas',
  templateUrl: './relatorio-percas.component.html',
  styleUrls: ['./relatorio-percas.component.css'],
})
export class RelatorioPercasComponent {
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

  limpaValor(valor: any): number {
    return Number(valor.replace(/[^0-9,-]+/g, '').replace(',', '.'));
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#000000',
        anchor: 'end',
        align: 'start',
        offset: -20,
        formatter: function (value, context) {
          return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          });
        },
      },
    },
  };

  public barChartLabels: Label[] = [
    'Renda',
    'Despesa',
    'Na Aposentadoria',
    'Na invalidez',
    'Pensão por morte',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [
    { data: [0, 0, 0, 0, 0], label: 'Valores', },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['relatorio'] &&
      changes['relatorio'].currentValue != undefined
    ) {
      this.updateChartData();
    }
  }

  updateChartData() {
    if (this.relatorio) {
      var rendalimpa = this.limpaValor(this.relatorio.rendaHoje);
      var despesalimpa = this.limpaValor(this.relatorio.despesaTotal);

      this.barChartData = [
        {
          data: [
            rendalimpa,
            despesalimpa,
            this.limpaValor(this.relatorio.naAposentadoria),
            this.limpaValor(this.relatorio.naInvalidez),
            this.limpaValor(this.relatorio.naPensaoPorMorte),
          ],
          label: 'Valores',
          backgroundColor: 'rgba(235, 102, 8, 0.8)'
        },
      ];
    }
  }
}
