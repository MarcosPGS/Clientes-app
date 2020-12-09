import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './core/template/template.module';
import { ClientesModule } from './views/clientes/clientes.module';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServicoPrestadoModule } from './views/servico-prestado/servico-prestado.module';
import { DatePipe } from '@angular/common';
import { LoginModule } from './views/login/login.module';
import { AplicacaoComponent } from './views/aplicacao/aplicacao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AplicacaoComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    ClientesModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ServicoPrestadoModule,
    LoginModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
