import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormularioComponent } from './clientes-formulario/clientes-formulario.component';
import { ClientesConsultaComponent } from './clientes-consulta/clientes-consulta.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
  declarations: [ClientesFormularioComponent, ClientesConsultaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ], exports: [ClientesFormularioComponent, ClientesConsultaComponent],
})
export class ClientesModule { }
