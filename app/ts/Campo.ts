
export class Campo{
    public erro:string = "";
    constructor(private simbolo:string){}

    getJogador():string{
        return this.simbolo;
    }
    getErro():string{
        return this.erro;
    }

    identify():number{
        return 1
    }

    setJogador(jogada:string):boolean{
        if(this.simbolo == " "){ // Verifica se o campo está vazio
            this.simbolo = jogada;
            return true;
        } else { // Se o campo já estiver sendo usado!
            this.erro = "ERRO: Campo já usado!";
            return false
        }
    }
}