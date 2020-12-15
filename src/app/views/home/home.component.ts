import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes/clientes.service';
import { TotalizadorClientes } from '../../core/models/totalizado-clientes';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalizador: TotalizadorClientes = new TotalizadorClientes();
  userDetails: any;
  constructor(private clienteService: ClientesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.totalizarClientes();
    this.userDetails = this.authService.getUsuarioAutenticado();
  }

  totalizarClientes(): void{
    this.clienteService.totalizarClientes().subscribe((resp) => {
      this.totalizador = resp;
    });
  }
}
