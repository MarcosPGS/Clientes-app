import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecuperarSenhaComponent } from './login-recuperar-senha.component';

describe('LoginRecuperarSenhaComponent', () => {
  let component: LoginRecuperarSenhaComponent;
  let fixture: ComponentFixture<LoginRecuperarSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRecuperarSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
