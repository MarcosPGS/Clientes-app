import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesVisualizarComponent } from './clientes-visualizar.component';

describe('ClientesVisualizarComponent', () => {
  let component: ClientesVisualizarComponent;
  let fixture: ComponentFixture<ClientesVisualizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesVisualizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
