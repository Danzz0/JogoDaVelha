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
        if (this.simbolo == " ") { // Verifica se o campo está vazio
            this.simbolo = jogada;
            return true;
        }
        else { // Se o campo já estiver sendo usado!
            return false;
        }
    };
    return Campo;
}());
exports.Campo = Campo;
