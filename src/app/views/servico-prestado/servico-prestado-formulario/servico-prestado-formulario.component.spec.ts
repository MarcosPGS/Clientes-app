import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadoFormularioComponent } from './servico-prestado-formulario.component';

describe('ServicoPrestadoFormularioComponent', () => {
  let component: ServicoPrestadoFormularioComponent;
  let fixture: ComponentFixture<ServicoPrestadoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoPrestadoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPrestadoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
