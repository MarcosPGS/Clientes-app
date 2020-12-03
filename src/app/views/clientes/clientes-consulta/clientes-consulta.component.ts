import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Cliente } from '../../../core/models/cliente';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>();
  nomeCliente: string;
  habilitarBotaoPesquisar = false;
  modelChanged = new Subject<string>();
  clientes: Cliente[] = [];
  constructor(private router: Router, private clientesService: ClientesService) {
    this.modelChanged
    .pipe(
      debounceTime(300))
    .subscribe(() => {
      if (this.nomeCliente.length >= 3) {
        this.habilitarBotaoPesquisar = true;
      }
      if (this.nomeCliente.length < 3) {
        this.habilitarBotaoPesquisar = false;
      }
    });
  }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  buscarClientePorNome(nome: string): void{
    console.log(nome);
  }


  listarTodosClientes(): void{
    this.clientesService.listarTodosClientes().subscribe((resp) => {
      this.clientes = resp;
    });
  }

  navegarParaIncluirCliente(): void {
    this.router.navigate(['/incluir']);
  }

  pesquisar(): void{
    this.modelChanged.next();
  }
}
