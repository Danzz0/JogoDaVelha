import { Campo } from './Campo';
import * as readlineSync from 'readline-sync';
const readline = require('readline');
const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class JogoDaVelha{

    public tabu:Campo[][] = new Array<Array<Campo>>(3).fill([]).map(() => new Array<Campo>(3));
    public game:boolean = true;
    public jogadorAtual:string = 'X';
    public vitoria:string =""; 
    public joguei:number[];

    public iniciar(tabu:Campo[][]):void{
        for(var linha = 0; linha < 3; linha++){
            for(var coluna = 0; coluna < 3; coluna++){
                tabu[linha][coluna] = new Campo(" ");
                console.log(`Inicializado tabu: `);
            }
        }
    }


    public main():void{

        this.iniciar(this.tabu)
        
        while(this.game){
            this.geraTabu(this.tabu, 2);
            
            this.vitoria = this.verificarVitoria(this.tabu);
            if(this.vitoria != ""){
                console.log(`Jogador ${this.vitoria} venceu`);
                break;
            } 
            try{
                
                const num1 = readlineSync.question('Digite a linha: ');
                console.log(num1);
                const num2 = readlineSync.question('Digite a coluna: ');
                console.log(num2);

                
                
                
                if(this.verificarJogada(this.jogar(Number(num1),Number(num2)), this.jogadorAtual)){
                    console.log("Deu certo")

                    this.geraTabu(this.tabu, 3)
                    if(this.jogadorAtual == 'X'){
                        this.jogadorAtual = 'O';
                    } else {
                        this.jogadorAtual = 'X';
                    }
                }
                
            } catch(err){
                console.log("ERRO: "+ err.message + "\n" + err.stack);
            }

            if(this.geraTabu){
                this.game = false;
            }
        }
    }

    public getGame():boolean{
        return this.game;
    }

    

    public geraTabu(tabu:Campo[][], parImpar:number):void{
        
        console.log(`    0   1   2 `);
        console.log(` 0  ${tabu[0][0].getJogador()} | ${tabu[0][1].getJogador()} | ${tabu[0][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 0  ${tabu[1][0].getJogador()} | ${tabu[1][1].getJogador()} | ${tabu[1][2].getJogador()} `);
        console.log("  -------------");
        console.log(` 0  ${tabu[2][0].getJogador()} | ${tabu[2][1].getJogador()} | ${tabu[2][2].getJogador()} `);

        if(parImpar%2 == 0){
            this.game = false;
        } else {
            this.game = true;
        }
        
    }

    public limparTela():void{
        for(let i = 0; i<200; i++){
            console.log("");
        }
    }
    public jogar(a:number, b: number):number[]{
        var vet:number[] = [a,b];
        return vet;
    }


    public verificarJogada(jogada:number[], jogador:string ):boolean{
        // console.log(this.tabu[0][1].getJogador())

        console.log(jogada)
        var a = jogada[0]
        var b = jogada[1]
        console.log(a)
        console.log(b)

        console.log(this.tabu[jogada[0]][jogada[1]]) // DEU MERDA AQUIII
        
        var teste = this.tabu[0][1].setJogador(jogador);
        console.log(teste)
        console.log(this.tabu[0][1])
        return teste
        

            
         
    }


    


    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    public verificarVitoria(tabu:Campo[][]):string{
        return "";
    }

   
}

let jogo = new JogoDaVelha();
jogo.main();