"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campo = void 0;
var Campo = /** @class */ (function () {
    function Campo(simbolo) {
        this.simbolo = simbolo;
        this.erro = "";
    }
    Campo.prototype.getJogador = function () {
        return this.simbolo;
    };
    Campo.prototype.getErro = function () {
        return this.erro;
    };
    Campo.prototype.setJogador = function (jogada) {
        if (this.simbolo == " ") { // Verifica se o campo está vazio
            this.simbolo = jogada;
            return true;
        }
        else { // Se o campo já estiver sendo usado!
            this.erro = "ERRO: Campo já usado!";
            return false;
        }
    };
    return Campo;
}());
exports.Campo = Campo;
