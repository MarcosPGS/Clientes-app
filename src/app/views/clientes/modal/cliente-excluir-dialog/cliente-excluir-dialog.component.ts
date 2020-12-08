import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../../../../core/models/cliente';

@Component({
  selector: 'app-cliente-excluir-dialog',
  templateUrl: './cliente-excluir-dialog.component.html',
  styleUrls: ['./cliente-excluir-dialog.component.css']
})
export class ClienteExcluirDialogComponent implements OnInit {
  isExcluirCliente = false;
  constructor(@Inject(MAT_DIALOG_DATA) public cliente: Cliente) { }

  ngOnInit(): void {
  }

  confirmaExclusao(): boolean{
    this.isExcluirCliente = true;
    return this.isExcluirCliente;
  }
}
