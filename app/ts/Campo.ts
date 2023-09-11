
export class Campo{
    constructor(private simbolo:string =' '){}

    getJogador():string{
        return this.simbolo;
    }

    setJogador(jogada:string):void{
        // Esse if() aqui é redundante
        // testar o funcionamento do código sem o if() dps
        if(this.simbolo == ' '){
            this.simbolo = jogada;
        } else {
            console.log("ERRO! Campo já usado!");
        }
    }
}