import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { ListUsuarioComponent } from './pages/dashboard/usuarios/list-usuario/list-usuario.component';
import { ListUsuariosComponent } from './pages/dashboard/usuarios/list-usuarios/list-usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BaseComponent } from './pages/shared/base/base.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { CadastroMainComponent } from './pages/cadastro/cadastro-main/cadastro-main.component';
import { DadosPessoaisComponent } from './pages/cadastro/dados-pessoais/dados-pessoais.component';
import { DadosFamiliaresComponent } from './pages/cadastro/dados-familiares/dados-familiares.component';
import { DadosDescendentesComponent } from './pages/cadastro/dados-descendentes/dados-descendentes.component';
import { DadosProfissionaisComponent } from './pages/cadastro/dados-profissionais/dados-profissionais.component';
import { DadosFinanceirosComponent } from './pages/cadastro/dados-financeiros/dados-financeiros.component';
import { DadosSaudeComponent } from './pages/cadastro/dados-saude/dados-saude.component';
import { RelatorioListComponent } from './pages/relatorio/relatorio-list/relatorio-list.component';
import { GerandoRelatorioComponent } from './pages/relatorio/gerando-relatorio/gerando-relatorio.component';
import { RelatorioGeradoSucessoComponent } from './pages/relatorio/relatorio-gerado-sucesso/relatorio-gerado-sucesso.component';
import { RelatorioMainComponent } from './pages/relatorio/relatorio-main/relatorio-main.component';

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
            { path: 'completo', component: RelatorioMainComponent },
            { path: 'list', component: RelatorioListComponent }
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
