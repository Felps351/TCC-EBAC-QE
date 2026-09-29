const Screen = require('../utils/screen');

describe('Exploração inicial do app EBAC Store', () => {
    it('abre o app e registra a tela inicial', async () => {
        await Screen.dump('1-tela-inicial');
        await driver.pause(3000);
        await Screen.dump('2-apos-aguardar');
    });
});