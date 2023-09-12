"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Campo_1 = require("./Campo");
var readlineSync = require("readline-sync");
var JogoDaVelha = /** @class */ (function () {
    function JogoDaVelha() {
        this.tabu = new Array(3).fill([]).map(function () { return new Array(3); });
        this.jogadorAtual = "X";
        this.vitoria = "";
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
        // var mensagemErro;
        while (true) {
            this.geraTabu(this.tabu);
            this.vitoria = this.verificarVitoria(this.tabu);
            if (this.vitoria != "") {
                console.log("Jogador ".concat(this.vitoria, " venceu"));
                break;
            }
            try {
                console.log("\n\n");
                var num1 = readlineSync.question('Digite a linha: ');
                console.log("");
                var num2 = readlineSync.question('Digite a coluna: ');
                if (this.verificarJogada(this.jogar(Number(num1), Number(num2)), this.jogadorAtual)) {
                    console.log("Deu certo");
                    if (this.jogadorAtual == "X") {
                        this.jogadorAtual = "O";
                    }
                    else {
                        this.jogadorAtual = "X";
                    }
                }
                else {
                    // mensagemErro = "ERRO! Campo já usado!";
                }
            }
            catch (err) {
                console.log("ERRO IDENTIFICADO: " + err.message + "\n" + err.stack);
            }
        }
    };
    JogoDaVelha.prototype.geraTabu = function (tabu) {
        this.limparTela();
        console.log("    0   1   2 ");
        console.log(" 0  ".concat(tabu[0][0].getJogador(), " | ").concat(tabu[0][1].getJogador(), " | ").concat(tabu[0][2].getJogador(), " "));
        console.log("  -------------");
        console.log(" 1  ".concat(tabu[1][0].getJogador(), " | ").concat(tabu[1][1].getJogador(), " | ").concat(tabu[1][2].getJogador(), " "));
        console.log("  -------------");
        console.log(" 2  ".concat(tabu[2][0].getJogador(), " | ").concat(tabu[2][1].getJogador(), " | ").concat(tabu[2][2].getJogador(), " "));
    };
    JogoDaVelha.prototype.limparTela = function () {
        for (var i = 0; i < 10; i++) {
            console.log("");
        }
        // console.log(mensagemErro);
    };
    JogoDaVelha.prototype.jogar = function (a, b) {
        var vet = [a, b];
        return vet;
    };
    JogoDaVelha.prototype.verificarJogada = function (jogada, jogador) {
        console.log(jogada);
        if (!(jogada[0] >= 0 && jogada[0] <= 2) || !(jogada[1] >= 0 && jogada[1] <= 2)) { //Verifica se o número está fora do intervalo
            console.log("ERRO: Número fora do intervalo de 0 a 2!"); // caso esteja
            var teste = false;
        }
        else {
            teste = this.tabu[jogada[0]][jogada[1]].setJogador(jogador);
            console.log(teste);
            console.log(this.tabu[jogada[0]][jogada[1]]);
        }
        return teste; // boolean
    };
    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    JogoDaVelha.prototype.verificarVitoria = function (tabu) {
        return "";
    };
    return JogoDaVelha;
}());
var jogo = new JogoDaVelha();
jogo.main();
