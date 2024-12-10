import  readlinkSync = require("readline-sync");
import { colors } from "./util/cores";

export function main(){
    let opcao: number;

    while(true){

        console.log("*****************************************************");
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
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinkSync.questionInt("");

        if(opcao == 9){
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui ")
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2: 
                console.log("\n\nListar Todas as Contas\n\n"); 
                
                break;
            case 3:
                console.log("\n\nConsultar dados de Conta - por número\n\n");
                
                break;
            case 4: 
                console.log("\n\nAtualizar dados da Conta\n\n");
                
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");
                
                break;
            case 7: 
                console.log("\n\nDepósito\n\n");
                
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");
                
                break;
            default:
                console.log("\nOpção Inválida\n");
                
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