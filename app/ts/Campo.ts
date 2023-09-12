
export class Campo{
    constructor(private simbolo:string){}

    getJogador():string{
        return this.simbolo;
    }

    identify():number{
        return 1
    }

    setJogador(jogada:string):boolean{
        if(this.simbolo == " "){ // Verifica se o campo está vazio
            this.simbolo = jogada;
            return true;
        } else { // Se o campo já estiver sendo usado!
            return false
        }
    }
}