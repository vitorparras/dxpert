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
