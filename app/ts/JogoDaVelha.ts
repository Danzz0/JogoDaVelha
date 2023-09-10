import { Campo } from './Campo'
const readline = require('readline');
const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


class JogoDaVelha{


    public tabu:Campo = new Campo[3][3]();
    public game:boolean = true;
    public jogadorAtual:string = 'X';


    getGame():boolean{
        return this.game;
    }

    public static geraTabu(tabu:Campo[][]):void{
        console.log(`   0  1  2 `);
        console.log(` 0  ${tabu[0][0].getJogador()} | ${tabu[0][1].getJogador()} | ${tabu[0][2].getJogador()} `);
        console.log("  ------------------");
        console.log(` 0  ${tabu[1][0].getJogador()} | ${tabu[1][1].getJogador()} | ${tabu[1][2].getJogador()} `);
        console.log("  ------------------");
        console.log(` 0  ${tabu[2][0].getJogador()} | ${tabu[2][1].getJogador()} | ${tabu[2][2].getJogador()} `);

    }
}

do{
    var jogo = new JogoDaVelha();
} while(jogo.getGame()){

}