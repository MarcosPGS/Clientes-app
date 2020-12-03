import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.css']
})
export class ClientesFormularioComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cpf: [null, Validators.required],
    });
  }

}


