import { Conta } from "../model/conta";

export interface ContaRepository{
    
    // métodos do CRUD(creat, read, update e delete)
    procurarPrNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // métodos bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, nomeroDestino: number, numero: number, valor: number): void;
    
}