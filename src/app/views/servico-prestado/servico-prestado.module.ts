import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoConsultaComponent } from './servico-prestado-consulta/servico-prestado-consulta.component';
import { ServicoPrestadoFormularioComponent } from './servico-prestado-formulario/servico-prestado-formulario.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { ServicoPrestadoService } from './servico-prestado.service';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatNativeDateModule } from '@angular/material/core';



registerLocaleData(localePt, 'pt-BR');

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [ServicoPrestadoConsultaComponent, ServicoPrestadoFormularioComponent],
  imports: [
  CommonModule,
    ServicoPrestadoRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    CurrencyMaskModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    NgxMaskModule.forRoot(maskConfig),
  ], exports: [ServicoPrestadoConsultaComponent, ServicoPrestadoFormularioComponent],
  providers: [ServicoPrestadoService, { provide: LOCALE_ID, useValue: 'pt-BR' },]
})
export class ServicoPrestadoModule { }
