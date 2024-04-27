import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { ListUsuarioComponent } from './pages/dashboard/usuarios/list-usuario/list-usuario.component';
import { ListUsuariosComponent } from './pages/dashboard/usuarios/list-usuarios/list-usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { CadastroMainComponent } from './pages/cadastro/cadastro-inicial/cadastro-main/cadastro-main.component';
import { DadosDescendentesComponent } from './pages/cadastro/cadastro-inicial/dados-descendentes/dados-descendentes.component';
import { DadosFinanceirosComponent } from './pages/cadastro/cadastro-inicial/dados-financeiros/dados-financeiros.component';
import { DadosSaudeComponent } from './pages/cadastro/cadastro-inicial/dados-saude/dados-saude.component';
import { RelatorioListComponent } from './pages/dashboard/relatorio-list/relatorio-list.component';
import { GerandoRelatorioComponent } from './pages/relatorio/relatorio-inicial/gerando-relatorio/gerando-relatorio.component';
import { RelatorioGeradoSucessoComponent } from './pages/relatorio/relatorio-inicial/relatorio-gerado-sucesso/relatorio-gerado-sucesso.component';
import { RelatorioMainComponent } from './pages/relatorio/relatorio-inicial/relatorio-main/relatorio-main.component';
import { DadosFamiliaresComponent } from './pages/cadastro/cadastro-inicial/dados-familiares/dados-familiares.component';
import { DadosPessoaisComponent } from './pages/cadastro/cadastro-inicial/dados-pessoais/dados-pessoais.component';
import { DadosProfissionaisComponent } from './pages/cadastro/cadastro-inicial/dados-profissionais/dados-profissionais.component';
import { ConfiguracoesComponent } from './pages/dashboard/configuracoes/configuracoes.component';
import { AcompanhamentosComponent } from './pages/dashboard/acompanhamentos/acompanhamentos.component';
import { RelatorioCompletoComponent } from './pages/relatorio/relatorio-inicial/relatorio-completo/relatorio-completo.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'usuario', component: ListUsuarioComponent },
      { path: 'usuarios', component: ListUsuariosComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent },
      { path: 'acompanhamentos', component: AcompanhamentosComponent },
      { path: 'relatorios', component: RelatorioListComponent },
      { path: 'relatorioCompleto', component: RelatorioCompletoComponent },
      { path: 'cadastro', component: CadastroMainComponent,
        children: [
          { path: 'dados-pessoais', component: DadosPessoaisComponent },
          { path: 'dados-familiares', component: DadosFamiliaresComponent },
          { path: 'dados-descendentes', component: DadosDescendentesComponent },
          { path: 'dados-profissionais', component: DadosProfissionaisComponent },
          { path: 'dados-financeiros', component: DadosFinanceirosComponent },
          { path: 'dados-saude', component: DadosSaudeComponent }
        ]
      },
      { path: 'relatorio', component: RelatorioMainComponent,
          children: [
            { path: 'gerando', component: GerandoRelatorioComponent },
            { path: 'gerado', component: RelatorioGeradoSucessoComponent },
          ]
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
