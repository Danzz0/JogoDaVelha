"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Campo_1 = require("./Campo");
var readline = require('readline');
var leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var JogoDaVelha = /** @class */ (function () {
    function JogoDaVelha() {
        this.tabu = new Campo_1.Campo[3][3]();
        this.game = true;
        this.jogadorAtual = 'X';
    }
    JogoDaVelha.prototype.getGame = function () {
        return this.game;
    };
    JogoDaVelha.geraTabu = function (tabu) {
        console.log("   0  1  2 ");
        console.log(" 0  ".concat(tabu[0][0].getJogador(), " | ").concat(tabu[0][1].getJogador(), " | ").concat(tabu[0][2].getJogador(), " "));
        console.log("  ------------------");
        console.log(" 0  ".concat(tabu[1][0].getJogador(), " | ").concat(tabu[1][1].getJogador(), " | ").concat(tabu[1][2].getJogador(), " "));
        console.log("  ------------------");
        console.log(" 0  ".concat(tabu[2][0].getJogador(), " | ").concat(tabu[2][1].getJogador(), " | ").concat(tabu[2][2].getJogador(), " "));
    };
    return JogoDaVelha;
}());
do {
    var jogo = new JogoDaVelha();
} while (jogo.getGame());
{
}
