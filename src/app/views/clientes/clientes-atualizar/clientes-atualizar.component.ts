import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-atualizar',
  templateUrl: './clientes-atualizar.component.html',
  styleUrls: ['./clientes-atualizar.component.css']
})
export class ClientesAtualizarComponent implements OnInit {
  formulario: FormGroup;
  cliente: Cliente = new Cliente();
  clienteRecebido: Cliente = new Cliente();
  ativo: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private clienteService: ClientesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cpf: [null, Validators.required],
      celular: [null],
      ativo: [null],
    });

    // pegando Objeto

    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.cliente) {
        this.cliente = JSON.parse(resp.cliente);
        if (this.cliente.ativo === 'S') {
          this.ativo = true;
        }
        if (this.cliente.ativo === 'N') {
          this.ativo = false;
        }
      }
    });

    this.buscarPorId();
  }

  voltar(): void {
    this.router.navigate(['/clientes']);
  }

  buscarPorId(): void{
    this.clienteService.buscarPorId(this.cliente.id).subscribe((resp) => {
      this.clienteRecebido = resp;
      this.atualizarClinte(this.clienteRecebido);
    }, error => {
      console.log(error);
    });
  }

  atualizar(): void {
    this.clienteService.atualizar(this.montarObjetoIncluir()).subscribe(
      (resp) => {
        this.voltar();
        this.formulario.reset();
      },
      (error) => {
        console.log(error.error);
      }
    );
  }
  atualizarClinte(dados: Cliente): void {
    this.formulario.controls.nome.setValue(dados.nome);
    this.formulario.controls.cpf.setValue(dados.cpf);
    this.formulario.controls.celular.setValue(dados.celular);
  }

  montarObjetoIncluir(): Cliente {
    const cliente = {
      nome: this.formulario.value.nome,
      cpf: this.formulario.value.cpf,
      ativo: this.ativo === true ? 'S' : 'N',
      celular: this.formulario.value.celular
    };
    return cliente;
  }

}
