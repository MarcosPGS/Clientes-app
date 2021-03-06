import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { LoginRecuperarSenhaComponent } from './login-recuperar-senha/login-recuperar-senha.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { LoginService } from './login.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/auth/token.interceptor';

@NgModule({
  declarations: [LoginCadastroComponent, LoginRecuperarSenhaComponent, LoginLogoutComponent],
  imports: [
CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ], exports: [LoginCadastroComponent, LoginRecuperarSenhaComponent, LoginLogoutComponent],
  providers: [LoginService, AuthService,
     {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true} ]
})
export class LoginModule { }
