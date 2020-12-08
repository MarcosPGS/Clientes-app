import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ServicoPrestado } from 'src/app/core/models/servico-prestado';
import { ServicoPrestadoService } from '../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-consulta',
  templateUrl: './servico-prestado-consulta.component.html',
  styleUrls: ['./servico-prestado-consulta.component.css'],
})
export class ServicoPrestadoConsultaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descricao', 'valor', 'data', 'acoes'];
  dataSource = new MatTableDataSource<ServicoPrestado>();
  mostrarTabela = false;
  servicosPrestados: ServicoPrestado[] = [];
  modelChanged = new Subject<string>();
  nomeCliente = '';
  meses: number[];
  mes = 0;
  habilitarBotaoPesquisar = false;
  constructor(
    private router: Router,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
      if (this.nomeCliente.length >= 3 && this.mes > 0) {
        this.habilitarBotaoPesquisar = true;
      }
      if (this.nomeCliente.length < 3) {
        this.habilitarBotaoPesquisar = false;
      }
    });
  }

  ngOnInit(): void {
  }

  pesquisarServico(): void {
    this.servicoPrestadoService
      .pesquisarServicos(this.nomeCliente, this.mes.toString())
      .subscribe(
        (resp) => {
          if (resp === null || resp.length === 0) {
            this.mostrarTabela = false;
          }
          if (resp !== null && resp.length > 0) {
            this.mostrarTabela = true;
            this.servicosPrestados = resp;
          }
          this.nomeCliente = null;
          this.mes = null;
          this.habilitarBotaoPesquisar = false;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  navegarParaIncluirServico(): void {
    this.router.navigate(['/incluirServico']);
  }
  pesquisar(): void {
    this.modelChanged.next();
  }
  listarTodosServicos(): void {
    this.servicoPrestadoService
      .listarTodosClientes()
      .subscribe((resp): void => {
        this.servicosPrestados = resp;
        this.servicosPrestados.length > 0
          ? (this.mostrarTabela = true)
          : (this.mostrarTabela = false);
      });
  }
}
