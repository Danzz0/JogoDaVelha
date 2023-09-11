
export class Campo{
    constructor(private simbolo:string){}

    getJogador():string{
        return this.simbolo;
    }

    identify():number{
        return 1
    }

    setJogador(jogada:string):boolean{
        // Esse if() aqui é redundante
        // testar o funcionamento do código sem o if() dps
        if(this.simbolo == " "){
            this.simbolo = jogada;
            return true;
        } else {
            console.log("ERRO! Campo já usado!");
            return false
        }
    }
}