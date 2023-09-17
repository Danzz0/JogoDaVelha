System.config({
    baseURL: '/',
    map: {
      // Mapeie os módulos para seus caminhos no sistema de arquivos
      'app': 'js/app', // Altere 'js/app' para o caminho real do seu código
      'JogoDaVelha': 'js/JogoDaVelha' // Altere 'js/JogoDaVelha' para o caminho real do seu módulo
    },
    packages: {
      'app': {
        defaultExtension: 'js'
      }
    }
  });