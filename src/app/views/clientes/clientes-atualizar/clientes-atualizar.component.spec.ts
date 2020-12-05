import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAtualizarComponent } from './clientes-atualizar.component';

describe('ClientesAtualizarComponent', () => {
  let component: ClientesAtualizarComponent;
  let fixture: ComponentFixture<ClientesAtualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAtualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
