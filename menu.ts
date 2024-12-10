import  readlinkSync = require("readline-sync");
import { colors } from "./util/cores";

export function main(){
    let opcao: number;

    while(true){

        console.log(colors.bg.black, colors.fg.yellow,"*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinkSync.questionInt("");

        if(opcao == 9){
            console.log("Banco do Brazil com Z - O seu Futuro começa aqui ")
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("Criar Conta");

                break;
            case 2: 
                console.log("Listar Todas as Contas"); 
                
                break;
            case 3:
                console.log("Consultar dados de Conta - por número");
                
                break;
            case 4: 
                console.log("Atualizar dados da Conta");
                
                break;
            case 5:
                console.log("Apagar uma Conta");

                break;
            case 6:
                console.log("Saque");
                
                break;
            case 7: 
                console.log("Depósito");
                
                break;
            case 8:
                console.log("Transferência entre Contas");
                
                break;
            default:
                console.log("Opção Inválida");
                
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Aline Anacleto ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/alineanacletoo");
    console.log("*****************************************************");
}

main()