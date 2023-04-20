import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
})
export class DadosPessoaisComponent {
  @Input() id: string | undefined;
  baseUrl = window.location.origin + '/'; // Define a base URL da aplicação

  onSubmit(form: HTMLFormElement | undefined) {
    // Previne o comportamento padrão do formulário (recarregar a página)
   // event.preventDefault();

    // Obtém os dados do formulário
    const formData = new FormData(form);

    // Faz uma requisição AJAX para enviar os dados
    fetch('url_do_endpoint', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Se a requisição for bem-sucedida, redireciona o usuário para a próxima página
          window.location.href = 'proxima_pagina.html';
        } else {
          // Caso contrário, exibe uma mensagem de erro
          alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
        }
      })
      .catch((error) => {
        // Em caso de erro na requisição, exibe uma mensagem de erro
        alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
      });
  }
}
