import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes/clientes.service';
import { TotalizadorClientes } from '../../core/models/totalizado-clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalizador: TotalizadorClientes = new TotalizadorClientes();
  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.totalizarClientes();
  }

  totalizarClientes(): void{
    this.clienteService.totalizarClientes().subscribe((resp) => {
      this.totalizador = resp;
    });
  }
}
