System.register(["./JogoDaVelha"], function (exports_1, context_1) {
    "use strict";
    var JogoDaVelha_1, jogo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (JogoDaVelha_1_1) {
                JogoDaVelha_1 = JogoDaVelha_1_1;
            }
        ],
        execute: function () {
            jogo = new JogoDaVelha_1.JogoDaVelha(); // cria o objeto
            jogo.main(); // chama o método principal
        }
    };
});
