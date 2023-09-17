System.register([], function (exports_1, context_1) {
    "use strict";
    var Campo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Campo = /** @class */ (function () {
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
            exports_1("Campo", Campo);
        }
    };
});
