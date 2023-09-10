
export class Campo{
    constructor(private simbolo:string =' '){}

    getJogador():string{
        return this.simbolo;
    }

    setJogador(jogada:string):void{
        if(this.simbolo == ' '){
            this.simbolo = jogada;
        } else {
            console.log("ERRO! Campo já usado!");
        }
    }
}