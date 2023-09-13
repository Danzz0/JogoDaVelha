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
            console.log(this.vitoria)
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
        var ooi;
        
        for(let linha = 0; (linha < tabu.length); linha++){
            for(let coluna = 0; (coluna < tabu.length); coluna++){
                if (tabu[linha][coluna].getJogador() != " ") {
                    if(tabu[linha][0].getJogador() == tabu[linha][coluna].getJogador()){
                        this.ganhaNaHorizontal += 1;
                        console.log(this.ganhaNaHorizontal)
    
                    } else if(tabu[0][linha].getJogador() == tabu[coluna][linha].getJogador()){
                        this.ganhaNaVertical += 1;
                        console.log(this.ganhaNaVertical)
    
                    } else if(tabu[linha][linha].getJogador() == tabu[coluna][coluna].getJogador()){
                        this.ganhaNaDiaglPrinc += 1
                        console.log(this.ganhaNaDiaglPrinc)
                        // a00 = a00 = a11 = a22
                        // a00 = a00 = a00 = a22
                    } 
                } else {
                    return "";
                }
            }
        }
        
        for (let i = 0; i<tabu.length; i++){
            ooi = tabu[0][tabu.length - 1].getJogador();
            if(ooi == tabu[i][tabu.length - 1 - i].getJogador()){
                this.ganhaNaDiagSec++
                console.log("DEU")
            } else {
                break;
            }
        }
        
        
        
    
        

        switch(3){
            
            case this.ganhaNaHorizontal:
                
                return "Ganhou na horizontal!";
            case this.ganhaNaVertical:
                return "Ganhou na vertical!";
            case this.ganhaNaDiaglPrinc:
                return "Ganhou na diagonal";
            case this.ganhaNaDiagSec:
                return "Ganhou na diagonal";
            default:
                return "";
        }
        
        

        

        
    }

   
}

let jogo = new JogoDaVelha();
jogo.main();

