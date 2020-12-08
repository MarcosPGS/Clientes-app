import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicoPrestadoConsultaComponent } from './servico-prestado-consulta/servico-prestado-consulta.component';
import { ServicoPrestadoFormularioComponent } from './servico-prestado-formulario/servico-prestado-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: ServicoPrestadoConsultaComponent,
  },
  {
    path: 'incluirServico',
    component: ServicoPrestadoFormularioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
