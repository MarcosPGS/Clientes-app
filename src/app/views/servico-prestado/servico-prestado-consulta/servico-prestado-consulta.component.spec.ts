import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoPrestadoConsultaComponent } from './servico-prestado-consulta.component';

describe('ServicoPrestadoConsultaComponent', () => {
  let component: ServicoPrestadoConsultaComponent;
  let fixture: ComponentFixture<ServicoPrestadoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoPrestadoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoPrestadoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
