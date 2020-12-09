import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
