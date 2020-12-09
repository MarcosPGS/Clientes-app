import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  logout(): void{
    console.log('Usuario =>', this.formulario.value.usuario);
    console.log('Senha =>', this.formulario.value.senha);
    this.router.navigate(['/aplicacao']);
  }

  cadastrar(): void{
    this.router.navigate(['/login-cadastro']);
  }

}
