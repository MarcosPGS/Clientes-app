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
import { ClientesService } from './clientes.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ClientesAtualizarComponent } from './clientes-atualizar/clientes-atualizar.component';
import { ClientesVisualizarComponent } from './clientes-visualizar/clientes-visualizar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { ClienteExcluirDialogComponent } from './modal/cliente-excluir-dialog/cliente-excluir-dialog.component';



const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [ClientesFormularioComponent, ClientesConsultaComponent, ClientesAtualizarComponent,
     ClientesVisualizarComponent, ClienteExcluirDialogComponent],
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
    MatPaginatorModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxMaskModule.forRoot(maskConfig),
  ], exports: [ClientesFormularioComponent, ClientesConsultaComponent, ClientesAtualizarComponent,
     ClientesVisualizarComponent, ClienteExcluirDialogComponent],
  providers: [ClientesService]
})
export class ClientesModule { }
