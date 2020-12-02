import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConsultaComponent } from './clientes-consulta.component';

describe('ClientesConsultaComponent', () => {
  let component: ClientesConsultaComponent;
  let fixture: ComponentFixture<ClientesConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
