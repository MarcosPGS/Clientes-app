import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-atualizar',
  templateUrl: './clientes-atualizar.component.html',
  styleUrls: ['./clientes-atualizar.component.css']
})
export class ClientesAtualizarComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
