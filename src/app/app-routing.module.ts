import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstatisticasComponent } from './components/dashboard/estatisticas/estatisticas.component';
import { ListUsuarioComponent } from './components/dashboard/usuarios/list-usuario/list-usuario.component';
import { ListUsuariosComponent } from './components/dashboard/usuarios/list-usuarios/list-usuarios.component';
import { IndexbaseComponent } from './components/dashboard/indexbase/indexbase.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { CadastroMainComponent } from './components/dxpert/cadastro/inicial/cadastro-main/cadastro-main.component';
import { DadosDescendentesComponent } from './components/dxpert/cadastro/inicial/dados-descendentes/dados-descendentes.component';
import { DadosFinanceirosComponent } from './components/dxpert/cadastro/inicial/dados-financeiros/dados-financeiros.component';
import { DadosSaudeComponent } from './components/dxpert/cadastro/inicial/dados-saude/dados-saude.component';
import { RelatorioListComponent } from './components/dashboard/relatorio-list/relatorio-list.component';
import { RelatorioGeradoSucessoComponent } from './components/dxpert/relatorio/inicial/relatorio-gerado-sucesso/relatorio-gerado-sucesso.component';
import { RelatorioMainComponent } from './components/dxpert/relatorio/inicial/relatorio-main/relatorio-main.component';
import { DadosFamiliaresComponent } from './components/dxpert/cadastro/inicial/dados-familiares/dados-familiares.component';
import { DadosPessoaisComponent } from './components/dxpert/cadastro/inicial/dados-pessoais/dados-pessoais.component';
import { DadosProfissionaisComponent } from './components/dxpert/cadastro/inicial/dados-profissionais/dados-profissionais.component';
import { ConfiguracoesComponent } from './components/dashboard/configuracoes/configuracoes.component';
import { AcompanhamentosComponent } from './components/dashboard/acompanhamentos/acompanhamentos.component';
import { RelatorioCompletoComponent } from './components/dxpert/relatorio/inicial/relatorio-completo/relatorio-completo.component';
import { GerandoRelatorioComponent } from './components/dxpert/relatorio/inicial/gerando-relatorio/gerando-relatorio.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard]
  },
  {
    path: 'home',
    component: IndexbaseComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: '',
    component: IndexbaseComponent,
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      { path: '', component: EstatisticasComponent },
      { path: 'index', component: EstatisticasComponent },
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
