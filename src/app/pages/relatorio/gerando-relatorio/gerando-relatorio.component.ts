import { Component } from '@angular/core';

@Component({
  selector: 'app-gerando-relatorio',
  templateUrl: './gerando-relatorio.component.html',
  styleUrls: ['./gerando-relatorio.component.css']
})
export class GerandoRelatorioComponent {
 
  id: string | undefined;
  idRelatorio: string | undefined;
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Aqui você pode fazer a lógica para buscar os dados do usuário, como ID e ID do relatório,
    // e setá-los nas propriedades correspondentes (id e idRelatorio).
    
    // Após isso, você pode chamar um serviço ou API que gera o relatório e realizar a lógica
    // para lidar com o resultado. Para fins de demonstração, vamos usar um timeout para simular
    // o processamento do relatório.
  
    this.isLoading = false;
  }

  cancelar() {
    // Aqui você pode fazer a lógica para cancelar a geração do relatório e redirecionar o usuário para
    // a página inicial, por exemplo.
  }
}
