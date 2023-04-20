import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { BaseComponent } from './pages/shared/base/base.component';
import { AngularTiltModule } from 'angular-tilt';
import { ComponentsModule } from './pages/shared/components/components.module';

import { ChartsModule } from 'ng2-charts';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { ListUsuariosComponent } from './pages/dashboard/usuarios/list-usuarios/list-usuarios.component';
import { ListUsuarioComponent } from './pages/dashboard/usuarios/list-usuario/list-usuario.component';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUpdateUserComponent } from './pages/dashboard/usuarios/add-update-user/add-update-user.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SenhaAlterarDialogComponent } from './pages/dialog/Senha-alterar-dialog/Senha-alterar-dialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { DadosPessoaisComponent } from './pages/cadastro/dados-pessoais/dados-pessoais.component';
import { DadosFamiliaresComponent } from './pages/cadastro/dados-familiares/dados-familiares.component';
import { DadosDescendentesComponent } from './pages/cadastro/dados-descendentes/dados-descendentes.component';
import { DadosProfissionaisComponent } from './pages/cadastro/dados-profissionais/dados-profissionais.component';
import { DadosFinanceirosComponent } from './pages/cadastro/dados-financeiros/dados-financeiros.component';
import { DadosSaudeComponent } from './pages/cadastro/dados-saude/dados-saude.component';
import { GerandoRelatorioComponent } from './pages/relatorio/gerando-relatorio/gerando-relatorio.component';
import { RelatorioGradoSucessoComponent } from './pages/relatorio/relatorio-grado-sucesso/relatorio-grado-sucesso.component';
import { RelatorioMainComponent } from './pages/relatorio/relatorio-main/relatorio-main.component';
import { DocumentacaoComponent } from './pages/cadastroCinza/documentacao/documentacao.component';
import { DadosFiscaisComponent } from './pages/cadastroCinza/dados-fiscais/dados-fiscais.component';
import { EnderecoResidencialComponent } from './pages/cadastroCinza/endereco-residencial/endereco-residencial.component';
import { BeneficiariosComponent } from './pages/cadastroCinza/beneficiarios/beneficiarios.component';
import { FormaPagamentoComponent } from './pages/cadastroCinza/forma-pagamento/forma-pagamento.component';
import { DeclaracaoPessoalComponent } from './pages/cadastroCinza/declaracao-pessoal/declaracao-pessoal.component';
import { SaudeAtividadeComponent } from './pages/cadastroCinza/saude-atividade/saude-atividade.component';
import { CinzaMainComponent } from './pages/relatorioCinza/cinza-main/cinza-main.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BaseComponent,
    IndexComponent,

    //usuarios
    ListUsuariosComponent,
    ListUsuarioComponent,
    AddUpdateUserComponent,
    SenhaAlterarDialogComponent,
    DadosPessoaisComponent,
    DadosFamiliaresComponent,
    DadosDescendentesComponent,
    DadosProfissionaisComponent,
    DadosFinanceirosComponent,
    DadosSaudeComponent,
    GerandoRelatorioComponent,
    RelatorioGradoSucessoComponent,
    RelatorioMainComponent,
    DocumentacaoComponent,
    DadosFiscaisComponent,
    EnderecoResidencialComponent,
    BeneficiariosComponent,
    FormaPagamentoComponent,
    DeclaracaoPessoalComponent,
    SaudeAtividadeComponent,
    CinzaMainComponent,

    // cadastros




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    AngularTiltModule,
    ComponentsModule,
    FontAwesomeModule,
    ChartsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
