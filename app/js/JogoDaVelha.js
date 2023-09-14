"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Campo_1 = require("./Campo");
var readlineSync = require("readline-sync");
var JogoDaVelha = /** @class */ (function () {
    function JogoDaVelha() {
        this.tabu = new Array(3).fill([]).map(function () { return new Array(3); });
        this.jogadorAtual = "X";
        this.vitoria = "";
        this.mensagemErro = ["", ""];
        this.erroBool = 0;
    }
    JogoDaVelha.prototype.iniciar = function (tabu) {
        for (var linha = 0; linha < 3; linha++) {
            for (var coluna = 0; coluna < 3; coluna++) {
                tabu[linha][coluna] = new Campo_1.Campo(" ");
            }
        }
    };
    JogoDaVelha.prototype.main = function () {
        this.iniciar(this.tabu);
        this.mainLoop();
    };
    JogoDaVelha.prototype.mainLoop = function () {
        while (true) {
            this.geraTabu(this.tabu, this.erroBool);
            this.vitoria = this.verificarVitoria(this.tabu);
            console.log(this.vitoria);
            if (this.vitoria != "") {
                console.log("Jogador ".concat(this.vitoria, " venceu"));
                break;
            }
            try {
                console.log("");
                var num1 = readlineSync.question('Digite a linha: ');
                console.log("");
                var num2 = readlineSync.question('Digite a coluna: ');
                if (this.verificarJogada(this.jogar(Number(num1), Number(num2)), this.jogadorAtual)) {
                    if (this.jogadorAtual == "X") {
                        this.jogadorAtual = "O";
                    }
                    else {
                        this.jogadorAtual = "X";
                    }
                    this.erroBool = 0;
                }
            }
            catch (err) {
                console.log("ERRO IDENTIFICADO: " + err.message + "\n" + err.stack);
            }
        }
    };
    JogoDaVelha.prototype.geraTabu = function (tabu, erro) {
        this.limparTela();
        console.log("    0   1   2 ");
        console.log(" 0  ".concat(tabu[0][0].getJogador(), " | ").concat(tabu[0][1].getJogador(), " | ").concat(tabu[0][2].getJogador(), " "));
        console.log("  -------------");
        console.log(" 1  ".concat(tabu[1][0].getJogador(), " | ").concat(tabu[1][1].getJogador(), " | ").concat(tabu[1][2].getJogador(), " "));
        console.log("  -------------");
        console.log(" 2  ".concat(tabu[2][0].getJogador(), " | ").concat(tabu[2][1].getJogador(), " | ").concat(tabu[2][2].getJogador(), " "));
        console.log("");
        if (erro == 1) {
            console.log(this.mensagemErro[0]);
        }
        else if (erro == 2) {
            console.log(this.mensagemErro[1]);
        }
        console.log("");
    };
    JogoDaVelha.prototype.limparTela = function () {
        for (var i = 0; i < 10; i++) {
            console.log("");
        }
    };
    JogoDaVelha.prototype.jogar = function (a, b) {
        var vet = [a, b];
        return vet;
    };
    JogoDaVelha.prototype.verificarJogada = function (jogada, jogador) {
        if (!(jogada[0] >= 0 && jogada[0] <= 2) || !(jogada[1] >= 0 && jogada[1] <= 2)) { //Verifica se o número está fora do intervalo
            this.erroBool = 1; // Seleciona o tipo de erro
            this.mensagemErro[0] = "ERRO: Número fora do intervalo de 0 a 2!"; // Armazena a mensagem de erro de intervalo
            var teste = false;
        }
        else {
            teste = this.tabu[jogada[0]][jogada[1]].setJogador(jogador);
            if (!teste) {
                this.erroBool = 2; // Seleciona o tipo de erro
                this.mensagemErro[1] = (this.tabu[jogada[0]][jogada[1]].getErro()); // Armazena a mensagem de erro de campo
            }
        }
        return teste; // boolean
    };
    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    JogoDaVelha.prototype.verificarVitoria = function (tabu) {
        var horizontal;
        var diagonalS;
        var diagonalP;
        var vertical;
        for (var linha = 0; (linha < tabu.length); linha++) { // verifica na horizontal
            for (var coluna = 0; (coluna < tabu.length); coluna++) {
                horizontal += tabu[linha][coluna].getJogador();
                diagonalS += tabu[coluna][tabu.length - 1 - coluna].getJogador();
                diagonalP += tabu[coluna][coluna].getJogador();
                vertical += tabu[coluna][linha].getJogador();
                analisaTabu(horizontal, vertical, diagonalP, diagonalS);
            }
        }
        function analisaTabu(linhas, colunas, diag1, diag2) {
            if (linhas == "XXX" || linhas == "OOO") {
                console.log("Ganhou na horizontal");
            }
            else if (colunas == "XXX" || colunas == "OOO") {
                console.log("Ganhou na vertical");
            }
            else if (diag1 == "XXX" || diag1 == "OOO") {
                console.log("Ganhou na diagonal principal");
            }
            else if (diag2 == "XXX" || diag2 == "OOO") {
                console.log("Ganhou na diagonal secundária");
            }
        }
        // a00 = a00 = a11 = a22
        // a00 = a00 = a00 = a22
        /*
        
        

        */
        // for (let i = 0; i<tabu.length; i++){
        //     ooi = tabu[0][tabu.length - 1].getJogador();
        //     if(ooi == tabu[i][tabu.length - 1 - i].getJogador()){
        //         this.ganhaNaDiagSec++
        //         console.log("DEU")
        //     } else {
        //         break;
        //     }
        // }
        /*for(let linha = 0; (linha < tabu.length); linha++){
            for(let coluna = 0; (coluna < tabu.length); coluna++){
                if (tabu[linha][coluna].getJogador() != " ") {
                    if(tabu[linha][0].getJogador() == tabu[linha][coluna].getJogador()){
                        this.ganhaNaHorizontal += 1;
                        console.log(this.ganhaNaHorizontal)
    
                    } else if(tabu[0][linha].getJogador() == tabu[coluna][linha].getJogador()){
                        this.ganhaNaVertical += 1;
                        console.log(this.ganhaNaVertical)
    
                    } else if(tabu[linha][linha].getJogador() == tabu[coluna][coluna].getJogador()){
                        this.ganhaNaDiaglPrinc += 1
                        console.log(this.ganhaNaDiaglPrinc)
                        // a00 = a00 = a11 = a22
                        // a00 = a00 = a00 = a22
                    }
                } else {
                    return "";
                }
            }
        }*/
        switch (3) {
            case this.ganhaNaHorizontal:
                return "Ganhou na horizontal!";
            case this.ganhaNaVertical:
                return "Ganhou na vertical!";
            case this.ganhaNaDiaglPrinc:
                return "Ganhou na diagonal";
            case this.ganhaNaDiagSec:
                return "Ganhou na diagonal";
            default:
                return "";
        }
    };
    return JogoDaVelha;
}());
var jogo = new JogoDaVelha();
jogo.main();
