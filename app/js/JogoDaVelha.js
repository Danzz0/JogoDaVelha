System.register(["./Campo"], function (exports_1, context_1) {
    "use strict";
    var Campo_1, JogoDaVelha;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Campo_1_1) {
                Campo_1 = Campo_1_1;
            }
        ],
        execute: function () {
            // import * as readlineSync from 'readline-sync';
            JogoDaVelha = /** @class */ (function () {
                function JogoDaVelha() {
                    this.tabu = new Array(3).fill([]).map(function () { return new Array(3); });
                    this.jogadorAtual = "X";
                    this.vitoria = "";
                    this.mensagemErro = ["", ""];
                    this.erroNum = 0;
                    this.partida = 0;
                }
                JogoDaVelha.prototype.iniciar = function (tabu) {
                    for (var linha = 0; linha < 3; linha++) {
                        for (var coluna = 0; coluna < 3; coluna++) {
                            tabu[linha][coluna] = new Campo_1.Campo(" ");
                        }
                    }
                };
                JogoDaVelha.prototype.main = function () {
                    this.iniciar(this.tabu); // gera a estrutura do tabuleiro
                    this.mainLoop(); // chama o loop principal
                };
                // Método inicia o loop principal do jogo
                JogoDaVelha.prototype.mainLoop = function () {
                    while (true) {
                        this.geraTabu(this.tabu, this.erroNum); //imprime o tabuleiro que foi gerado pelo método iniciar()
                        this.vitoria = this.verificarVitoria(this.tabu); //chama o verificador de vitória passando o nosso tabuleiro como argumento
                        if (this.partida == 10) { // Verifica com base no número de partidas jogadas se deu empate
                            this.vitoria = "VELHAA!!!";
                        }
                        if (this.vitoria != "") { // caso algum jogador ganhe, finaliza o loop principal
                            console.log("".concat(this.vitoria));
                            break;
                        }
                        try { // pede as jogadas dos usuários
                            console.log("");
                            // const num1 = readlineSync.question('Digite a linha: ');
                            console.log("");
                            // const num2 = readlineSync.question('Digite a coluna: ');
                            if (this.verificarJogada(this.jogar(Number(2), Number(2)), this.jogadorAtual)) {
                                // veirifica se a jogada é válida e atualiza o tabuleiro caso a mesma seja (todo o método retorna um boolean)
                                if (this.jogadorAtual == "X") { // atualiza o turno dos jogadores
                                    this.jogadorAtual = "O";
                                }
                                else {
                                    this.jogadorAtual = "X";
                                }
                                this.erroNum = 0;
                            }
                        }
                        catch (err) { // caso haja algum erro técnico no código 
                            console.log("ERRO IDENTIFICADO: " + err.message + "\n" + err.stack);
                        }
                    }
                };
                // Imprime o tabuleiro na tela
                JogoDaVelha.prototype.geraTabu = function (tabu, erro) {
                    this.limparTela();
                    console.log("    0   1   2 ");
                    console.log(" 0  ".concat(tabu[0][0].getJogador(), " | ").concat(tabu[0][1].getJogador(), " | ").concat(tabu[0][2].getJogador(), " "));
                    console.log("  -------------");
                    console.log(" 1  ".concat(tabu[1][0].getJogador(), " | ").concat(tabu[1][1].getJogador(), " | ").concat(tabu[1][2].getJogador(), " "));
                    console.log("  -------------");
                    console.log(" 2  ".concat(tabu[2][0].getJogador(), " | ").concat(tabu[2][1].getJogador(), " | ").concat(tabu[2][2].getJogador(), " "));
                    console.log("");
                    if (erro == 1) {
                        // com base no estado do atributo erro passado como argumento para o método, 
                        // informa uma mensagem diferente dependendo do tipo de erro que o jogador cometa
                        console.log(this.mensagemErro[0]);
                    }
                    else if (erro == 2) {
                        console.log(this.mensagemErro[1]);
                    }
                    else { // não contabiliza as partidas perdidas pelas jogadas erradas do usuário
                        this.partida++; // aumenta o número de partidas a cada impressão do tabuleiro na tela
                    }
                    console.log("");
                };
                // Limpa a tela so usuário a cada nova jogada
                JogoDaVelha.prototype.limparTela = function () {
                    for (var i = 0; i < 10; i++) {
                        console.log("");
                    }
                };
                //Método que armazena os valores de linha e coluna digitados pelo usuário e os retorna em forma de vetor 
                JogoDaVelha.prototype.jogar = function (a, b) {
                    var vet = [a, b];
                    return vet;
                };
                // Verifica se a jogada é valida e altera o estado do atributo erro se a mesma não for
                JogoDaVelha.prototype.verificarJogada = function (jogada, jogador) {
                    if (!(jogada[0] >= 0 && jogada[0] <= 2) || !(jogada[1] >= 0 && jogada[1] <= 2)) { //Verifica se o número está fora do intervalo
                        this.erroNum = 1; // Seleciona o tipo de erro
                        this.mensagemErro[0] = "ERRO: Número fora do intervalo de 0 a 2!"; // Armazena a mensagem de erro de intervalo
                        var teste = false;
                    }
                    else {
                        teste = this.tabu[jogada[0]][jogada[1]].setJogador(jogador); //chama o método que atualiza o tabuleiro e retorna true se a atualização for possível
                        if (!teste) { // se a atualização não for possível
                            this.erroNum = 2; // Seleciona o tipo de erro
                            this.mensagemErro[1] = (this.tabu[jogada[0]][jogada[1]].getErro()); // Armazena a mensagem de erro de campo
                        }
                    }
                    return teste; // boolean
                };
                // Método para verificar a vitória de algum jogador 
                JogoDaVelha.prototype.verificarVitoria = function (tabu) {
                    var horizontal = "";
                    var diagonalS = "";
                    var diagonalP = "";
                    var vertical = "";
                    var retorno = "";
                    for (var linha = 0; (linha < tabu.length); linha++) {
                        for (var coluna = 0; (coluna < tabu.length); coluna++) {
                            horizontal += tabu[linha][coluna].getJogador(); // irá armazenar todos as jogadas feitas na horizontal
                            vertical += tabu[coluna][linha].getJogador(); // irá armazenar todos as jogadas feitas na vertical
                            diagonalP += tabu[coluna][coluna].getJogador(); // irá armazenar todos as jogadas feitas na diagonal principal
                            diagonalS += tabu[coluna][tabu.length - 1 - coluna].getJogador(); // irá armazenar todos as jogadas feitas na diagonal secundária
                            analisaTabu(horizontal, vertical, diagonalP, diagonalS); // chamará uma função que verifica se esses valores registrados são iguais
                            // Não deixa o código armazenar mais de 3 valores em qualquer uma das posições do tabuleiro
                            // o switch não funciona, pois para limitar o valor de um ele obrigatóriamente teria que limitar o valor do outro
                            if (horizontal.length >= 3) {
                                horizontal = "";
                            }
                            if (vertical.length >= 3) {
                                vertical = "";
                            }
                            if (diagonalP.length >= 3) {
                                diagonalP = "";
                            }
                            if (diagonalS.length >= 3) {
                                diagonalS = "";
                            }
                            if (retorno != "") {
                                break;
                            }
                        }
                        if (retorno != "") {
                            break;
                        }
                    }
                    function analisaTabu(linhas, colunas, diag1, diag2) {
                        if (linhas == "XXX" || linhas == "OOO") {
                            retorno = "Jogador ".concat(linhas[0], " ganhou na horizontal");
                        }
                        else if (colunas == "XXX" || colunas == "OOO") {
                            retorno = "Jogador ".concat(colunas[0], " ganhou na vertical");
                        }
                        else if (diag1 == "XXX" || diag1 == "OOO") {
                            retorno = "Jogador ".concat(diag1[0], " ganhou na diagonal principal");
                        }
                        else if (diag2 == "XXX" || diag2 == "OOO") {
                            retorno = "Jogador ".concat(diag2[0], " ganhou na diagonal secund\u00E1ria");
                        }
                        else { // caso nenhum jogador monte uma sequencia, continua o jogo
                            retorno = "";
                        }
                    }
                    return retorno;
                };
                return JogoDaVelha;
            }());
            exports_1("JogoDaVelha", JogoDaVelha);
        }
    };
});
