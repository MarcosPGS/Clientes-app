import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesConsultaComponent } from './clientes-consulta/clientes-consulta.component';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesAtualizarComponent } from './clientes-atualizar/clientes-atualizar.component';
import { ClientesVisualizarComponent } from './clientes-visualizar/clientes-visualizar.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesConsultaComponent,
  },
  {
    path: 'incluir',
    component: ClientesFormularioComponent,
  },
  {
    path: 'atualizar',
    component: ClientesAtualizarComponent,
  },
  {
    path: 'visualizar',
    component: ClientesVisualizarComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClientesRoutingModule { }
