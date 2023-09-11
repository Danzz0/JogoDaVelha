"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campo = void 0;
var Campo = /** @class */ (function () {
    function Campo(simbolo) {
        this.simbolo = simbolo;
    }
    Campo.prototype.getJogador = function () {
        return this.simbolo;
    };
    Campo.prototype.identify = function () {
        return 1;
    };
    Campo.prototype.setJogador = function (jogada) {
        // Esse if() aqui é redundante
        // testar o funcionamento do código sem o if() dps
        if (this.simbolo == " ") {
            this.simbolo = jogada;
            return true;
        }
        else {
            console.log("ERRO! Campo já usado!");
            return false;
        }
    };
    return Campo;
}());
exports.Campo = Campo;
