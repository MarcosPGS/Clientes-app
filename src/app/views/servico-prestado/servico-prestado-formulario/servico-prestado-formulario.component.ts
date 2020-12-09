import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/models/cliente';
import { ClientesService } from '../../clientes/clientes.service';
import { ServicoPrestadoService } from '../servico-prestado.service';
import { Router } from '@angular/router';
import { ServicoPrestado } from '../../../core/models/servico-prestado';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-servico-prestado-formulario',
  templateUrl: './servico-prestado-formulario.component.html',
  styleUrls: ['./servico-prestado-formulario.component.css']
})
export class ServicoPrestadoFormularioComponent implements OnInit {
  formulario: FormGroup;
  selectCliente = '';
  clientes: Cliente[] = [];
  data: string;
  constructor(private fb: FormBuilder, private clientesService: ClientesService,
              private servicoPrestadoService: ServicoPrestadoService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      selectCliente: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
    });

    this.listarTodosClientes();
  }

  listarTodosClientes(): void {
    this.clientesService.listarTodosClientes().subscribe((resp): void => {
      this.clientes = resp;
    });
  }

  voltar(): void {
    this.router.navigate(['/servicos']);
  }

  salvar(): void{
    console.log(this.montarObjetoIncluir());
  }
  dataInput(event): void {
    this.data = this.datePipe.transform(new Date(event.value), 'dd/MM/yyyy');
  }

  montarObjetoIncluir(): ServicoPrestado{
    const servicoPrestado = {
      descricao: this.formulario.value.descricao,
      valor: this.formulario.value.valor,
      data: this.data,
      idCliente: this.formulario.value.selectCliente
    };
    return servicoPrestado;
  }
}
