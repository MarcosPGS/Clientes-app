import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/models/cliente';
import { ClientesService } from '../../clientes/clientes.service';
import { ServicoPrestadoService } from '../servico-prestado.service';
import { Router } from '@angular/router';
import { ServicoPrestado } from '../../../core/models/servico-prestado';
import { DatePipe } from '@angular/common';
import { ServicoPrestadoIncluir } from '../../../core/models/servico-prestado-incluir';

@Component({
  selector: 'app-servico-prestado-formulario',
  templateUrl: './servico-prestado-formulario.component.html',
  styleUrls: ['./servico-prestado-formulario.component.css']
})
export class ServicoPrestadoFormularioComponent implements OnInit {
  formulario: FormGroup;
  selectCliente = '';
  clientes: Cliente[] = [];
  servico: ServicoPrestadoIncluir = new ServicoPrestadoIncluir();
  data: string;
  constructor(private fb: FormBuilder, private clientesService: ClientesService,
              private servicoPrestadoService: ServicoPrestadoService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      selectCliente: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
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
    this.router.navigate(['/aplicacao/servicos/']);
  }

  salvar(): void{
    console.log(this.montarObjetoIncluir());
    this.servicoPrestadoService.salvar(this.montarObjetoIncluir()).subscribe(
      (resp) => {
        console.log(resp);
        this.voltar();
        this.formulario.reset();
      },
      (error) => {
        console.log(error.error);
      }
    );
  }
  dataInput(event): void {
    this.data = this.datePipe.transform(new Date(event.value), 'dd/MM/yyyy');
  }

  montarObjetoIncluir(): ServicoPrestadoIncluir{
    const servico = {
      descricao: this.formulario.value.descricao,
      preco: this.formulario.value.preco,
      data: this.data,
      idCliente: this.formulario.value.selectCliente
    };
    return servico;
  }
}
