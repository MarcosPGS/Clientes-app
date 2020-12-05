import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ClientesService } from '../clientes.service';
import { MatSort } from '@angular/material/sort';
import { Cliente } from 'src/app/core/models/cliente';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css'],
})
export class ClientesConsultaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>();
  nomeCliente: string;
  habilitarBotaoPesquisar = false;
  mostrarTabela = false;
  modelChanged = new Subject<string>();
  clientes: Cliente[] = [];
  cliente: Cliente = new Cliente();
  constructor(
    private router: Router,
    private clientesService: ClientesService,
    private route: ActivatedRoute
  ) {
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
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
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  buscarClientePorNome(nome: string): void {
    console.log(nome);
  }
  atualizar(c: Cliente): void{
    this.cliente = c;
    this.router.navigate(['/atualizar'], {
      queryParams: { cliente: JSON.stringify(c) },
      skipLocationChange: true
    });
  }

  listarTodosClientes(): void {
    this.clientesService.listarTodosClientes().subscribe((resp): void => {
      this.clientes = resp;
      this.mostrarTabela = true;
    });
  }

  navegarParaIncluirCliente(): void {
    this.router.navigate(['/incluir']);
  }

  pesquisar(): void {
    this.modelChanged.next();
  }

  excluir(id: number): void {
    this.clientesService.excluir(id).subscribe(
      (resp) => {
        this.listarTodosClientes();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarPorNome(): void{
    this.clientesService.buscarPorNome(this.nomeCliente).subscribe((resp) => {
      if (resp === null) {
        this.mostrarTabela = false;
      }
      if (resp !== null) {
        this.mostrarTabela = true;
        this.clientes = resp;
      }
      this.nomeCliente = null;
      this.habilitarBotaoPesquisar = false;
    }, error => {console.log(error);
    });
  }

  visualizar(c: Cliente): void{
    this.cliente = c;
    this.router.navigate(['/visualizar'], {
      queryParams: { cliente: JSON.stringify(c) },
      skipLocationChange: true
    });
  }
}
