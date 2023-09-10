"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campo = void 0;
var Campo = /** @class */ (function () {
    function Campo(nome) {
        this.nome = nome;
    }
    Campo.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Campo.prototype.getNome = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome));
    };
    return Campo;
}());
exports.Campo = Campo;
