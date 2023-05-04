import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component';
import { BaseComponent } from './pages/shared/base/base.component';
import { ComponentsModule } from './pages/shared/components/components.module';




import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './pages/dashboard/index/index.component';
import { ListUsuariosComponent } from './pages/dashboard/usuarios/list-usuarios/list-usuarios.component';
import { ListUsuarioComponent } from './pages/dashboard/usuarios/list-usuario/list-usuario.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddUpdateUserComponent } from './pages/dashboard/usuarios/add-update-user/add-update-user.component';


import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { DadosPessoaisComponent } from './pages/cadastro/dados-pessoais/dados-pessoais.component';
import { DadosFamiliaresComponent } from './pages/cadastro/dados-familiares/dados-familiares.component';
import { DadosDescendentesComponent } from './pages/cadastro/dados-descendentes/dados-descendentes.component';
import { DadosProfissionaisComponent } from './pages/cadastro/dados-profissionais/dados-profissionais.component';
import { DadosFinanceirosComponent } from './pages/cadastro/dados-financeiros/dados-financeiros.component';
import { DadosSaudeComponent } from './pages/cadastro/dados-saude/dados-saude.component';
import { GerandoRelatorioComponent } from './pages/relatorio/gerando-relatorio/gerando-relatorio.component';
import { RelatorioMainComponent } from './pages/relatorio/relatorio-main/relatorio-main.component';
import { DocumentacaoComponent } from './pages/cadastroCinza/documentacao/documentacao.component';
import { DadosFiscaisComponent } from './pages/cadastroCinza/dados-fiscais/dados-fiscais.component';
import { EnderecoResidencialComponent } from './pages/cadastroCinza/endereco-residencial/endereco-residencial.component';
import { BeneficiariosComponent } from './pages/cadastroCinza/beneficiarios/beneficiarios.component';
import { FormaPagamentoComponent } from './pages/cadastroCinza/forma-pagamento/forma-pagamento.component';
import { DeclaracaoPessoalComponent } from './pages/cadastroCinza/declaracao-pessoal/declaracao-pessoal.component';
import { SaudeAtividadeComponent } from './pages/cadastroCinza/saude-atividade/saude-atividade.component';
import { CinzaMainComponent } from './pages/relatorioCinza/cinza-main/cinza-main.component';
import { CadastroMainComponent } from './pages/cadastro/cadastro-main/cadastro-main.component';

import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkListboxModule} from '@angular/cdk/listbox';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';
import { RelatorioListComponent } from './pages/relatorio/relatorio-list/relatorio-list.component';
import { RelatorioGeradoSucessoComponent } from './pages/relatorio/relatorio-gerado-sucesso/relatorio-gerado-sucesso.component';





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
    DadosPessoaisComponent,
    DadosFamiliaresComponent,
    DadosDescendentesComponent,
    DadosProfissionaisComponent,
    DadosFinanceirosComponent,
    DadosSaudeComponent,
    GerandoRelatorioComponent,
    RelatorioMainComponent,
    DocumentacaoComponent,
    DadosFiscaisComponent,
    EnderecoResidencialComponent,
    BeneficiariosComponent,
    FormaPagamentoComponent,
    DeclaracaoPessoalComponent,
    SaudeAtividadeComponent,
    CinzaMainComponent,
    CadastroMainComponent,
    RelatorioListComponent,
    RelatorioGeradoSucessoComponent

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
    ComponentsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkListboxModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule


  ],
  exports: [
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkListboxModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    provideNgxMask(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

