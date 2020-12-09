import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { LoginRecuperarSenhaComponent } from './login-recuperar-senha/login-recuperar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLogoutComponent,
  },
  {
    path: 'login-cadastro',
    component: LoginCadastroComponent,
  },
  {
    path: 'recuperar-senha',
    component: LoginRecuperarSenhaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LoginRoutingModule { }
