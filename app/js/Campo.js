"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campo = void 0;
var Campo = /** @class */ (function () {
    function Campo(simbolo) {
        if (simbolo === void 0) { simbolo = ' '; }
        this.simbolo = simbolo;
    }
    Campo.prototype.getJogador = function () {
        return this.simbolo;
    };
    Campo.prototype.setJogador = function (jogada) {
        if (this.simbolo == ' ') {
            this.simbolo = jogada;
        }
        else {
            console.log("ERRO! Campo já usado!");
        }
    };
    return Campo;
}());
exports.Campo = Campo;
