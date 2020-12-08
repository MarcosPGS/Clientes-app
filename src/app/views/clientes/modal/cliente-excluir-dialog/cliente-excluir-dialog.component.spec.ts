import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteExcluirDialogComponent } from './cliente-excluir-dialog.component';

describe('ClienteExcluirDialogComponent', () => {
  let component: ClienteExcluirDialogComponent;
  let fixture: ComponentFixture<ClienteExcluirDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteExcluirDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteExcluirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
