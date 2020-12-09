import { Cliente } from './cliente';
export class ServicoPrestado{
        id?: number;
        descricao: string;
        valor: number;
        data: string;
        cliente?: Cliente;
        idCliente: number;
}