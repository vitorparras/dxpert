import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protecao-custos',
  templateUrl: './protecao-custos.component.html',
  styleUrls: ['./protecao-custos.component.css']
})
export class ProtecaoCustosComponent {
  @Input() relatorio: any;

  dadosBeneficiosInvalides = { Valor: '0', ValorCalculado: '0' }; // Substitua por um valor dinâmico conforme necessário
  dadosBeneficiosMorte = { Valor: '0', ValorCalculado: '0' }; // Substitua por um valor dinâmico conforme necessário

  protecoes = [
    { Aos: '0', Valor: '0' }, // Substitua por um valor dinâmico conforme necessário
    // Adicione mais objetos conforme necessário
  ];

  somaprot = this.protecoes.reduce((sum, protecao) => sum + Number(protecao.Valor), 0);

  salvarBeneficio(beneficio: string) {
    this.relatorio = this.relatorio;
    // Implemente a lógica de salvamento aqui
  }


  transformAmount(value: any) {
    let val = value;
    val = val.replace(/\D/g, ''); // substitui qualquer caracter que não seja número por nada
    val = val.replace(/(\d)(\d{2})$/, '$1,$2'); // coloca virgula antes dos 2 últimos dígitos
    val = val.replace(/(?=(\d{3})+(\D))\B/g, '.'); // coloca ponto a cada 3 dígitos
    if (val.length > 0) {
      val = `R$ ${val}`; // adiciona o prefixo
    }
    return val;
  }
  
}
