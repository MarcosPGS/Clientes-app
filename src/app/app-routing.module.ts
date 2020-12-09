import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AplicacaoComponent } from './views/aplicacao/aplicacao.component';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./views/login/login.module').then(
        (m) => m.LoginModule,
      ),
  },
  {
    path: 'aplicacao',
    component: AplicacaoComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./views/clientes/clientes.module').then(
            (m) => m.ClientesModule,
          ),
      },
      {
        path: 'servicos',
        loadChildren: () =>
          import('./views/servico-prestado/servico-prestado.module').then(
            (m) => m.ServicoPrestadoModule,
          ),
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
