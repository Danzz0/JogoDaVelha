import { Campo } from './Campo';
import * as readlineSync from 'readline-sync';

class JogoDaVelha{

    public tabu:Campo[][] = new Array<Array<Campo>>(3).fill([]).map(() => new Array<Campo>(3));
    public jogadorAtual:string = "X";
    public vitoria:string =""; 
    public joguei:number[];
    private mensagemErro:string[] = ["",""];
    private erroBool:number = 0;

    private ganhaNaHorizontal:number;
    private ganhaNaVertical:number;
    private ganhaNaDiaglPrinc:number;
    private ganhaNaDiagSec:number;

    public iniciar(tabu:Campo[][]):void{
        for(var linha = 0; linha < 3; linha++){
            for(var coluna = 0; coluna < 3; coluna++){
                tabu[linha][coluna] = new Campo(" ");
            }
        }
    }

    public main():void{

        this.iniciar(this.tabu);
        this.mainLoop();
        
    }

    public mainLoop():void{
       
        while(true){
            
            this.geraTabu(this.tabu, this.erroBool); 

            
            this.vitoria = this.verificarVitoria(this.tabu);
            // console.log(this.vitoria)
            if(this.vitoria != ""){
                console.log(`Jogador ${this.vitoria} venceu`);
                break;
            } 
            try{
                console.log("")
                const num1 = readlineSync.question('Digite a linha: ');
                console.log("");
                const num2 = readlineSync.question('Digite a coluna: ');
                
                
                if(this.verificarJogada(this.jogar(Number(num1),Number(num2)), this.jogadorAtual)){

                    if(this.jogadorAtual == "X"){
                        this.jogadorAtual = "O";
                    } else {
                        this.jogadorAtual = "X";
                    }
                    this.erroBool = 0;
                } 
            } catch(err){
                console.log("ERRO IDENTIFICADO: "+ err.message + "\n" + err.stack);
            }

        }
    }



    public geraTabu(tabu:Campo[][], erro:number):void{
        this.limparTela();
        
        console.log(`    0   1   2 `);
        console.log(` 0  ${tabu[0][0].getJogador()} | ${tabu[0][1].getJogador()} | ${tabu[0][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 1  ${tabu[1][0].getJogador()} | ${tabu[1][1].getJogador()} | ${tabu[1][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 2  ${tabu[2][0].getJogador()} | ${tabu[2][1].getJogador()} | ${tabu[2][2].getJogador()} `);
        console.log("");
        if(erro == 1){
            console.log(this.mensagemErro[0]);
        } else if(erro == 2){
            console.log(this.mensagemErro[1]);
        }
        console.log("");
    }

    public limparTela():void{
        for(let i = 0; i<10; i++){
            console.log("");
        }
        
    }

    public jogar(a:number, b: number):number[]{
        var vet:number[] = [a,b];
        return vet;
    }


    public verificarJogada(jogada:number[], jogador:string ):boolean{
        
        if(!(jogada[0]>=0 && jogada[0]<=2) || !(jogada[1]>=0 && jogada[1]<=2)){ //Verifica se o número está fora do intervalo
            this.erroBool = 1; // Seleciona o tipo de erro
            this.mensagemErro[0] = "ERRO: Número fora do intervalo de 0 a 2!"; // Armazena a mensagem de erro de intervalo
            var teste = false;
        } else { 
            teste = this.tabu[jogada[0]][jogada[1]].setJogador(jogador);
            if(!teste){
                this.erroBool = 2; // Seleciona o tipo de erro
                this.mensagemErro[1] = (this.tabu[jogada[0]][jogada[1]].getErro()) // Armazena a mensagem de erro de campo
            }
        }
        
        return teste; // boolean
    }

    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    public verificarVitoria(tabu:Campo[][]):string{
        var horizontal = "";
        var diagonalS  = "";
        var diagonalP  = "";
        var vertical   = "";
        var retorno    = "";


        /*
   [     [0,1,2],
         [0,1,2],
         [0,1,2]   ]
        
        */


        for(let linha = 0; (linha < tabu.length); linha++){ // verifica na horizontal
            for(let coluna = 0; (coluna < tabu.length); coluna++){
                horizontal += tabu[linha][coluna].getJogador();

                vertical += tabu[coluna][linha].getJogador();
                diagonalP += tabu[coluna][coluna].getJogador();
                diagonalS += tabu[coluna][tabu.length - 1 - coluna].getJogador();

                analisaTabu(horizontal,vertical,diagonalP,diagonalS);
                
                  if(horizontal.length >= 3){
                    horizontal = "";
                    
                } if(vertical.length >= 3){

                    vertical = "";
                } if(diagonalP.length >= 3){

                    diagonalP = "";
                } if(diagonalS.length >= 3){

                    diagonalS = "";
                }

                if(retorno != ""){
                    break;
                }
               
            }
            if(retorno != ""){
                break;
            }
        }
        
        function analisaTabu(linhas,colunas,diag1,diag2){

            //TESTAR DPS
            if(linhas == "XXX" || linhas == "OOO"){
                
                retorno = `${linhas} ganhou na horizontal`;

            } else if(colunas == "XXX" || colunas == "OOO"){
                retorno = `${colunas} ganhou na vertical`;

            } else if(diag1 == "XXX" || diag1 == "OOO"){
                retorno = `${diag1} ganhou na diagonal principal`;
                
            } else if(diag2 == "XXX" || diag2 == "OOO"){
                retorno = `${diag2} ganhou na diagonal secundária`;
            } else {

                retorno = "";
            }
        }

        return retorno;

        // a00 = a00 = a11 = a22
        // a00 = a00 = a00 = a22


        
    }

   
}

let jogo = new JogoDaVelha();
jogo.main();

