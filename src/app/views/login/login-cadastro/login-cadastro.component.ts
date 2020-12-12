import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { UsuarioCadastro } from '../../../core/models/usuario-cadastro';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  formulario: FormGroup;
  senha: string;
  senhaConfirmacao: string;
  habilitarBotaoSalvar = false;
  modelChanged = new Subject<string>();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.modelChanged.pipe(debounceTime(300)).subscribe(() => {
      if (this.senha === this.senhaConfirmacao) {
        this.habilitarBotaoSalvar = true;
      }
      if (this.senha !== this.senhaConfirmacao) {
        this.habilitarBotaoSalvar = false;
        alert('Senha de confirmação diferente da senha digitada acima.');
      }
    });
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      passwordConfirmacao: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nome: [null, Validators.required]
    });
    this.habilitarBotaoSalvar = false;
  }


  montarObjetoIncluir(): UsuarioCadastro {
    const usuario = {
      nome: this.formulario.value.nome,
      email: this.formulario.value.email,
      password: this.formulario.value.password,
      username: this.formulario.value.username
    };
    return usuario;
  }

  salvar(): void {
      this.loginService.salvar(this.montarObjetoIncluir()).subscribe(
        (resp) => {
          alert(resp);
          this.voltar();
        }
      );
  }
  voltar(): void{
    this.router.navigate(['/']);
  }
  ValidarSenha(): void {
    this.modelChanged.next();
  }


}
