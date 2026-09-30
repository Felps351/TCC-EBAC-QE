const HomePage = require('../pageobjects/home.page');
const Screen = require('../utils/screen');

describe('Catálogo de Produtos', () => {
    it('abre a aba Browse e registra a tela de produtos', async () => {
        await Screen.dump('1-tela-inicial');
        await HomePage.goToBrowse();
        await driver.pause(3000);
        await Screen.dump('2-tela-browse');
    });
});