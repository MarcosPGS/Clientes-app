import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Cliente } from '../../../core/models/cliente';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-clientes-consulta',
  templateUrl: './clientes-consulta.component.html',
  styleUrls: ['./clientes-consulta.component.css']
})
export class ClientesConsultaComponent implements OnInit {
  CLIENTES: Cliente [] = [
   {id: 1, nome: 'Marcos Paulo', cpf: '03149028132', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 2, nome: 'Laura Karev', cpf: '65485232101', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 3, nome: 'Amanda Oliveira', cpf: '25898775302', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' },
   {id: 4, nome: 'Heitor Karev', cpf: '36528748925', dataCadastro: '12/11/2020', dataAtualizacao: '' }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.CLIENTES);
 nomeCliente: string;
 habilitarBotaoPesquisar = false;
 modelChanged = new Subject<string>();
  constructor(private router: Router) { 
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
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  buscarClientePorNome(nome: string): void{
    console.log(nome);
  }

  navegarParaIncluirCliente(): void {
    this.router.navigate(['/incluir']);
  }

  pesquisar(): void{
    this.modelChanged.next();
  }
}
