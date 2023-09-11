import { Campo } from './Campo'
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
    


    public main():void{

        while(this.game){
            this.geraTabu(this.tabu);
            this.vitoria = this.verificarVitoria(this.tabu);
            if(this.vitoria != ""){
                console.log(`Jogador ${this.vitoria} venceu`);
            } 
            try{
        
            } catch(err){
                console.log("ERRO")
            }
        }
    }

    public getGame():boolean{
        return this.game;
    }

    

    public geraTabu(tabu:Campo[][]):void{
        this.limparTela();
        console.log(`   0  1  2 `);
        console.log(` 0  ${tabu[0][0].getJogador()} | ${tabu[0][1].getJogador()} | ${tabu[0][2].getJogador()} `);
        console.log("  ------------------");
        console.log(` 0  ${tabu[1][0].getJogador()} | ${tabu[1][1].getJogador()} | ${tabu[1][2].getJogador()} `);
        console.log("  ------------------");
        console.log(` 0  ${tabu[2][0].getJogador()} | ${tabu[2][1].getJogador()} | ${tabu[2][2].getJogador()} `);

    }

    public limparTela():void{
        for(let i = 0; i<200; i++){
            console.log("");
        }
    }



    public static verificarJogada(){

    }


    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    public verificarVitoria(tabu:Campo[][]):string{
        return "";
    }

   
}
