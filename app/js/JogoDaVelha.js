"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline');
var leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var JogoDaVelha = /** @class */ (function () {
    function JogoDaVelha() {
        this.tabu = new Array(3).fill([]).map(function () { return new Array(3); });
        this.game = true;
        this.jogadorAtual = 'X';
        this.vitoria = "";
    }
    JogoDaVelha.prototype.main = function () {
        while (this.game) {
            this.geraTabu(this.tabu);
            this.vitoria = this.verificarVitoria(this.tabu);
            if (this.vitoria != "") {
                console.log("Jogador ".concat(this.vitoria, " venceu"));
            }
            try {
            }
            catch (err) {
                console.log("ERRO");
            }
        }
    };
    JogoDaVelha.prototype.getGame = function () {
        return this.game;
    };
    JogoDaVelha.prototype.geraTabu = function (tabu) {
        this.limparTela();
        console.log("   0  1  2 ");
        console.log(" 0  ".concat(tabu[0][0].getJogador(), " | ").concat(tabu[0][1].getJogador(), " | ").concat(tabu[0][2].getJogador(), " "));
        console.log("  ------------------");
        console.log(" 0  ".concat(tabu[1][0].getJogador(), " | ").concat(tabu[1][1].getJogador(), " | ").concat(tabu[1][2].getJogador(), " "));
        console.log("  ------------------");
        console.log(" 0  ".concat(tabu[2][0].getJogador(), " | ").concat(tabu[2][1].getJogador(), " | ").concat(tabu[2][2].getJogador(), " "));
    };
    JogoDaVelha.prototype.limparTela = function () {
        for (var i = 0; i < 200; i++) {
            console.log("");
        }
    };
    JogoDaVelha.verificarJogada = function () {
    };
    // Função para verificar a vitória de algum jogador (Ainda irá ser implementado)
    JogoDaVelha.prototype.verificarVitoria = function (tabu) {
        return "";
    };
    return JogoDaVelha;
}());
