import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarParaIncluirCliente(): void {
    this.router.navigate(['/incluir']);
  }
}
