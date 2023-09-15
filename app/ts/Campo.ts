
export class Campo{
    public erro:string = "";
    constructor(private simbolo:string){}

    getJogador():string{ // retorna o valor de qualquer campo do tabuleiro
        return this.simbolo;
    }
    getErro():string{ // retorna o tipo de erro presente nesse campo, caso tenha
        return this.erro;
    }

    setJogador(jogada:string):boolean{ // atualiza o campo do tabuleiro informado pela jogada do usuário
        if(this.simbolo == " "){ // Verifica se o campo está vazio
            this.simbolo = jogada;
            return true;
        } else { // Se o campo já estiver sendo usado!
            this.erro = "ERRO: Campo já usado!";
            return false
        }
    }
}