export class Campo{
    constructor(public nome:string){

    }

    setNome(nome:string):void{
        this.nome = nome;
    }

    getNome():void{
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}