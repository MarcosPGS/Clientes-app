import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  logout(): void{
    this.authService.logar(this.formulario.value.usuario, this.formulario.value.senha).subscribe((resp) => {
      this.router.navigate(['/aplicacao']);
    }, errorResp => {
      console.log(errorResp);
    });
  }

  cadastrar(): void{
    this.router.navigate(['/login-cadastro']);
  }

}
