import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.css'],
})
export class ClientesFormularioComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cpf: [null, Validators.required],
      celular: [null],
    });
  }

  voltar(): void {
    this.router.navigate(['/aplicacao/clientes/']);
  }

  salvar(): void {
    this.clientesService.salvar(this.montarObjetoIncluir()).subscribe(
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

  montarObjetoIncluir(): Cliente {
    const cliente = {
      nome: this.formulario.value.nome,
      cpf: this.formulario.value.cpf,
      ativo: 'S',
      celular: this.formulario.value.celular
    };
    return cliente;
  }
}
