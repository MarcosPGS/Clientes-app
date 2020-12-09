import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-visualizar',
  templateUrl: './clientes-visualizar.component.html',
  styleUrls: ['./clientes-visualizar.component.css']
})
export class ClientesVisualizarComponent implements OnInit {

  cliente: Cliente = new Cliente();
  clienteRecebido: Cliente = new Cliente();
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private clienteService: ClientesService) { }

  ngOnInit(): void {

    // pegando Objeto

    this.activatedRoute.queryParams.subscribe(resp => {
      if (resp.cliente) {
        this.cliente = JSON.parse(resp.cliente);
      }
    });

    this.buscarPorId();
  }

  voltar(): void {
    this.router.navigate(['/aplicacao/clientes/']);
  }

  buscarPorId(): void{
    this.clienteService.buscarPorId(this.cliente.id).subscribe((resp) => {
      this.clienteRecebido = resp;
    }, error => {
      console.log(error);
    });
  }

}
