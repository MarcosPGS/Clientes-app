import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesConsultaComponent } from './clientes-consulta/clientes-consulta.component';


@NgModule({
  declarations: [ClientesFormularioComponent, ClientesConsultaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ], exports: [ClientesFormularioComponent, ClientesConsultaComponent],
})
export class ClientesModule { }
