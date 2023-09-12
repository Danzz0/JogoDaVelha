import { Campo } from './Campo';
import * as readlineSync from 'readline-sync';


class JogoDaVelha{

    public tabu:Campo[][] = new Array<Array<Campo>>(3).fill([]).map(() => new Array<Campo>(3));
    public jogadorAtual:string = "X";
    public vitoria:string =""; 
    public joguei:number[];

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
        // var mensagemErro;
        while(true){
            
            this.geraTabu(this.tabu); 
            
            
            this.vitoria = this.verificarVitoria(this.tabu);
            if(this.vitoria != ""){
                console.log(`Jogador ${this.vitoria} venceu`);
                break;
            } 
            try{
                console.log("\n\n")
                const num1 = readlineSync.question('Digite a linha: ');
                console.log("");
                const num2 = readlineSync.question('Digite a coluna: ');
                
                
                if(this.verificarJogada(this.jogar(Number(num1),Number(num2)), this.jogadorAtual)){
                    console.log("Deu certo");
                    

                    if(this.jogadorAtual == "X"){
                        this.jogadorAtual = "O";
                    } else {
                        this.jogadorAtual = "X";
                    }
                } else {
                    // mensagemErro = "ERRO! Campo já usado!";
                }
            } catch(err){
                console.log("ERRO IDENTIFICADO: "+ err.message + "\n" + err.stack);
            }

        }
    }



    public geraTabu(tabu:Campo[][]):void{
        this.limparTela();
        console.log(`    0   1   2 `);
        console.log(` 0  ${tabu[0][0].getJogador()} | ${tabu[0][1].getJogador()} | ${tabu[0][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 1  ${tabu[1][0].getJogador()} | ${tabu[1][1].getJogador()} | ${tabu[1][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 2  ${tabu[2][0].getJogador()} | ${tabu[2][1].getJogador()} | ${tabu[2][2].getJogador()} `);
       
    }

    public limparTela():void{
        for(let i = 0; i<10; i++){
            console.log("");
        }
        // console.log(mensagemErro);
    }

    public jogar(a:number, b: number):number[]{
        var vet:number[] = [a,b];
        return vet;
    }


    public verificarJogada(jogada:number[], jogador:string ):boolean{
        console.log(jogada);
        
        if(!(jogada[0]>=0 && jogada[0]<=2) || !(jogada[1]>=0 && jogada[1]<=2)){ //Verifica se o número está fora do intervalo
            console.log("ERRO: Número fora do intervalo de 0 a 2!");  // caso esteja
            var teste = false;
        } else { 
            teste = this.tabu[jogada[0]][jogada[1]].setJogador(jogador);
            console.log(teste);
            console.log(this.tabu[jogada[0]][jogada[1]]);
        }
        
        return teste; // boolean
         
    }

    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    public verificarVitoria(tabu:Campo[][]):string{
        return "";
    }

   
}

let jogo = new JogoDaVelha();
jogo.main();